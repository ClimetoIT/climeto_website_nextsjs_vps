import connectMongoDB from "../../../backend/db";
import ConsultationLead from "../../../backend/models/ConsultationLead";
import { sendConsultationConversion } from "../../../backend/openaiAds";
import { NextResponse } from "next/server";

function getClientIp(request) {
  const cfIp = request.headers.get("cf-connecting-ip");
  if (cfIp) return cfIp.trim().slice(0, 64);

  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0].trim();
    if (first) return first.slice(0, 64);
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim().slice(0, 64);

  if (request.ip) return String(request.ip).slice(0, 64);
  return "unknown";
}

export async function POST(request) {
  try {
    const { fullName, email, phone, message, sourcePage } = await request.json();

    if (!fullName?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { message: "Please fill in required fields: Name, Email, and Message." },
        { status: 400 }
      );
    }

    await connectMongoDB();

    const ipAddress = getClientIp(request);

    const lead = await ConsultationLead.create({
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : "",
      message: message.trim(),
      sourcePage: sourcePage || "/",
      ipAddress,
    });

    let conversionTracked = false;
    try {
      const result = await sendConsultationConversion({
        request,
        path: sourcePage || "/consultation-conversion",
      });
      conversionTracked = Boolean(result?.ok);
    } catch (adsError) {
      console.error("OpenAI ads consultation conversion failed:", adsError.message);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Consultation details saved.",
        lead,
        conversionTracked,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/consultations error:", error);
    return NextResponse.json(
      { message: "Failed to save consultation details.", error: error.message || String(error) },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const leads = await ConsultationLead.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ leads }, { status: 200 });
  } catch (error) {
    console.error("GET /api/consultations error:", error);
    return NextResponse.json(
      { message: "Failed to fetch consultation leads.", error: error.message || String(error) },
      { status: 500 }
    );
  }
}


import connectMongoDB from "../../../backend/db";
import ConsultationLead from "../../../backend/models/ConsultationLead";
import { NextResponse } from "next/server";

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

    const lead = await ConsultationLead.create({
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : "",
      message: message.trim(),
      sourcePage: sourcePage || "/",
    });

    return NextResponse.json(
      { success: true, message: "Consultation details saved.", lead },
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




import connectMongoDB from "../../../backend/db";
import Blog from "../../../backend/models/Blog";
import { NextResponse } from "next/server";


export async function POST(request) {
  try {

    const { title, slug, excerpt, content, author, category, image, status, publishedAt, relatedLinks } = await request.json();


    await connectMongoDB();


    await Blog.create({ title, slug, excerpt, content, author, category, image, status: status || "published", publishedAt: publishedAt || new Date(), relatedLinks });


    return NextResponse.json({ message: "Blog created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Blog Failed", error }, { status: 500 });
  }
}


export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");

    await connectMongoDB();
    
    let query = {};
    if (status) {
      if (status === "published") {
        query = { 
          $and: [
            { $or: [{ status: "published" }, { status: { $exists: false } }] },
            { $or: [{ publishedAt: { $lte: new Date() } }, { publishedAt: { $exists: false } }] }
          ]
        };
      } else {
        query.status = status;
      }
    }

    const blogs = await Blog.find(query).sort({ createdAt: -1 });

    return NextResponse.json({ blogs },
      { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to fetch blogs", error },
      { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    await connectMongoDB();
    await Blog.findByIdAndDelete(id);

    return NextResponse.json({ message: "Blog deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to delete blog", error }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const { id, title, slug, excerpt, content, author, category, image, status, publishedAt, relatedLinks } = await request.json();

    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    await connectMongoDB();
    await Blog.findByIdAndUpdate(id, { title, slug, excerpt, content, author, category, image, status, publishedAt, relatedLinks });

    return NextResponse.json({ message: "Blog updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to update blog", error }, { status: 500 });
  }
}
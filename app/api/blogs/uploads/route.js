import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
    try {
        const data = await request.formData();
        const file = data.get("file");

        if (!file) {
            console.error("Upload Error: No file provided in formData");
            return NextResponse.json({ message: "No file uploaded" }, { status: 400 });
        }

        // Verify environment variables are present
        if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY) {
            console.error("Upload Error: Cloudinary environment variables are MISSING");
            return NextResponse.json({ message: "Server configuration error" }, { status: 500 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        return new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { folder: "climeto_blogs" },
                (error, result) => {
                    if (error) {
                        console.error("Cloudinary Upload Error Details:", error);
                        resolve(NextResponse.json({ message: "Upload failed", details: error.message }, { status: 500 }));
                    } else {
                        console.log("Upload Success:", result.secure_url);
                        resolve(NextResponse.json({ url: result.secure_url }, { status: 200 }));
                    }
                }
            );

            uploadStream.end(buffer);
        });
    } catch (error) {
        console.error("Crashed in POST /api/blogs/uploads:", error);
        return NextResponse.json({ message: "Internal server error", error: error.message }, { status: 500 });
    }
}


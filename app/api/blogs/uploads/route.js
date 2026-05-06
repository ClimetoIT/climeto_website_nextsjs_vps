import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";


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
            return NextResponse.json({ message: "No file uploaded" }, { status: 400 });
        }


        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        return new Promise((resolve, reject) => {

            const uploadStream = cloudinary.uploader.upload_stream(
                { folder: "climeto_blogs" },
                (error, result) => {
                    if (error) {
                        reject(NextResponse.json({ message: "Upload failed" }, { status: 500 }));
                    } else {

                        resolve(NextResponse.json({ url: result.secure_url }, { status: 200 }));
                    }
                }
            );


            uploadStream.end(buffer);
        });
    } catch (error) {
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}

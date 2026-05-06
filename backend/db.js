import mongoose from "mongoose";
const connectMongoDB = async () => {
    try {

        if (mongoose.connection.readyState == 1) {
            return;
        }

        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected!");
    } catch (error) {
        console.log("error connecting", error);
    }
};

export default connectMongoDB;
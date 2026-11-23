import mongoose, { Schema } from "mongoose";

const consultationLeadSchema = new Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true, default: "" },
    message: { type: String, required: true, trim: true },
    sourcePage: { type: String, trim: true, default: "/" },
  },
  { timestamps: true }
);

const ConsultationLead =
  mongoose.models.ConsultationLead ||
  mongoose.model("ConsultationLead", consultationLeadSchema);

export default ConsultationLead;


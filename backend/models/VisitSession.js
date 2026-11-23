import mongoose, { Schema } from "mongoose";

const pageSchema = new Schema(
  {
    path: { type: String, required: true },
    views: { type: Number, default: 0 },
    durationMs: { type: Number, default: 0 },
  },
  { _id: false }
);

const visitSessionSchema = new Schema(
  {
    sessionId: { type: String, required: true, unique: true, index: true },
    ip: { type: String, required: true },
    pages: { type: [pageSchema], default: [] },
    pageCount: { type: Number, default: 0 },
    totalDurationMs: { type: Number, default: 0 },
    firstSeenAt: { type: Date, default: Date.now },
    lastSeenAt: { type: Date, default: Date.now, index: true },
  },
  { timestamps: true }
);

const VisitSession =
  mongoose.models.VisitSession ||
  mongoose.model("VisitSession", visitSessionSchema);

export default VisitSession;

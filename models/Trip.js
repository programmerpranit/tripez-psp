import mongoose from "mongoose";

const TripSchema = new mongoose.Schema(
  {
    host: {
      type: String,
      required: true,
    },
    name: { type: String, required: true },
    description: { type: String, required: true },
    departure: { type: String, required: true },
    days: { type: Number, required: true },
    nights: { type: Number, required: true },
    amount: { type: Number, required: true },
    highlights: [{ type: String }],
    features: [{ type: String }],
    itirnary: {
      type: String,
      required: true,
    },
    faq: [
      {
        question: String,
        answer: String,
      },
    ],
    featuredImage: { type: String, required: true },
    images: [{ type: String, required: true }],
  },
  { timestamps: true }
);

mongoose.models = {};

export default mongoose.model("Trip", TripSchema);

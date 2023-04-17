import mongoose from "mongoose";

const ItirnarySchema = new mongoose.Schema(
  {
    day: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    location: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

mongoose.models = {};

export default mongoose.model("Itirnary", ItirnarySchema);

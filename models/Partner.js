const mongoose = require("mongoose");

const PartnerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
    },

    password: { type: String, required: true },
    verified: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);
mongoose.models = {};

export default mongoose.model("Partner", PartnerSchema);

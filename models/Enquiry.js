const mongoose = require("mongoose");

const EnquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      lowercase: true,
      required: true,
    },
    phoneNo: { type: Number, required: true },
    dateOfTravel: { type: Number, required: true },
    travellerCount: { type: Number, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);
mongoose.models = {};

export default mongoose.model("Enquiry", EnquirySchema);

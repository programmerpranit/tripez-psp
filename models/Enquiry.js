const mongoose = require("mongoose");

const EnquirySchema = new mongoose.Schema(
  {
    trip: { type: String, required: true },
    host: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNo: { type: String, required: true },
    dateOfTravel: { type: String, required: true },
    travellerCount: { type: Number, required: true },
    message: { type: String, default: "" },
  },
  { timestamps: true }
);
mongoose.models = {};

export default mongoose.model("Enquiry", EnquirySchema);

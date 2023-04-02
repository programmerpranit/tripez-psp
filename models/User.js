const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
    },
    isAdmin: {type: Boolean, default: false},

    password: { type: String, required: true },
    verified: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);
mongoose.models = {};

export default mongoose.model("User", UserSchema);

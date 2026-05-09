import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isOtpVerified: {
    type: Boolean,
    default: false
  },
  otp: { // 432146, 45h35ij
    type: String,
    default: null
  },
}, { timestamps: true })

const User = mongoose.model("User", userSchema)
export default User
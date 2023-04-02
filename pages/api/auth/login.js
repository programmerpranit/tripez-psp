import dbConnect from "../../../middleware/mongoose";
import { enc, AES } from "crypto-js";
import User from "../../../models/User";
import { sign } from "jsonwebtoken";
import { isValidEmail } from "../../../helpers/validations";

const handler = async (req, res) => {
  if (req.method == "POST") {
    try {
      const { email = "", password = "" } = req.body;

      if (email.length == 0 || !isValidEmail(email)) {
        return res.status(400).json({ message: "Invalid Email" });
      }

      await dbConnect();

      const user = await User.findOne({ email: email });

      if (!user) {
        return res
          .status(400)
          .json({ message: "No user found with given email" });
      }

      if (!user.verified) {
        return res.status(400).json({ message: "Email is not verified" });
      }
      const bytes = AES.decrypt(user.password, process.env.USER_SEC);
      const pass = bytes.toString(enc.Utf8);

      if (pass == password) {
        const token = sign({ user }, process.env.USER_SEC, {
          expiresIn: "10d",
        });
        return res
          .status(200)
          .json({ message: "Successfully Logged In", token });
      } else {
        return res.status(401).json({ message: "wrong password" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Unkown Error Occured" });
    }
  } else {
    return res.status(405).json({ message: "This method is not allowed" });
  }
};

export default handler;

import { isValidEmail } from "../../../helpers/validations";
import User from "../../../models/User";
import { AES } from "crypto-js";
import dbConnect from "../../../middleware/mongoose";


const handler = async (req, res) => {
    if (req.method == "POST") {
      try {
        const { email = "", password = "", name = "" } = req.body;
  
        if (email.length == 0 || !isValidEmail(email)) {
          return res.status(400).json({ message: "Invalid Email" });
        }
        if (password.length == 0) {
          return res.status(400).json({ message: "Invalid Password" });
        }
        if (name.length == 0) {
          return res.status(400).json({ message: "Invalid Name" });
        }
  
        // add logic to check email is already exists
        const user = await User.exists({email: req.body.email})
        if(user){
            return res.status(400).send({message:"User already Exists"})
        }
  
        const pass = AES.encrypt(password, process.env.USER_SEC).toString();
  
        await dbConnect();
  
        await User.create({ name, email, password: pass });
  
        return res
          .status(201)
          .json({ message: "User Created Successfully." });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Unkown Error Occured" });
      }
    } else {
      return res.status(405).json({ message: "This method is not allowed" });
    }
  };

  export default handler
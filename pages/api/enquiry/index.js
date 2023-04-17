import Enquiry from "../../../models/Enquiry";
import dbConnect from "../../../middleware/mongoose";
import { isValidEmail } from "../../../helpers/validations";

const handler = async (req, res) => {
  if (req.method == "POST") {
    try {
      const {
        trip = "",
        host = "",
        name = "",
        email = "",
        phoneNo = "",
        dateOfTravel = "",
        travellerCount = "",
        message = "",
      } = req.body;

      if (trip.length == 0) {
        return res.status(400).json({ message: "Unknown Error Occured" });
      }
      if (host.length == 0) {
        return res.status(400).json({ message: "Unknown Error Occured" });
      }
      if (name.length == 0) {
        return res.status(400).json({ message: "Invalid Name" });
      }
      if (email.length == 0 || !isValidEmail(email)) {
        return res.status(400).json({ message: "Invalid Email" });
      }
      if (phoneNo.length == 0) {
        return res.status(400).json({ message: "Invalid Phone No" });
      }
      if (dateOfTravel.length == 0) {
        return res.status(400).json({ message: "Invalid Date Of Travel" });
      }
      if (travellerCount.length == 0) {
        return res.status(400).json({ message: "Invalid traveller Count" });
      }
      if (message.length == 0) {
        return res.status(400).json({ message: "Invalid Message" });
      }

      await dbConnect();

      await Enquiry.create({
        trip,
        host,
        name,
        email,
        phoneNo,
        dateOfTravel,
        travellerCount,
        message,
      });

      return res.status(201).json({ message: "Enquiry sent" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Unkown Error Occured" });
    }
  } else {
    return res.status(405).json({ message: "This method is not allowed" });
  }
};
export default handler;

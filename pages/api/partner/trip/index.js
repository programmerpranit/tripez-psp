import { verifyPartner } from "@/middleware/verifyToken";
import dbConnect from "@/middleware/mongoose";
import Trip from "@/models/Trip";

const handler = async (req, res) => {
  const partner = verifyPartner(req);
  if (!partner) return res.status(401).json({ message: "Unauthorized!" });

  if (req.method == "GET") {
    try {
      // Get the query params and add pagination and sorting

      await dbConnect();

      const trips = Trip.find({}).limit(20);

      return res
        .status(200)
        .json({ message: "Tripes Fetched Successfully", trips });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Unkown Error Occured" });
    }
  }
  if (req.method == "POST") {
    try {
      const {
        name,
        slug,
        description,
        departure,
        days,
        nights,
        amount,
        featuredImage,
      } = req.body;

      const host = partner.partner._id;

      await dbConnect();

      const trip = await Trip.create({
        host,
        name,
        slug,
        description,
        departure,
        days,
        nights,
        amount,
        featuredImage,
      });

      return res
        .status(201)
        .json({ message: "Trip Created Successfully", trip });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Unkown Error Occured" });
    }
  } else {
    return res.status(405).json({ message: "This method is not allowed" });
  }
};
export default handler;

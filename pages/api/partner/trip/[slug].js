import dbConnect from "@/middleware/mongoose";
import Trip from "@/models/Trip";

const handler = async (req, res) => {
  const partner = verifyPartner(req);
  if (!partner) return res.status(401).json({ message: "Unauthorized!" });

  if (req.method == "GET") {
    try {
      const { slug } = req.query;

      await dbConnect();

      const trip = Trip.findOne({ slug: slug });

      return res
        .status(200)
        .json({ message: "Trip Fetched Successfully", trip });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Unkown Error Occured" });
    }
  } else {
    return res.status(405).json({ message: "This method is not allowed" });
  }
};
export default handler;

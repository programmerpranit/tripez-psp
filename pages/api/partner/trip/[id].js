import dbConnect from "@/middleware/mongoose";
import Trip from "@/models/Trip";

const handler = async (req, res) => {
  const partner = verifyPartner(req);
  if (!partner) return res.status(401).json({ message: "Unauthorized!" });

  if (req.method == "GET") {
    try {
      const { id } = req.query;

      await dbConnect();

      const trip = Trip.findOne({ slug: id });

      return res
        .status(200)
        .json({ message: "Trip Fetched Successfully", trip });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Unkown Error Occured" });
    }
  } else if (req.method == "PUT") {
    try {
      const { id } = req.query;

      await dbConnect();

      const {
        name,
        slug,
        description,
        departure,
        days,
        nights,
        amount,
        highlights,
        features,
        faq,
        featuredImage,
        images,
      } = req.body;

      const trip = await Trip.findByIdAndUpdate(id, {
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

      return res.status(200).json({ message: "Trip Updated Successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Unkown Error Occured" });
    }
  } else {
    return res.status(405).json({ message: "This method is not allowed" });
  }
};
export default handler;

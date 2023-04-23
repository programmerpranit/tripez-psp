import { verifyPartner } from "@/middleware/verifyToken";
import dbConnect from "@/middleware/mongoose";
import Trip from "@/models/Trip";

const handler = async (req, res) => {
  if (req.method == "GET") {
    try {
        const { search, min = 0, max = 99999999 } = req.query;

      await dbConnect();

      const trips = await Trip.find({
        $text: { $search: search },
        amount: { $gte: max, $lte: min },
      }).limit(20);

      return res
        .status(200)
        .json({ message: "Tripes Fetched Successfully", trips });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Unkown Error Occured" });
    }
  } else {
    return res.status(405).json({ message: "This method is not allowed" });
  }
};
export default handler;

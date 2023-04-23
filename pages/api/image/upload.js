// import dbConnect from "@/middleware/mongoose";
// import Image from "@/models/Image";

import { v2 as cloudinary } from "cloudinary";
import formidable from "formidable";
import slugify from "slugify";

export const config = {
  api: {
    bodyParser: false,
  },
};

const readFile = (req) => {
  const form = formidable();
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);

    const data = await readFile(req);
    const filepath = data.files.media.filepath;

    const name = slugify(data.fields.title, {
      lower: true,
    });

    cloudinary.config({
      cloud_name: "pranit",
      api_key: process.env.CLOUD_KEY,
      api_secret: process.env.CLOUD_SECRET,
    });

    const timestamp = Date.now();

    const response = await cloudinary.uploader.upload(filepath, {
      public_id: timestamp + "-" + name,
    });
    const url = response.secure_url;
    // await dbConnect();
    // await Image.create({ title: data.fields.title, url, alt: data.fields.title });

    return res
      .status(200)
      .json({ message: "Image Uploaded Successfully", url });
  } else {
    return res.status(405).json({ message: "This method is not allowed" });
  }
};

export default handler;

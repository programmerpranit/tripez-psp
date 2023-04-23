import { BASE_URL } from "@/utils/config";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import slugify from "slugify";

const TripSidebar = ({ trip, setTrip, saveTrip }) => {
  const generateSlug = () => {
    if (!trip) return;
    const slug = slugify(trip.name, {
      lower: true,
    });
    setTrip({ ...trip, slug: slug });
  };

  const [url, setUrl] = useState("");

  const [media, setMedia] = useState(null);

  const uploadImage = async (e) => {
    e.preventDefault();

    try {
      const url = `${BASE_URL}/api/image/upload`;

      const data = new FormData();
      data.append("media", media);
      data.append("title", trip.title);

      let res = await axios.post(url, data);

      if (res.status === 200) {
        setTrip({ ...trip, featuredImage: res.data.url });
        setUrl(res.data.url);
        toast.success("Image Uploaded Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error('Failed to upload image')
    }
  };

  useEffect(() => {
    console.log(media);
  }, [media]);

  return (
    <>
      <div className="pr-10 mt-28">
        <div className="flex justify-between">
          <button onClick={saveTrip} className="bg-primary w-full">Save</button>
        </div>
        <div className="slug my-5 ">
          <p>Slug</p>
          <input
            type="text"
            value={trip?.slug ? trip.slug : ""}
            onChange={(e) => {
              setTrip({ ...trip, slug: e.target.value });
            }}
            className="border p-1 px-2 my-2 w-full outline-none"
          />
          <button onClick={generateSlug} className="bg-primary w-full">
            Generate Slug
          </button>
        </div>

        <div className="slug my-5 ">
          <p>Featured Image</p>
          <input
            className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
            type="file"
            accept="image/*"
            onChange={(e) => setMedia(e.target.files[0])}
            required
          />
          <button
            disabled={!media}
            onClick={uploadImage}
            className="bg-primary disabled:bg-opacity-50 w-full my-5"
          >
            Upload
          </button>
          {trip?.featuredImage && (
            <Image
              src={trip?.featuredImage ? trip.featuredImage : ""}
              width={500}
              height={300}
              alt=""
            />
          )}
          {!trip?.featuredImage && media && (
            <Image
              src={URL.createObjectURL(media)}
              width={500}
              height={300}
              alt=""
            />
          )}
        </div>
      </div>
    </>
  );
};

export default TripSidebar;

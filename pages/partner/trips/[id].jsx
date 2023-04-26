// import BlogSideBar from "@/components/BlogSideBar";
// import ImageSideBar from "@/components/ImageSideBar";
// import TextEditor from "@/components/TextEditor";
import TripSidebar from "@/components/TripSidebar";
import dbConnect from "@/middleware/mongoose";
import Trip from "@/models/Trip";
import { BASE_URL } from "@/utils/config";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AddTrip = ({ tripObj }) => {
  const [trip, setTrip] = useState(tripObj);

  const router = useRouter();

  const saveTrip = () => {
    if (tripObj?._id) {
      updateTrip();
    } else {
      createTrip();
    }
  };

  const createTrip = async () => {
    try {
      const url = `${BASE_URL}/api/partner/trip`;
      const data = {
        name: trip.name,
        slug: trip.slug,
        description: trip.description,
        departure: trip.departure,
        days: trip.days,
        nights: trip.nights,
        amount: trip.amount,
        featuredImage: trip.featuredImage,
      };

      const res = await axios.post(url, data);

      setTrip(res.data.trip);
      router.push(`/partner/trips/${res.data.trip._id}`);

      toast.success("Trip Added Sucessfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to Add trip");
    }
  };

  const updateTrip = async () => {
    try {
      const url = `${BASE_URL}/api/partner/trip/${tripObj._id}`;
      const data = {
        name: trip.name,
        slug: trip.slug,
        description: trip.description,
        days: trip.days,
        nights: trip.nights,
        amount: trip.amount,
        featuredImage: trip.featuredImage,
      };

      const res = await axios.put(url, data);
      toast.success("Trip Saved Sucessfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to save trip");
    }
  };

  return (
    <>
      <div className="flex max-md:flex-col  justify-center">
        {/* <div className="md:w-1/4"><ImageSideBar/></div> */}
        <div className=" max-w-3xl md:w-1/2 p-5">
          <h2 className="pb-5">Add Trip</h2>

          <div className="pr-5">
            <p>Trip Name</p>
            <input
              type="text"
              placeholder="Add Trip Name"
              value={trip?.name ? trip.name : ""}
              onChange={(e) => {
                setTrip({ ...trip, name: e.target.value });
              }}
              className="px-3 w-full p-2 my-2 rounded border outline-none"
            />
          </div>

          <div className="my-5 flex gap-5">
            <div className="">
              <p>Price Starting From</p>
              <input
                type="number"
                min={1}
                placeholder="Amount"
                value={trip?.amount ? trip.amount : ""}
                onChange={(e) => {
                  setTrip({ ...trip, amount: e.target.value });
                }}
                className="px-3 p-2 my-2 rounded border outline-none"
              />
            </div>
            <div className="w-full pr-5">
              <p>Location of departure</p>
              <input
                type="text"
                placeholder="Location"
                value={trip?.departure ? trip.departure : ""}
                onChange={(e) => {
                  setTrip({ ...trip, departure: e.target.value });
                }}
                className="px-3 p-2 my-2 w-full rounded border outline-none"
              />
            </div>
          </div>

          <div className="my-5 flex gap-5 pr-5">
            <div className="w-full">
              <p>No. of Days</p>
              <input
                type="number"
                min={1}
                placeholder="Days"
                value={trip?.days ? trip.days : ""}
                onChange={(e) => {
                  setTrip({ ...trip, days: e.target.value });
                }}
                className="px-3 p-2 my-2 w-full rounded border outline-none"
              />
            </div>
            <div className="w-full">
              <p>No. of Nights</p>
              <input
                type="number"
                placeholder="Nights"
                value={trip?.nights ? trip.nights : ""}
                onChange={(e) => {
                  setTrip({ ...trip, nights: e.target.value });
                }}
                className="px-3 p-2 my-2 w-full rounded border outline-none"
              />
            </div>
          </div>
          <div className="pr-5">
            <p>Trip Description</p>

            <textarea
              name="title"
              value={trip?.description ? trip.description : ""}
              onChange={(e) => {
                setTrip({ ...trip, description: e.target.value });
              }}
              className=" w-full leading-normal my-2 p-2 border mr-5 resize-none outline-none "
              placeholder="Add Trip Description"
            ></textarea>
          </div>

          {/* <TextEditor content={content} setContent={setcontent}/> */}
        </div>
        <div className="md:w-1/4">
          <TripSidebar trip={trip} setTrip={setTrip} saveTrip={saveTrip} />
        </div>
      </div>
    </>
  );
};

export default AddTrip;

export async function getServerSideProps(context) {
  const id = context.query.id;

  if (id == "add") {
    return {
      props: { tripObj: null },
    };
  }

  try {
    await dbConnect();
    const data = await Trip.findById(id);
    const tripObj = JSON.parse(JSON.stringify(data));
    return {
      props: { tripObj },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { tripObj: null },
    };
  }
}

import dbConnect from "@/middleware/mongoose";
import Enquiry from "@/models/Enquiry";
import Trip from "@/models/Trip";
import { useRouter } from "next/router";
import React from "react";

const Enquires = ({ enquirys }) => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(enquirys);
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h3>Enquiries of {slug} </h3>
        {enquirys?.map((enquiry) => (
          <div
            key={enquiry._id}
            className="flex flex-col border-2 border-black w-1/2 rounded-lg p-4 m-4"
          >
            <div>
              <h5>Name: {enquiry.name}</h5>
              <h5>Email ID: {enquiry.email}</h5>
              <h5>Phone Number: {enquiry.phone}</h5>
              <h5>Message: {enquiry.message}</h5>
              <h5>Date of Travel: {enquiry.dateOfTravel}</h5>
              <h5> Traveller Count{enquiry.travellerCount}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Enquires;

export async function getServerSideProps(context) {
  const { slug } = context.query;

  try {
    await dbConnect();
    const enquiryData = await Enquiry.find({ trip: slug }).sort({ _id: -1 });

    const enquirys = JSON.parse(JSON.stringify(enquiryData));
    return {
      props: { enquirys },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { trip: null },
    };
  }
}

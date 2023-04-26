import SearchCard from "@/components/SearchCard";
import dbConnect from "@/middleware/mongoose";
import Trip from "@/models/Trip";
import { jwtVerify } from "jose";
import React from "react";

const PartnerEnquries = ({ trips }) => {
  return (
    <div>
      <div className="max-w-3xl m-auto space-y-5">
        {trips &&
          trips.map((trip) => (
            <SearchCard
              key={trip._id}
              title={trip.name}
              image={trip.featuredImage}
              description={trip.description}
              price={trip.amount}
              slug={`/partner/enquries/${trip.slug}`}
              cta={"Check Enquiries"}
            />
          ))}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  console.log(context.req.cookies);

  try {

    const token = context.req.cookies["authorization"];
    console.log(typeof token);
    var key = process.env.PARTNER_SEC;
    const sec = new TextEncoder().encode(key);

    var partner = await jwtVerify(token, sec);
    console.log(partner.payload.partner._id);

    await dbConnect();
    const tripData = await Trip.find({host: partner.payload.partner._id,}).limit(20);
    // console.log(tripData);
    const trips = JSON.parse(JSON.stringify(tripData));
    return {
      props: { trips },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { trips: null },
    };
  }
}

export default PartnerEnquries;

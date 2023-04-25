import SearchCard from "@/components/SearchCard";
import dbConnect from "@/middleware/mongoose";
import Trip from "@/models/Trip";
import React from "react";

const PartnerEnquries = ({trips}) => {
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
            />
          ))}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  console.log(context.req.cookies);

  try {
    await dbConnect();
    const tripData = await Trip.find({}).limit(20);
    console.log(tripData);
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

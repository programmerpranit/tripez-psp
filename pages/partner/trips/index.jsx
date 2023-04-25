import SearchCard from "@/components/SearchCard";
import dbConnect from "@/middleware/mongoose";
import Trip from "@/models/Trip";
import { jwtVerify } from "jose";
import Link from "next/link";

export default function MyTrips({trips}) {
  return (
    <>

    <div className="flex max-w-3xl mx-auto justify-between items-center">

      <h2 className=" my-5">My Trips</h2>
      <Link href='/partner/trips/add'>
      <button className="bg-primary h-fit">Add Trip</button>
      </Link>
    </div>
      <div className="max-w-3xl m-auto space-y-5">

      {trips && trips.map((trip) => (
                <SearchCard
                  key={trip._id}
                  title={trip.name}
                  image={trip.featuredImage}
                  description={trip.description}
                  price={trip.amount}
                  slug={`/trips/${trip.slug}`}
                />
              ))}
      </div>
    </>
  );
}



export async function getServerSideProps(context) {
 console.log(context.req.cookies)

  try {

    // const token = context.req.cookies["authorization"];
    // console.log(typeof(token))
    // var key = process.env.PARTNER_SEC;
    // const sec = new TextEncoder().encode(key);

    // var partner = await jwtVerify(token, sec);

    await dbConnect();
    const tripData = await Trip.find({ }).limit(20);
    console.log(tripData);
    // const tripData = await Trip.aggregate([
    //   {
    //     $lookup: {
    //       from: "Partner",
    //       localField: "host",
    //       foreignField: "_id",
    //       as: "triphost",
    //     },
    //   },
    // ]);

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

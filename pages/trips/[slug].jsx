import Link from "next/link";
import React from "react";
import Image from "next/image";
import dbConnect from "@/middleware/mongoose";
import Trip from "@/models/Trip";

export default function TripDetail({ trip }) {
  return (
    <>
      <div className="flex max-md:flex-col max-w-6xl h-fit m-auto">
        <div className="md:w-2/3  p-5">
          <h2 className=" mt-5">{trip.name}</h2>
          <p className="mb-10 mt-3">
            {/* Lorem ipsum dolor sit amet consectetur adipisicing. */}
          </p>

          <Image
            src={trip.featuredImage}
            className="rounded-lg "
            width={1000}
            height={700}
            alt=""
          />

          <p className="my-10">{trip.description}</p>
        </div>

        <div className="md:w-1/3 max-md:p-5">
          {/* <div className="sticky top-0 h-fit bg-red-50 "> */}

          <div className="bg-sky-50 rounded p-5 mt-10">
            <h4>Starting From</h4>
            <h2>{trip.amount} /-</h2>
          </div>
          {/* <Link href={`/book/`}>
            <button className="w-full text-base my-5">Book Now</button>
          </Link> */}

          <div className="p-5 my-5  bg-blue-50">
            {trip.days && <p className="font-semibold ">Days : {trip.days}</p>}
            {trip.nights != 0 && (
              <p className="font-semibold ">Nights : {trip.nights}</p>
            )}
          </div>
          {/* <div className="p-5 my-5  bg-blue-50">
            <p className="lowercase">TAX APPLICABLE ON THE RATE CARD</p> <br />
            <p>The above Packages is Valid from 20 March to 31 May</p>
            <br />
            <ul className="list-disc p-5">
              <li>Extra person 10 N Above : 2000 [ Monday to Thursday ]</li>
              <li>
                Extra person 10 N Above : 2500 [ Friday, Saturday & Sunday]
              </li>
              <li>Child Rate 5 N above : 1500 [ Monday to Thursday ]</li>
              <li>Child Rate 5 N above : 2000 [ Friday, Saturday & Sunday]</li>
            </ul>
          </div> */}
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.query;

  try {
    await dbConnect();
    const tripData = await Trip.findOne({ slug: slug });

    const trip = JSON.parse(JSON.stringify(tripData));
    return {
      props: { trip },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { trip: null },
    };
  }
}

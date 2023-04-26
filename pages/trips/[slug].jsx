import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import dbConnect from "@/middleware/mongoose";
import Trip from "@/models/Trip";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TripDetail({ trip }) {
  const [enquiry, setEnquiry] = useState({
    name: "",
    email: "",
    phone: "",
    dateOfTravel: "",
    travellerCount: "",
    message: "",
  });
  const handleChange = (event) => {
    setEnquiry({
      ...enquiry,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async () => {
    const url = "http://localhost:3000/api/enquiry";
    
     const data ={
      trip: trip.slug,
      host: trip.host,
      name: enquiry.name,
      email: enquiry.email,
      phoneNo:enquiry.phone,
      dateOfTravel: enquiry.dateOfTravel,
      travellerCount: enquiry.travellerCount,
      message: enquiry.message
  }

    try {
      const response = axios.post(url, data);
      setEnquiry({
        name: "",
        email: "",
        phone: "",
        dateOfTravel: "",
        travellerCount: "",
        message: "",
      });
      console.log(response)
      toast.success("enquiry sent")
    } catch (error) {
      console.log(error)
    }
    
  };
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
          <div className="flex flex-col p-2 m-2">
            <h2>Enquiry Form</h2>
            <div className="w-full">
              <p>Full Name</p>
              <input
                type="text"
                placeholder="Full Name"
                value={enquiry.name}
                name="name"
                onChange={handleChange}
                className=" px-3 p-2 my-2 w-full rounded border outline-none"
              />
            </div>
            <div className="w-full">
              <p>Email</p>
              <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                value={enquiry.email}
                className=" px-3 p-2 my-2 w-full rounded border outline-none"
              />
            </div>
            <div className="w-full">
              <p>Phone No</p>
              <input
                name="phone"
                type="number"
                placeholder="Phone No"
                onChange={handleChange}
                value={enquiry.phone}
                className=" px-3 p-2 my-2 w-full rounded border outline-none"
              />
            </div>
            <div className="w-full">
              <p>Date of Travel</p>
              <input
                name="dateOfTravel"
                type="date"
                value={enquiry.dateOfTravel}
                placeholder="Eg: 12-04-2023 "
                onChange={handleChange}
                className=" px-3 p-2 my-2 w-full rounded border outline-none"
              />
            </div>
            <div className="w-full">
              <p>Traveller Count</p>
              <input
                type="number"
                name="travellerCount"
                min={1}
                value={enquiry.travellerCount}
                placeholder="Traveller Count"
                onChange={handleChange}
                className=" px-3 p-2 my-2 w-full rounded border outline-none"
              />
            </div>
            <div className="pr-5">
              <p>Message</p>
              <textarea
                name="message"
                value={enquiry.message}
                onChange={handleChange}
                className=" w-full leading-normal my-2 p-2 border mr-5 resize-none outline-none "
                placeholder="Give Message"
              ></textarea>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={handleSubmit}
              className="border-2 p-1 m-1 border-black px-4 text-black"
            >
              
              send
            </button>
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

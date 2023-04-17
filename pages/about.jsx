import React from "react";
import Card from "@/components/Card";

export default function about() {
  const data = [
    {
      title: "The Himalayas",
      description: "Lets go to the north of india!!!",
      img: "https://images.unsplash.com/photo-1513023840371-dd774fcaee5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      title: "The Himalayas",
      description: "Lets go to the north of india!!!",
      img: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      title: "The Himalayas",
      description: "Lets go to the north of india!!!",
      img: "https://images.unsplash.com/photo-1573331519317-30b24326bb9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhpbWFsYXlhc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <div className="px-8">
      <div className="mx-auto max-w-2xl py-48">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900">About Us</h1>
          <p className="mt-4 text-3xl text-gray-600">
            We are a team of passionate coders on a mission to get you the{" "}
            <span className="text-orange-500"> Best Trips </span>of your life
          </p>
        </div>
      </div>
    </div>
  );
}

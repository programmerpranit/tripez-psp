import TripCard from "@/components/TripCard";
import React from "react";

export default function FeaturedTrips() {
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
    <>
      <h2 className="text-center ">Featured Trips</h2>
      <div className="flex flex-col shadow-black m-4 rounded-lg pb-4 md:flex-row  items-center justify-center">
        {data.map((item) => {
          return (
            <TripCard
              key={item}
              img={item.img}
              title={item.title}
              desc={item.description}
            />
          );
        })}
      </div>
    </>
  );
}

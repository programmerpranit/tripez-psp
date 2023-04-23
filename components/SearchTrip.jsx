import React from "react";
import { useState } from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { useRouter } from "next/router";

export default function SearchTrip() {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const handleChange = (e) => {
    setSearch({
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.length == 0) return;

    router.push(`/search/${search}`);
  };

  return (
    <div className="h-[70vh] flex justify-center flex-col">
      <h2 className="p-5 max-w-4xl mx-auto text-center">
        <span className="text-primary"> Search </span> Trips, <span className="text-primary">Compare </span>Trips Get the <span className="text-primary">Best</span> Price.
      </h2>

      <form
        onSubmit={(e) => handleSearch(e)}
        className="max-w-xl border-2 w-full  border-secondary mx-auto rounded flex justify-center items-center"
      >
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none px-3 py-2 w-full"
        />
        <input type="submit" className="hidden" />

        <Image
          onClick={handleSearch}
          src="/SearchIcon.svg"
          width="30"
          height="30"
          className="mx-2"
          alt=""
        />
      </form>
      {/* <div className="flex text-3xl text-black items-center justify-center">
        <Typewriter
          className=" font-extrabold "
          onInit={(typewriter) => {
            typewriter
              .typeString(`Make your trip Fun`)
              .pauseFor(2000)
              .deleteChars(3)
              .typeString("Exciting")
              .start();
          }}
        />
      </div> */}
    </div>
  );
}

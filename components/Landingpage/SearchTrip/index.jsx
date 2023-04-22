import React from "react";
import { useState } from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import Image from "next/image";
export default function index() {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch({
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="min-h-screen flex justify-center flex-col">
      <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent text-black border-black border-2 rounded-lg p-3 m-2 w-1/2"
        />
        <Link href={`/search/${search}`}>
          <Image
            src="/SearchIcon.svg"
            width="30"
            height="30"
            className="cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex text-3xl text-black items-center justify-center">
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
      </div>
    </div>
  );
}

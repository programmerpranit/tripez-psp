import Head from "next/head";
import Footer from "../components/Footer";
import Card from "@/components/Card";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
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

export default function Home() {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch({
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="flex  bg-[url('/himalaya.jpg')] min-h-screen  flex-col h-screen justify-between">
        <Navbar login={true} signup={true} />

        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent text-white border-2 rounded-lg p-2 m-2 w-1/2"
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
        <div className="flex text-3xl text-green-200 items-center justify-center">
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

        <div className="flex items-center justify-center">
          {data.map((item) => {
            return (
              <Card
                title={item.title}
                description={item.description}
                url={item.img}
              />
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
}

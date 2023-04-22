import Head from "next/head";
import Footer from "../components/Footer";
import Card from "@/components/Card";
import Navbar from "../components/Navbar";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import LandingPage from "@/components/Landingpage";
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
  return (
    <>
      <LandingPage />
    </>
  );
}
{
  /* <div className="flex items-center justify-center">
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
<Footer /> */
}

import Aminity from "@/components/Aminity";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Image from "next/image";
import { AiOutlineWifi } from "react-icons/ai";
import {
  TbAirConditioning,
  TbMicrowave,
  TbDeviceLandlinePhone,
} from "react-icons/tb";
import { BiFridge, BiBed, BiArea, BiDish } from "react-icons/bi";
import { BsRouter, BsFileLock, BsTv, BsWater } from "react-icons/bs";
import {
  MdAir,
  MdDinnerDining,
  MdOutlineSatellite,
  MdOutlineSmokeFree,
} from "react-icons/md";
import {
  GiTowel,
  GiWashingMachine,
  GiWineGlass,
  GiCoffeePot,
} from "react-icons/gi";
import { FaDog, FaShower } from "react-icons/fa";

export default function Trip() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <div className="flex max-md:flex-col max-w-6xl h-fit m-auto">
        <div className="md:w-2/3  p-5">
          <h2 className="text-center mt-5">Trip Name</h2>
          <p className="mb-10 mt-3">
            {/* Lorem ipsum dolor sit amet consectetur adipisicing. */}
          </p>

          <Image
            src={"/himalaya.jpg"}
            className="rounded-lg"
            width={1000}
            height={700}
            alt=""
          />

          <p className="my-10">
            description Come stay in the comfort room for a real “home away from
            home” atmosphere. The most spacious room has all modern amenities
            including a sofa cum bed. The room is furnished with a king size bed
            that can accommodate a couple and a child. It comes with a
            landscaped lake view that enlightens the entire view of the cottage.
            You can ask for extra mattress if needed.
          </p>

          {/* <h3 className="mb-5">Aminities</h3> */}
          {/* <div className="flex flex-wrap justify-center">
            <Aminity icon={<BsWater size={50} />} name={"Lakeview"} />
            <Aminity icon={<TbAirConditioning size={50} />} name={"AC"} />
            <Aminity icon={<AiOutlineWifi size={50} />} name={"Free Wifi"} />
            <Aminity
              icon={<MdOutlineSmokeFree size={50} />}
              name={"Non-smoking room"}
            />
            <Aminity icon={<BiDish size={50} />} name={"Room service"} />
            <Aminity
              icon={<BsTv size={50} />}
              name={"Flat screen TV"}
            />
            <Aminity
              icon={<GiCoffeePot size={50} />}
              name={"Electric kettle"}
            />
            <Aminity icon={<BiFridge size={50} />} name={"Refrigerator"} />
            <Aminity icon={<FaDog size={50} />} name={"Pet friendly"} />
            <Aminity
              icon={<FaShower size={50} />}
              name={"Private bathroom"}
            />
            <Aminity
              icon={<MdDinnerDining size={50} />}
              name={"In room Dinning"}
            />
            <Aminity
              icon={<BsFileLock size={50} />}
              name={"Cupboard with locker"}
            />
          </div> */}
        </div>

        <div className="md:w-1/3 max-md:p-5">
          {/* <div className="sticky top-0 h-fit bg-red-50 "> */}

          <div className="bg-sky-50 rounded p-5 mt-10">
            <h4>Starting From</h4>
            <h2>Trip amount</h2>
            
          </div>
          <Link href={`/book/`}>
            <button className="w-full text-base my-5">Book Now</button>
          </Link>
          {/* 
          <div className="info flex gap-5">
            <div className="w-1/2 p-3 bg-slate-100  flex flex-col items-center ">
              <BiBed size={50} className={"text-primary"} />
              <p>1 King</p>
            </div>
            <div className="w-1/2 p-3 bg-slate-100  flex flex-col items-center ">
              <BiArea size={50} className={"text-primary"} />
              <p>313 sq ft</p>
            </div>
          </div> */}

          <div className="p-5 my-5  bg-blue-50">
            <p className="font-semibold text-center">
               Days : 9 
            </p>
            <p className="font-semibold text-center">
               Nights : 9 
            </p>
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

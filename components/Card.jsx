import Image from "next/image";
import Link from "next/link";

export default function Card( {image} ) {
  return (
    <>
    <div className="w-[20%] h-[80%] m-5">
      <div className="flex h-full w-full flex-col shadow-lg rounded-lg justify-end relative overflow-hidden">
        <img
          src={'/himalaya.webp'}
          alt="img"
          className="object-cover w-full h-full rounded-[10px] z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute left-4 bottom-4 text-left p-1">
          <h1 className="text-xl text-white font-semibold">{props.title}</h1>
          <p className="text-gray-300 mt-2">
            {props.description}
          </p>
          <Link href={'/search/himalaya'} >
          <button className="bg-white p-2 rounded-md text-black hover:bg-gray-300 cursor-pointer mt-2 font-semibold">
            Explore
          </button>
          </Link>
        </div>
      </div>
    </div>
    </>
    
  );
}

import { useState, React } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchCard from "@/components/SearchCard";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [minimum, setMinimum] = useState("");
  const [maximum, setMaximum] = useState("");
  return (
    <>
      <div className="h-screen max-w-[1100px] mx-auto">

        <div className="h-1/4">
          <form action="">
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
          </form>
        </div>

        <div className="h-3/4 flex">

          <div className="md:w-1/4 border-gray-200 border p-2 space-y-4">
            <p>Budget</p>
            <input
              type="number"
              placeholder="Min"
              value={minimum}
              onChange={(e) => setMinimum(e.target.value)}
              className="bg-transparent w-full text-black border-black border-2 rounded-lg p-3"
            />
            <input
              type="number"
              placeholder="Max"
              value={maximum}
              onChange={(e) => setMaximum(e.target.value)}
              className="bg-transparent w-full text-black border-black border-2 rounded-lg p-3"
            />

            <button className="bg-blue-500 text-white p-2 w-full">Filter</button>

          </div>

          <div className="md:w-3/4 px-10 space-y-6">
            <SearchCard></SearchCard>
            <SearchCard></SearchCard>
          </div>

        </div>
      </div>
    </>
  );
};

export default SearchPage;

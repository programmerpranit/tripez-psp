import { useState, React } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchCard from "@/components/SearchCard";
import { useRouter } from "next/router";
import dbConnect from "@/middleware/mongoose";
import Trip from "@/models/Trip";

const SearchPage = ({ trips }) => {
  const [search, setSearch] = useState("");
  const [minimum, setMinimum] = useState("");
  const [maximum, setMaximum] = useState("");

  const router = useRouter();
  console.log("dfgdf")
  console.log(trips)
  const handleSearch = (e) => {
    e.preventDefault();

    if (search.length == 0) return;

    router.push(`/search/${search}`);
  };

  return (
    <>
      <div className="max-w-6xl mx-auto">
        <form
          onSubmit={(e) => handleSearch(e)}
          className="max-w-xl border-2 w-full my-20 border-secondary mx-auto rounded-md flex justify-center items-center"
        >
          <input
            type="text"
            placeholder="Search With Location"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="outline-none rounded-md px-3 py-2 w-full"
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

        <div className="flex">
          {/* <div className="md:w-1/4 border-gray-200 border p-5 bg-gray-100 space-y-4 max-h-[50vh]">
            <h3>Budget</h3>
            <input
              type="number"
              placeholder="Min"
              value={minimum}
              onChange={(e) => setMinimum(e.target.value)}
              className="bg-transparent w-full text-black border-black border-2 rounded-md px-3 py-2"
            />
            <input
              type="number"
              placeholder="Max"
              value={maximum}
              onChange={(e) => setMaximum(e.target.value)}
              className="bg-transparent w-full text-black border-black border-2 rounded-md px-3 py-2"
            />

            <button className="bg-blue-500 text-white w-full">Filter</button>
          </div> */}

          <div className="md:w-3/4 mx-auto px-10 space-y-6">

            {trips &&
              trips.map((trip) => (
                <SearchCard
                  key={trip._id}
                  image={trip.featuredImage}
                  title={trip.name}
                  description={trip.description}
                  price={trip.amount}
                  slug={`/trips/${trip.slug}`}
                />
              ))}

            {(!trips || trips.length == 0) && (
              <p className="text-center w-full">No Trip Found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;

export async function getServerSideProps(context) {
  const { slug } = context.query;

  try {
    await dbConnect();
    const tripData = await Trip.find({}).limit(20);

    const trips = JSON.parse(JSON.stringify(tripData));
    return {
      props: { trips },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { trips: null },
    };
  }
}

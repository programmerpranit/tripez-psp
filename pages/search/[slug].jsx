import { useState, React, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchCard from "@/components/SearchCard";
import { useRouter } from "next/router";
import dbConnect from "@/middleware/mongoose";
import Trip from "@/models/Trip";
import { BASE_URL } from "@/utils/config";
import axios from "axios";
import { toast } from "react-toastify";

const Search = ({ tripsList }) => {
  const [search, setSearch] = useState("");
  const [minimum, setMinimum] = useState("");
  const [maximum, setMaximum] = useState("");

  const [trips, setTrips] = useState(tripsList);

  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.length == 0) return;

    router.push(`/search/${search}`);
  };

  const filter = async () => {
    try {
      const url = `${BASE_URL}/api/trip`;
      const res = await axios.get(url, {
        params: {
          search: search,
          min: minimum,
          max: maximum,
        },
      });
      setTrips(res.data.trips);
    } catch (error) {
      toast.error("Failed to fetch the trips");
    }
  };

  useEffect(() => {
    if (!router.isReady) return;
    setSearch(router.query.slug);
    // console.log(tripsList);
  }, [router]);

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
          <div className="md:w-1/4 border-gray-200 border p-5 bg-gray-100 space-y-4 max-h-[50vh]">
            <h3>Budget</h3>
            <input
              type="number"
              placeholder="Min"
              value={minimum}
              onChange={(e) => setMinimum(e.target.value)}
              className="bg-transparent w-full text-black border-secondary border-2 rounded-md px-3 py-2"
            />
            <input
              type="number"
              placeholder="Max"
              value={maximum}
              onChange={(e) => setMaximum(e.target.value)}
              className="bg-transparent w-full text-black border-secondary border-2 rounded-md px-3 py-2"
            />

            <button onClick={filter} className="bg-blue-500 text-white w-full">
              Filter
            </button>
          </div>
          {trips && trips.length != 0 && (
            <div className="md:w-3/4 px-10 space-y-6">
              {trips.map((trip) => (
                <SearchCard
                  key={trip._id}
                  title={trip.name}
                  image={trip.featuredImage}
                  description={trip.description}
                  price={trip.amount}
                  slug={`/trips/${trip.slug}`}
                />
              ))}
            </div>
          )}

          {(!trips || trips.length == 0) && (
            <p className="text-center w-full">No Trip Found with given query</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const { slug } = context.query;

  try {
    await dbConnect();
    const tripData = await Trip.find({ $text: { $search: slug } }).limit(20);
    console.log(tripData);
    // const tripData = await Trip.aggregate([
    //   {
    //     $lookup: {
    //       from: "Partner",
    //       localField: "host",
    //       foreignField: "_id",
    //       as: "triphost",
    //     },
    //   },
    // ]);

    const tripsList = JSON.parse(JSON.stringify(tripData));
    return {
      props: { tripsList },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { tripsList: null },
    };
  }
}

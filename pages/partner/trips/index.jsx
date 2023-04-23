import SearchCard from "@/components/SearchCard";
import Trip from "@/components/Trip";
import Link from "next/link";

export default function MyTrips() {
  return (
    <>

    <div className="flex max-w-3xl mx-auto justify-between items-center">

      <h2 className=" my-5">My Trips</h2>
      <Link href={'/partner/trips/add'}>
      <button className="bg-primary h-fit">Add Trip</button>
      </Link>
    </div>
      <div className="max-w-3xl m-auto space-y-5">
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
      </div>
    </>
  );
}

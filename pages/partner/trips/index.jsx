import SearchCard from "@/components/SearchCard"
import Trip from "@/components/Trip"

export default function MyTrips() {
  return (
    <>
    
      <h2 className="text-center my-5">My Trips</h2>
<div className="max-w-3xl m-auto space-y-5">

      <SearchCard/>
      <SearchCard/>
      <SearchCard/>
      <SearchCard/>
</div>
    
    </>
  )
}

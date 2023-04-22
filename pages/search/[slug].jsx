import React from 'react'
import { useRouter } from "next/router";
import Trip from "@/components/Trip"

const Search = () => {
  const router = useRouter();
  const { slug } = router.query;
  
  return (
    <div>
          <Trip name={"Himalayas 7 days"}

desc={"A Window To Asia’s Artistic Past And Present | Visit And Take A Look Today. 6,000 Years Of Art."}
imgUrl = {"/himalaya.jpg"}
/>
    </div>
    
  )
}
export default Search

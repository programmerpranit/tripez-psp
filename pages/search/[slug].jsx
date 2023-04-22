import React from "react";
import { useRouter } from "next/router";
import Trip from "@/components/Trip";

const Search = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <div></div>;
};
export default Search;

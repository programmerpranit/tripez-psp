import React from "react";
import { useRouter } from "next/router";


export default function Trip() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
    <div className="flex justify-center min-h-screen">
      <div>
        <h2>
          Blue Water Room
        </h2>
      </div>
      <div className="flex flex-col">

      </div>
    </div>
    </>
  );
}

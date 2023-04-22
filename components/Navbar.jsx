import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [pathname, setPathname] = useState("/");

  const path = useRouter().asPath;

  useEffect(() => {
    setPathname(path);
  }, [path]);

  if (path.startsWith("/admin")) return;

  return (
    <>
      <nav className="flex max-md:flex-col max-w-6xl m-auto justify-between p-10 ">
        <div className="max-md:text-center max-md:my-5">
          <Link href="/">
            <h2 className="text-[28px] font-medium">Tripez</h2>
          </Link>
        </div>
        <div className="flex gap-8 justify-center items-center">
          <Link href="/">
            <p
              className={`font-medium  text-lg ${
                pathname == "/" ? "text-primary" : "text-secondary"
              } hover:text-primary`}
            >
              Home
            </p>
          </Link>
          <Link href="/about">
            <p
              className={`font-medium  text-lg ${
                pathname == "/about" ? "text-primary" : "text-secondary"
              } hover:text-primary`}
            >
              About
            </p>
          </Link>
          <Link href="/trips">
            <p
              className={`font-medium  text-lg ${
                pathname.startsWith("/trips")
                  ? "text-primary"
                  : "text-secondary"
              } hover:text-primary`}
            >
              Trips
            </p>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

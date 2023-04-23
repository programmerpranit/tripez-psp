import Link from "next/link";
import { BASE_URL } from "@/utils/config";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Signup() {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (email.length == 0) return;
    if (password.length == 0) return;

    try {
      const url = `${BASE_URL}/api/auth/signup`;
      const data = {
        name,
        email,
        password,
      };
      const res = await axios.post(url, data);

      if (res.status == 201) {
        toast.success(res.data.message);
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Unknown Error Occured");
      }
    }
  };


  return (
    <section className="sm:h-screen bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-gray-100 rounded-lg shadow-lg md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold">
              Sign Up for free
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={(e) => handleSignUp(e)}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  Name
                </label>
                <input
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  value={name}
                  type="text"
                  name="name"
                  id="name"
                  className="sm:text-sm border rounded-lg block w-full p-2.5"
                  placeholder="name@company.com"
                  required=""
                ></input>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  Email
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  type="email"
                  name="email"
                  id="email"
                  className="sm:text-sm border rounded-lg block w-full p-2.5"
                  placeholder="name@company.com"
                  required=""
                ></input>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium"
                >
                  Password
                </label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="sm:text-sm border rounded-lg block w-full p-2.5"
                  required=""
                ></input>
              </div>
              {/* <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline"
                >
                  Forgot password?
                </a>
              </div> */}
              <button
                type="submit"
                className="w-full text-white bg-blue-500 hover:bg-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign Up
              </button>
              <p className="text-sm font-light">
                Already have an account ?{" "}
                <Link
                  href="/auth/login"
                  className="font-medium"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { BASE_URL } from "@/utils/config";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const cookies = new Cookies();

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email.length == 0) return;
    if (password.length == 0) return;

    try {
      const url = `${BASE_URL}/api/auth/login`;
      const data = {
        email,
        password,
      };
      const res = await axios.post(url, data);

      if (res.status == 200) {
        localStorage.setItem("token", res.data.token);
        cookies.set("authorization", res.data.token, { path: "/" });
        toast.success(res.data.message);
        router.push("/partner");
      }
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Unknown Error Occured");
      }
    }
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:py-10">
        <div className="w-full bg-gray-100 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold">
              Login to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={(e) => handleLogin(e)}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  type="email"
                  className="sm:text-sm border rounded-lg block w-full p-2.5 "
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
                    setpassword(e.target.value);
                  }}
                  value={password}
                  type="password"
                  placeholder="••••••••"
                  className="sm:text-sm border rounded-lg block w-full p-2.5"
                  required=""
                ></input>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-500 hover:bg-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Login
              </button>
              <p className="text-sm font-light">
                Dont have an account yet?
                <Link
                  href="/auth/signup"
                  className="font-medium"
                > Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ToastContainer } from "react-toastify";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  return (
    <>
      <Head>
        <title>Tripez</title>
      </Head>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

import Head from "next/head";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <Navbar />
        <main>Helllo this is main</main>
        <Footer />
      </div>
    </>
  );
}

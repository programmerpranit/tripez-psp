import { React, useState } from "react";

export default function Trip(props) {
  // TODO: Write all the states and add them to event listners
  const [trip, setTrip] = useState("");
  const [host, sethost] = useState("");

  return (
    <div className="h-screen flex m-10 flex-col md:flex-row">
      <div className="md:w-2/3">
        <h1 className="font-bold text-2xl md:text-5xl">{props.name}</h1>
        <img
          className="mt-4 md:mt-8 md:w-3/4  rounded-md"
          src={props.imgUrl}
          alt="img"
        />
        <p className="mt-4 md:mt-8 w-3/3 text-xl md:text-2xl">{props.desc}</p>
      </div>

      <div className="h-screen mt-10 md:mt-0 md:w-1/3 p-3 text-xl md:text-2xl border border-red-300">
        <h1 className="text-center text-2xl md:text-3xl">Enquiry Form</h1>
        <form>
          <div>
            <label htmlFor="trip" className="block mb-1">
              trip
            </label>
            <input
              onChange={(e) => {
                setTrip(e.target.value);
              }}
              id="trip"
              type="text"
              className="border border-slate-400 rounded-lg block w-full p-1 "
              required=""
            ></input>
          </div>

          <div>
            <label htmlFor="host" className="block mb-1">
              host
            </label>
            <input
              onChange={(e) => {
                sethost(e.target.value);
              }}
              id="host"
              type="text"
              className="border border-slate-400 rounded-lg block w-full p-1"
              required=""
            ></input>
          </div>

          <div>
            <label htmlFor="name" className="block mb-1">
              name
            </label>
            <input
              onChange={(e) => {
                setState(e.target.value);
              }}
              id="name"
              type="text"
              className="border border-slate-400 rounded-lg block w-full p-1"
              required=""
            ></input>
          </div>

          <div>
            <label htmlFor="email" className="block mb-1">
              email
            </label>
            <input
              onChange={(e) => {
                setState(e.target.value);
              }}
              id="email"
              type="text"
              className="border border-slate-400 rounded-lg block w-full p-1"
              required=""
            ></input>
          </div>

          <div>
            <label htmlFor="phoneNo" className="block mb-1">
              phoneNo
            </label>
            <input
              onChange={(e) => {
                setState(e.target.value);
              }}
              id="phoneNo"
              type="text"
              className="border border-slate-400 rounded-lg block w-full p-1"
              required=""
            ></input>
          </div>

          <div>
            <label htmlFor="dateOfTravel" className="block mb-1">
              dateOfTravel
            </label>
            <input
              onChange={(e) => {
                setState(e.target.value);
              }}
              id="dateOfTravel"
              type="text"
              className="border border-slate-400 rounded-lg block w-full p-1"
              required=""
            ></input>
          </div>

          <div>
            <label htmlFor="travellerCount" className="block mb-1">
              travellerCount
            </label>
            <input
              onChange={(e) => {
                setState(e.target.value);
              }}
              id="travellerCount"
              type="text"
              className="border border-slate-400 rounded-lg block w-full p-1"
              required=""
            ></input>
          </div>

          <div>
            <label htmlFor="message" className="block mb-1">
              message
            </label>
            <input
              onChange={(e) => {
                setState(e.target.value);
              }}
              id="message"
              type="text"
              className="border border-slate-400 rounded-lg block w-full p-1"
              required=""
            ></input>
          </div>

          <div>
            <button
              type="submit"
              className="w-full mt-4 mb-2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Submit
            </button>
          </div>

        </form>
      </div>

    </div>
  );
}

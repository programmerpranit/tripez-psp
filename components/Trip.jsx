import { React, useState } from "react";

export default function Trip(props) {
  // TODO: Write all the states and add them to event listners
  const [trip, setTrip] = useState("");
  const [host, sethost] = useState("");

  return (
    <div className=" flex m-10 flex-col md:flex-row max-w-[1000px] mx-auto">
      <div className="md:w-2/3">
        <h1 className="font-bold text-2xl ">{props.name}</h1>
        <img
          className="mt-4 md:mt-8 md:w-3/4  rounded-md"
          src={props.imgUrl}
          alt="img"
        />
        <p className="mt-4 md:mt-8 w-3/3 w-2/3 ">{props.desc}</p>
      </div>

      <div className=" mt-10 md:mt-0 md:w-1/3 p-3 text-xl border border-red-300">
        <h1 className="text-center text-2xl md:text-3xl">Enquiry Form</h1>
        <form>
          <div>
            <label htmlFor="trip" className="block mb-1">
              Trip
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
              Host
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
              Name
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
              Email
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
              Phone Number
            </label>
            <input
              onChange={(e) => {
                setState(e.target.value);
              }}
              id="phoneNo"
              type="number"
              className="border border-slate-400 rounded-lg block w-full p-1"
              required=""
            ></input>
          </div>

          <div>
            <label htmlFor="dateOfTravel" className="block mb-1">
             Date of Travel
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
              Traveller Count
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
              Message
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
              className={'w-full p-2 my-5 text-white rounded bg-blue-500'}
              >
              Submit
            </button>
          </div>

        </form>
      </div>

    </div>
  );
}

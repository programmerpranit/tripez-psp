import React from "react";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import { useState } from "react";
export default function Trip() {
  const router = useRouter();
  const { slug } = router.query;
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imagesArray = [];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          imagesArray.push(reader.result);
          setImages(imagesArray);
        }
      };
      reader.readAsDataURL(file);
    });
  };
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div>
        <form>
          <h2 className="text-center">Add new trip</h2>
          <div className="flex flex-col items-center">
            <input
              placeholder="Enter trip Title"
              type="text"
              className="p-2 md:w-1/2  m-2 border-2 border-black rounded-lg"
            />
            <textarea
              type="text"
              placeholder="Add description"
              className="p-2 md:w-1/2 m-2 border-2 border-black rounded-lg"
            />
            <input
              type="text"
              placeholder="Departure"
              className="p-2 md:w-1/2  m-2 border-2 border-black rounded-lg"
            />
            <input
              type="number"
              placeholder="Enter Number of Days"
              className="p-2 md:w-1/2  m-2 border-2 border-black rounded-lg"
            />
            <input
              type="number"
              placeholder="Enter Number of Nights"
              className="p-2 md:w-1/2  m-2 border-2 border-black rounded-lg"
            />
            <input
              type="number"
              placeholder="Enter Amount"
              className="p-2 md:w-1/2  m-2 border-2 border-black rounded-lg"
            />
            <input
              type="text"
              placeholder="Enter Highlights of the trip"
              className="p-2 md:w-1/2  m-2 border-2 border-black rounded-lg"
            />
            <input
              type="text"
              placeholder="Enter Features of the trip"
              className="p-2 md:w-1/2  m-2 border-2 border-black rounded-lg"
            />
            <div className="p-2 md:w-1/2  m-2 border-2 border-black rounded-lg">
              <input type="file" multiple onChange={handleImageChange} />
              {images.map((image, i) => (
                <img key={i} src={image} alt="uploaded" />
              ))}
            </div>
            <label htmlFor="">Enter Featured Image</label>
            <input
              type="file"
              placeholder="Enter Features of the trip"
              className="p-2 md:w-1/2  m-2 border-2 border-black rounded-lg"
            />
          </div>
        </form>
      </div>
    </>
  );
}

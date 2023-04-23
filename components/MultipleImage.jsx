import React, { useState } from "react";

const ImageUploader = () => {
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

  return (
    <div>
      <input type="file" multiple onChange={handleImageChange} />
      {images.map((image, i) => (
        <img key={i} src={image} alt="uploaded" />
      ))}
    </div>
  );
};

export default ImageUploader;

import React, { useEffect, useRef } from "react";
import Image from "./Image";
const ImageBox = () => {
  const imageRef = useRef();
  useEffect(() => {
    console.log(imageRef);
  }, []);
  return (
    <div>
      <Image ref={imageRef} />
      <button
        onClick={() => {
          //   imageRef.current.style.width = `400px`;
          imageRef.current.zoomIn();
        }}
      >
        Zoom In{" "}
      </button>
      <button
        onClick={() => {
          //   imageRef.current.style.width = `100px`;
          imageRef.current.zoomOut();
        }}
      >
        Zoom Out
      </button>
    </div>
  );
};

export default ImageBox;

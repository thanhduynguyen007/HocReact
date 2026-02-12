import React from "react";

const Image = ({ src, width, height }) => {
  console.log("Ok");
  return (
    <div>
      <img src={src} width={width} height={height} />
    </div>
  );
};

export default Image;

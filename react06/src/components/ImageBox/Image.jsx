import React, { forwardRef, useImperativeHandle, useRef } from "react";

const Image = (props, ref) => {
  const imageRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      zoomIn: () => {
        console.log("Zoom In");
        imageRef.current.style.width = `400px`;
      },
      zoomOut: () => {
        console.log("Zoom Out");
        imageRef.current.style.width = `100px`;
      },
    };
  });
  return (
    <div>
      <img
        ref={imageRef}
        src="https://picsum.photos/seed/picsum/200/300"
        alt=""
      />
    </div>
  );
};

export default forwardRef(Image);

import React from "react";

import { useState, useEffect } from "react";
let isLoading = true;
let isMounted = false;
const Photo = () => {
  const [photos, setPhotos] = useState([]);
  const fetchPhotos = async () => {
    console.log(isMounted);

    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const result = await response.json();
    setPhotos(result.splice(0, 20));
    isLoading = false;
  };

  useEffect(() => {
    isMounted = true;
    fetchPhotos();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          photos.map(({ id, title }) => (
            <div key={id}>
              <img src={`https://picsum.photos/150?random=${id}`} alt="" />
              <p>{title}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Photo;

/* 
  Cleanup: 
  - Dọn dẹp các bộ nhớ tạm, event , timer
  - Xử lý setState khi call API (Chỉ set khi component chưa unmount)
*/

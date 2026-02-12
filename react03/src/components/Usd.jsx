import React, { useState } from "react";

const Usd = () => {
  const [usd, setUsd] = useState("");
  const [vnd, setVnd] = useState("");

  const handleUsdChange = (e) => {
    const value = e.target.value;
    setUsd(value);
    setVnd(value ? value * 25000 : "");
  };

  const handleVndChange = (e) => {
    const value = e.target.value;
    setVnd(value);
    setUsd(value ? value / 25000 : "");
  };

  return (
    <>
      USD: <input type="number" value={usd} onChange={handleUsdChange} />
      <br />
      VND: <input type="number" value={vnd} onChange={handleVndChange} />
    </>
  );
};

export default Usd;

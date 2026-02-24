import React, { useCallback, useMemo, useState } from "react";

const MoneyTransfer = () => {
  const [cost, setCost] = useState(0);
  const [histories, setHistory] = useState([]);
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setHistory([...histories, +cost]);
  //     setCost("");
  //   };
  //    const handleChange = (e) => {
  //     setCost(e.target.value);
  //   };
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setHistory((histories) => [...histories, +cost]);
      setCost("");
    },
    [cost],
  );
  const handleChange = useCallback((e) => {
    setCost(e.target.value);
  }, []);

  const total = useMemo(() => {
    return histories.reduce((arr, current) => {
      console.log("Total");

      return arr + current;
    }, 0);
  }, [histories]);
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Nhập số tiền..."
          onChange={handleChange}
          value={cost}
        />
        <button>Add</button>
      </form>
      <h2>Lịch sử chuyển tiền</h2>
      {histories.map((item, index) => (
        <h3 key={index}>{item.toLocaleString()}</h3>
      ))}
      <h2>Tổng tiền: {total.toLocaleString()} </h2>
    </div>
  );
};

export default MoneyTransfer;

/* 
    Hook useMemo --> Cache logic tính toán --> Trả về giá trị
    - Trả về 1 giá trị phụ thuộc vào giá trị trả về của callback
    - Callback trong useMemo phải có return 
const value = useMemo(callback, depedencies)
dùng để cache một giá trị logic thông qua tính toán
*/

import React, { useEffect, useState } from "react";
// import "./Visualizer.css";

const SortingVisulizer = () => {
  useEffect(() => {
    if (array.length === 0) {
      resetArray();
    }
  });

  const [array, setarray] = useState([]);

  const resetArray = () => {
    let arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push(randomInValues(0, 650));
    }
    setarray(arr);
    console.log(array);
  };

  const randomInValues = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className="array-container">
      {array.map((value, index) => (
        <div
          className="array-bar"
          key={index}
          style={{ height: `${value}px` }}
        ></div>
      ))}
      <button className="btn" onClick={resetArray}>
        Generate New Array
      </button>
    </div>
  );
};
// onClick={() => resetArray()}
export default SortingVisulizer;

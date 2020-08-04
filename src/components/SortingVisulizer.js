import React, { useEffect, useState } from "react";
// import "./Visualizer.css";
import { getMergeSortAnimations } from "../helper/sortingAlgorithms";

const SortingVisulizer = () => {
  useEffect(() => {
    if (array.length === 0) {
      resetArray();
    }
  });
  const ANIMATION_SPEED_MS = 1;

  // Change this value for the number of bars (value) in the array.
  const NUMBER_OF_ARRAY_BARS = 310;

  // This is the main color of the array bars.
  const PRIMARY_COLOR = "turquoise";

  // This is the color of array bars that are being compared throughout the animations.
  const SECONDARY_COLOR = "red";
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

  const mergeSort = () => {
    const animations = getMergeSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
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
      <div>
        <button className="btn" onClick={resetArray}>
          Generate New Array
        </button>
        <button className="btn" onClick={mergeSort}>
          Merge Sort
        </button>
      </div>
    </div>
  );
};
// onClick={() => resetArray()}
export default SortingVisulizer;

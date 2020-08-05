import React, { useEffect, useState } from "react";
// import "./Visualizer.css";
import {
  getMergeSortAnimations,
  insertionSortAnimation,
} from "../helper/sortingAlgorithms";

const SortingVisulizer = () => {
  useEffect(() => {
    if (array.length === 0) {
      createSmallerArray();
    }
  });
  const PRIMARY_COLOR = "turquoise";

  // This is the color of array bars that are being compared throughout the animations.
  const SECONDARY_COLOR = "red";

  const INSERTION_COLOR = "turquoise";
  const [array, setarray] = useState([]);
  const [animSpeed, setAnimSpeed] = useState(100);

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
    console.log(animations);
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
        }, i * animSpeed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * animSpeed);
      }
    }
  };
  /** */
  const createSmallerArray = () => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(randomInValues(0, 650));
    }
    console.log(arr);
    setarray(arr);
  };

  const insertionSort = () => {
    const anims = insertionSortAnimation(array);

    // const { animations, colorChange } = anims;
    // console.log(animations);
    // for (
    //   let i = 0, j = 0;
    //   i < colorChange.length, j < animations.length;
    //   i++, j++
    // ) {
    //   const arrayBars = document.getElementsByClassName("array-bar");
    //   // const isColorChange = i % 3 !== 2;
    //   // if (isColorChange) {
    //   const [barOneIdx, barTwoIdx] = colorChange[i];
    //   const barOneStyle = arrayBars[barOneIdx].style;
    //   const barTwoStyle = arrayBars[barTwoIdx].style;
    //   const color = i % 5 === 0 ? INSERTION_COLOR : PRIMARY_COLOR;
    //   setTimeout(() => {
    //     barOneStyle.backgroundColor = color;
    //     barTwoStyle.backgroundColor = color;
    //   }, i * animSpeed);

    //   setTimeout(() => {
    //     const [barOneIdx, newHeight] = animations[j];
    //     console.log(newHeight);
    //     const barOneStyle = arrayBars[barOneIdx].style;
    //     barOneStyle.height = `${newHeight}px`;
    //   }, i * animSpeed);
    //   // }
    // }
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < anims.length; i++) {
      // const isColorChange = i % 3 !== 2;
      // if (isColorChange) {
      const [barOneIdx, barTwoIdx] = anims[i];
      if (array.indexOf(barTwoIdx) === -1) {
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 5 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animSpeed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = anims[i];
          console.log(newHeight);
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * animSpeed);
      }

      // }
    }
    arrayBars.forEach((element) => {
      const barOneStyle = element.style;
      barOneStyle.backgroundColor = PRIMARY_COLOR;
    });
  };
  /** */
  return (
    <div className="array-container">
      {array.map((value, index) => (
        <div
          className="array-bar"
          key={index}
          style={{ height: `${value}px` }}
        ></div>
      ))}
      <div className="btn-cls">
        <button className="btn" onClick={resetArray}>
          Generate New Array
        </button>
        <button className="btn" onClick={createSmallerArray}>
          Generate Smaller Array
        </button>
        <button className="btn" onClick={mergeSort}>
          Merge Sort
        </button>
        <button className="btn" onClick={insertionSort}>
          Insertion Sort
        </button>
      </div>
    </div>
  );
};
// onClick={() => resetArray()}
export default SortingVisulizer;

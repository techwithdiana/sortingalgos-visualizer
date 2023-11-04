import '../styles/ArrayBar.css';
import React from "react";

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

export default function ArrayBar(props) {

    return (
      <div className="bar-container">
        {props.array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: '#8CD5FC',
              height: `${value}px`,
            }}></div>
        ))}
      </div>
    );
}
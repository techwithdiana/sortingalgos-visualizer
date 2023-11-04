import '../styles/ArrayBar.css';
import React from "react";

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
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
              WebkitTransition: `background-color 100ms linear`,
							msTransition: `background-color 100ms linear`,
							transition: `background-color 100ms linear`
            }}></div>
        ))}
      </div>
    );
}
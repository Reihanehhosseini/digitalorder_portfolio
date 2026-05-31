import React from "react";
import Rating from "react-rating";

export default function Stars({rate}) {
  return (
    <Rating
      initialRating={rate}
      emptySymbol={
        <svg
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.34146 1.09033L9.13921 4.50279L13.1594 5.05336L10.2504 7.7081L10.937 11.4585L7.34146 9.68689L3.74596 11.4585L4.43248 7.7081L1.5235 5.05336L5.54371 4.50279L7.34146 1.09033Z"
            stroke="#FB6D3A"
            strokeWidth="0.563795"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      }
      fullSymbol={
        <svg
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.41537 1.09033L9.21312 4.50279L13.2333 5.05336L10.3244 7.7081L11.0109 11.4585L7.41537 9.68689L3.81987 11.4585L4.50639 7.7081L1.59741 5.05336L5.61762 4.50279L7.41537 1.09033Z"
            fill="#FB6D3A"
          />
        </svg>
      }
    />
  );
}

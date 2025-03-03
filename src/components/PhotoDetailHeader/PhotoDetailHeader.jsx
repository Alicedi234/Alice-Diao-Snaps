import React from "react";
import { Link } from "react-router-dom";
import "./PhotoDetailHeader.scss";
export default function PhotoDetailHeader() {
  return (
    <header className="photoDetail__header">
      <Link to="/">
        <h1 className="photoDetail__header--title">Snaps</h1>
      </Link>
      <Link to="/">
        <svg
          width="30"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.292892 6.7929C-0.0976315 7.18342 -0.0976314 7.81658 0.292893 8.20711L6.65686 14.5711C7.04738 14.9616 7.68054 14.9616 8.07107 14.5711C8.46159 14.1805 8.46159 13.5474 8.07107 13.1569L2.41421 7.5L8.07107 1.84315C8.46159 1.45262 8.46159 0.819458 8.07107 0.428933C7.68054 0.038409 7.04738 0.038409 6.65685 0.428933L0.292892 6.7929ZM21 6.5L1 6.5L1 8.5L21 8.5L21 6.5Z"
            fill="#1E6655"
          />
        </svg>
        <span className="photoDetail__header--link"> Home</span>
      </Link>
    </header>
  );
}

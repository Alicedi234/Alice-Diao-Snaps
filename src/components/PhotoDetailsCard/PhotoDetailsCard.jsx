import React from "react";
import "./PhotoDetailsCard.scss";

export default function PhotoDetailsCard({
  photoDetails = [],
  photoComments = [],
}) {
  const url = import.meta.env.VITE_API_URL;

  return (
    <div className="photoDetail__image">
      <img
        src={`${photoDetails.photo.replace("/photos", `${url}/images`)}`}
        alt="photo"
        className="photoDetail__image--item"
      />
      <ul className="photoDetail__image-tags">
        {photoDetails.tags.map((tag, index) => (
          <li className="photoDetail__image-tags--item" key={index}>
            {tag}
          </li>
        ))}
      </ul>
      <div className="photoDetail__image--container">
        <span className="photoDetail__image--like">
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.875 0C9.57 0 8.3175 0.617984 7.5 1.59455C6.6825 0.617984 5.43 0 4.125 0C1.815 0 0 1.84632 0 4.19619C0 7.08011 2.55 9.42997 6.4125 13.0005L7.5 14L8.5875 12.9929C12.45 9.42997 15 7.08011 15 4.19619C15 1.84632 13.185 0 10.875 0ZM7.575 11.8638L7.5 11.9401L7.425 11.8638C3.855 8.57548 1.5 6.40109 1.5 4.19619C1.5 2.6703 2.625 1.52589 4.125 1.52589C5.28 1.52589 6.405 2.2812 6.8025 3.32643H8.205C8.595 2.2812 9.72 1.52589 10.875 1.52589C12.375 1.52589 13.5 2.6703 13.5 4.19619C13.5 6.40109 11.145 8.57548 7.575 11.8638Z"
              fill="#0C1E1A"
            />
          </svg>{" "}
          {photoDetails.likes} likes
        </span>
        <p className="photoDetail__image--time">
          {new Date(photoDetails.timestamp).toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </p>
      </div>
      <div className="photoDetail__image--photographer">
        <span className="photoDetail__image--photographertext">Photo by </span>
        {photoDetails.photographer}
      </div>
    </div>
  );
}

// `${photo.photo.replace("/photos",`${url}/images`)}`

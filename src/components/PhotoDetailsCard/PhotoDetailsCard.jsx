import { useState } from "react";
export default function PhotoDetailsCard({ photoDetails=[], photoComments=[] }) {
  return (
    <>
      <div className="photoDetail__image">
        <div className="photoDetail__image-container">
          <img
            src={photoDetails.photo}
            alt="photo"
            className="photoDetail__image--item"
          />
        </div>
        <ul className="photoDetail__image-tags">
          {photoDetails.tags.map((tag, index) => (
            <li className="photoDetail__image-tags--item" key={index}>
              {tag}
            </li>
          ))}
        </ul>
        <div className="photoDetail__image--like">
          <h2>{photoDetails.likes} likes</h2>
        </div>
        <div className="photoDetail__image-time">{photoDetails.timestamp}</div>
        <div className="photoDetail__image-photographer">
          {photoDetails.photographer}
        </div>
      </div>
      <div>
        {photoComments && photoComments.map((photoComment) => {
          return (
              <div className="photoDetail__comment" key={photoComment.id}>
                <div className="photoDetail__comment--name">
                  {photoComment.name}
                </div>
                <div className="photoDetail__comment--text">
                  {photoComment.comment}
                </div>
                <div className="photoDetail__comment--time">
                  {photoComments.timestamp}
                </div>
              </div>
          );
        })}
      </div>
    </>
  );
}

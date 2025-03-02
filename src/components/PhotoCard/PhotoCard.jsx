import "./PhotoCard.scss";
import {Link, useParams} from "react-router-dom";

export default function PhotoCard({filteredPhotos, isFilterVisible}) {
  const url = import.meta.env.VITE_API_URL;

  return (
    <>
      {filteredPhotos.map((photo) => {
        return (  
          <div
            key={photo.id}
            className={`gallery__image ${isFilterVisible ? "gallery__imagewithfilter" : ""}`}
          >
            {/* <div className="gallery__image-container"> */}
            <Link to = {`/photos/${photo.id}`}>
              <img
                src={`${photo.photo.replace("/photos",`${url}/images`)}`}
                alt="photo"
                className="gallery__image--item"
                />
            </Link>
            {/* </div> */}
            <div className="gallery__image-photographer">
              {photo.photographer}
            </div>
            <ul className="gallery__image-tags">
              {photo.tags.map((tag, index) => (
                <li className="gallery__image-tags--item" key={index}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
}

import photos from "../../data/photos.json";
import PhotoCard from "../PhotoCard/PhotoCard";
import "./DisplayPhotos.scss";

export default function DisplayPhotos({ selectedTag, isFilterVisible }) {
  const filteredPhotos = selectedTag
    ? photos.filter((photo) => photo.tags.includes(selectedTag))
    : photos;

  return (
      <div className="gallery">
        <div className="gallery__content">
          <h2 className="gallery__content--title">Our mission:</h2>
          <p className="gallery__content--text">
            Provide photographers a space to share photos of the neighborhoods
            they cherish,{" "}
            <span className="gallery__content--texthighlight">
              expressed in their unique style.
            </span>
          </p>
        </div>
        <div className="gallery__image-display">
          <PhotoCard
            filteredPhotos={filteredPhotos}
            isFilterVisible={isFilterVisible}
          />
        </div>
      </div>
  );
}

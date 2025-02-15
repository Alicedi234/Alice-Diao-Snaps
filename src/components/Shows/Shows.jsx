import photos from "../../data/photos.json";
import "./Shows.scss";

export default function Shows({ selectedTag }) {
  const filteredPhotos = selectedTag
    ? photos.filter((photo) => photo.tags.includes(selectedTag))
    : photos;

  return (
    <div>
      {filteredPhotos.map((photo) => {
        return (
          <div key = {photo.id}>
            <div className = "shows__image-container">
              <img src={photo.photo} alt="photo" className ="shows__image" />
            </div>
            <div className = "shows__tags">{photo.tags}</div>
          </div>
        );
      })}
    </div>
  );
}

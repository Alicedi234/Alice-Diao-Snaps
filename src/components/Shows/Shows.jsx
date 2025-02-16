import photos from "../../data/photos.json";
import "./Shows.scss";

export default function Shows({ selectedTag }) {
  const filteredPhotos = selectedTag
    ? photos.filter((photo) => photo.tags.includes(selectedTag))
    : photos;

  return (
    <>
      {filteredPhotos.map((photo) => {
        return (
          <div key = {photo.id} className="shows__image">
            <div className = "shows__image-container">
              <img src={photo.photo} alt="photo" className ="shows__image--item" />
            </div>
            <div className = "shows__image--tags">{photo.tags}</div>
          </div>
        );
      })}
    </>
  );
}

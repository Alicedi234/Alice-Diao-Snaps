import "./PhotoCard.scss";

export default function PhotoCard({filteredPhotos, isFilterVisible}) {
  
  return (
    <>
      {filteredPhotos.map((photo) => {
        return (  
          <div
            key={photo.id}
            className={`gallery__image ${isFilterVisible ? "gallery__imagewithfilter" : ""}`}
          >
            <div className="gallery__image-container">
              <img
                src={photo.photo} 
                alt="photo"
                className="gallery__image--item"
              />
            </div>
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

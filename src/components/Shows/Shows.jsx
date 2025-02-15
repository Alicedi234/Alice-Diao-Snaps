import photos from "../../data/photos.json";

export default function Shows({ selectedTag }) {
  const filteredPhotos = selectedTag
    ? photos.filter((photo) => photo.tags.includes(selectedTag))
    : photos;

  return (
    <div>
      {filteredPhotos.map((photo) => {
        return (
          <div key = {photo.id}>
            <div>
              <img src={photo.photo} alt="photo" />
            </div>
            <div>{photo.tags}</div>
          </div>
        );
      })}
    </div>
  );
}

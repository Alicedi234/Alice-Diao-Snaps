import { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "../PhotoCard/PhotoCard";
import "./DisplayPhotos.scss";

export default function DisplayPhotos({ selectedTag, isFilterVisible }) {

  const [photos, setPhotos] = useState([]);
  const url = "https://unit-3-project-c5faaab51857.herokuapp.com/photos?api_key=4cf989da-7d80-4ad0-8dd3-82429cbbb621"
  
  useEffect(() =>{
  const fethPhotos = async() => {
    const response = await axios.get(url);
    console.log(response.data);
    setPhotos(response.data);
  }
    fethPhotos();
  }, []);

// we've fetched the data = photos


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
          <PhotoCard filteredPhotos = {filteredPhotos} isFilterVisible ={isFilterVisible}/>
        </div>
      </div>
  );
}

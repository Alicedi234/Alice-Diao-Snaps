import { useState, useEffect } from "react";
import axios from "axios";
import "./Filter.scss";

export default function FilterButtons({ selectedTag, setSelectedTag }) {
  const [photos, setPhotos] = useState([]);
  const [uniqueTags, setUniqueTags] = useState(new Set());

  const url = "https://unit-3-project-c5faaab51857.herokuapp.com/photos?api_key=4cf989da-7d80-4ad0-8dd3-82429cbbb621";

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await axios.get(url);
      setPhotos(response.data);

      const tags = new Set();
      response.data.forEach(photo => {
        photo.tags.forEach(tag => {
          tags.add(tag);
        });
      });
      setUniqueTags(tags);
    };
    fetchPhotos();
  }, []);

  const ClickHandler = (tag) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
    }
  };

  return (
    <>
      {Array.from(uniqueTags).map((tag, index) => (
        <button
          className={`filter__button ${
            selectedTag === tag ? "filter__button--active" : ""
          }`}
          key={index}
          onClick={() => ClickHandler(tag)}
        >
          {tag}
        </button>
      ))}
    </>
  );
}
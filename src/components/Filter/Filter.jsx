import { useState, useEffect } from "react";
import axios from "axios";
import "./Filter.scss";

export default function FilterButtons({ selectedTag, setSelectedTag }) {
  const [tags, setTags] = useState([]);
  const [uniqueTags, setUniqueTags] = useState(new Set());

  const url  = import.meta.env.VITE_API_URL;


  useEffect(() => {
    const fetchTags = async () => {
      const response = await axios.get(`${url}/tags`);
      setTags(response.data);
    }
    fetchTags();
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
      {tags.map((tag, index) => (
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
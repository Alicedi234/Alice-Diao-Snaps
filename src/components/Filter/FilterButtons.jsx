import tags from "../../data/tags.json";
import "./FilterButtons.scss";
export default function FilterButtons({ selectedTag, setSelectedTag }) {
  const ClickHandler = (tag) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
    }
  };
  return (
    <>
      {tags.map((tag, index) => {
        return (
          <button
            className={`filter__button ${
              selectedTag === tag ? "fitler__button--active" : ""
            } `}
            key={index}
            onClick={() => ClickHandler(tag)}
          >
            {tag}
          </button>
        );
      })}
    </>
  );
}


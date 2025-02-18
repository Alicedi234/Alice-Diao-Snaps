import { useState } from "react";
import FilterButtons from "./components/Filter/FilterButtons";
import Shows from "./components/Shows/Shows";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const [selectedTag, setSelectedTag] = useState(null);

  return (
    <>
      <Header
        isFilterVisible={isFilterVisible}
        setIsFilterVisible={setIsFilterVisible}
      />
      <div className="main-container">
          {isFilterVisible && (
        <div className="filter">
              <div className="filter__container">
                <h2 className="filter__title">Filters</h2>
                <div className="filter__button-container">
                  <FilterButtons
                    selectedTag={selectedTag}
                    setSelectedTag={setSelectedTag}
                  />
                </div>
              </div>
        </div>
          )}
        <div className="shows">
          <div className="shows__content">
            <h2 className="shows__content--title">Our mission:</h2>
            <p className="shows__content--text">
              Provide photographers a space to share photos of the neighborhoods
              they cherish,{" "}
              <span className="shows__content--texthighlight">
                expressed in their unique style.
              </span>
            </p>
          </div>
          <div className="shows__image-gallary">
            <Shows selectedTag={selectedTag} />
          </div>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;

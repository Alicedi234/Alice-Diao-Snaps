import { useState } from "react";
import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";
import DisplayPhotos from "./components/DisplayPhotos/DisplayPhotos";
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
                <Filter
                  selectedTag={selectedTag}
                  setSelectedTag={setSelectedTag}
                />
              </div>
            </div>
          </div>
        )}
        <DisplayPhotos isFilterVisible ={isFilterVisible} selectedTag={selectedTag} />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;

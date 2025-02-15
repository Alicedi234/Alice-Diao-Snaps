import { useState } from "react"
import FilterButtons from "./components/Filter/FilterButtons";
import Shows from "./components/Shows/Shows";
import Header from "./components/Header/Header";
import "./App.scss";

function App() {
  const [isFilterVisible, setIsFilterVisible] = useState (false);

  const [selectedTag, setSelectedTag] = useState(null);

  return (
    <>
    <Header isFilterVisible = {isFilterVisible} setIsFilterVisible = {setIsFilterVisible} />
    {isFilterVisible && <FilterButtons
    selectedTag = {selectedTag} setSelectedTag = {setSelectedTag} />}
    <Shows selectedTag = {selectedTag} />
    </>
  )
}

export default App

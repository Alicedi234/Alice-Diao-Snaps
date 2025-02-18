import FilterIcon from "../../assets/Icons/Filter.svg";
export default function FilterControl({ isFilterVisible, setIsFilterVisible }) {
  const ClickHandler = () => {
    setIsFilterVisible(!isFilterVisible);
  };
  return (
    <button onClick={ClickHandler} className="header__button">
      <span className="header__button--text">Filters</span>
      <img src={FilterIcon} alt="filter" className="header__button--icon" />
    </button>
  );
}

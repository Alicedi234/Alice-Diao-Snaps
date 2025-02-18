import FilterControl from "../FilterControl/FilterControl";
import "./Header.scss";

// pass props from app to header
export default function Header({ isFilterVisible, setIsFilterVisible }) {
  return (
    <header className="header">
      <h1 className="header__title">Snaps</h1>
      <FilterControl
        isFilterVisible={isFilterVisible}
        setIsFilterVisible={setIsFilterVisible}
      />
    </header>
  );
}

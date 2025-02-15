import FilterControl from "./FilterControl";
import "./Header.scss";

// pass props from app to header
export default function Header({ isFilterVisible, setIsFilterVisible }) {
  return (
    <header className="header">
      <h1>Snaps</h1>
      <div>
        <FilterControl
          isFilterVisible={isFilterVisible}
          setIsFilterVisible={setIsFilterVisible}
        />
      </div>
    </header>
  );
}

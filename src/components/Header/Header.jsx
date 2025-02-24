import FilterControl from "../FilterControl/FilterControl";
import "./Header.scss";
import { Link } from "react-router-dom";

// pass props from app to header
export default function Header({ isFilterVisible, setIsFilterVisible }) {
  return (
    <header className="header">
      <Link to = "/">
      <h1 className="header__title">Snaps</h1>
      </Link>
      <FilterControl
        isFilterVisible={isFilterVisible}
        setIsFilterVisible={setIsFilterVisible}
      />
    </header>
  );
}

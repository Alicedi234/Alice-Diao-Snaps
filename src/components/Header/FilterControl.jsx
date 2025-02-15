import FilterIcon from "../../assets/Icons/Filter.svg";

export default function FilterControl({isFilterVisible, setIsFilterVisible}){
  // pass props from header to filtercontrol 
  const ClickHandler = () =>{
     setIsFilterVisible(!isFilterVisible)
    }
   return(
     <button onClick = {ClickHandler} className= "header__button">
       <span className = "header__button--text">Filters</span>
       <img src={FilterIcon} alt="filter" className = "header__button--icon"/>
       </button>
   )
 }
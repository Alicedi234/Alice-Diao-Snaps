export default function FilterControl({isFilterVisible, setIsFilterVisible}){
  // pass props from header to filtercontrol
    
  const ClickHandler = () =>{
     setIsFilterVisible(!isFilterVisible)
    }
 
   return(
     <button onClick = {ClickHandler} className= "header__button">
       <span>Filters</span>
       <img src="../../../assets/Icons/Filter.svg" alt="filter" />
       </button>
   )
 }
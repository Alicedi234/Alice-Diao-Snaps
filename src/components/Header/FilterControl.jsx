export default function FilterControl({isFilterVisible, setIsFilterVisible}){
  // pass props from header to filtercontrol
    
  const ClickHandler = () =>{
     setIsFilterVisible(!isFilterVisible)
    }
 
   return(
     <button onClick = {ClickHandler}>
       Filters</button>
   )
 }
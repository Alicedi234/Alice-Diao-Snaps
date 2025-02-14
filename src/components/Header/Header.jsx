import FilterControl from "./FilterControl"


// pass props from app to header
export default function Header({isFilterVisible, setIsFilterVisible}){

  
  return(
    <>
    <h1>Snapsss</h1>
    <div>
    <FilterControl isFilterVisible = {isFilterVisible} setIsFilterVisible = {setIsFilterVisible} /> 
    </div>
    </>
  )
}
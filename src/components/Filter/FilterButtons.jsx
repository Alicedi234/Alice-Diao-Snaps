import tags from "../../data/tags.json";

export default function FilterButtons({selectedTag, setSelectedTag}){

  const ClickHandler = (tag) =>{
    if(selectedTag === tag){
      setSelectedTag(null);
    }else{
      setSelectedTag(tag);
      }
    };
  return(
    <>
    {tags.map((tag, index) => {
      return(
        <button key={index} onClick = {()=>ClickHandler(tag)}>{tag}</button>
      )
    })
    }
    </>
  )
}
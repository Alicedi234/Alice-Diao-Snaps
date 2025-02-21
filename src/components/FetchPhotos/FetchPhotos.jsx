import axios from "axios";
import { useEffect, useState} from "react";
import PhotoCard from "../PhotoCard/PhotoCard";

export default function FetchPhotos({isFilterVisible}) {
  const [photos, setPhotos] = useState([]);

  const url = "https://unit-3-project-c5faaab51857.herokuapp.com/photos?api_key=4cf989da-7d80-4ad0-8dd3-82429cbbb621"
  
  useEffect(() =>{
    const fethPhotos = async() => {
      const response = await axios.get(url);
      console.log(response.data);

      setPhotos(response.data)
    }
    fethPhotos();
  }, []);

  return (
    <PhotoCard photos ={photos} isFilterVisible={isFilterVisible}/>
  )
}

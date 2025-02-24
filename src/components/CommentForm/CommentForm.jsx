import { useState } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

export default function CommentForm({onSubmit}){
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const {id} = useParams();

  const submitHandler = async(event) =>{
    event.preventDefault();
    
    const url = `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=4cf989da-7d80-4ad0-8dd3-82429cbbb621`;
    const response = await axios.post(url, {
      name: name,
      comment:comment,
    }
    )
    console.log("comment submitted", response.data);
    setName("")
    setComment("")
    
    if (onSubmit) {
      onSubmit();
    }

  }


  return(
    <form onSubmit = {submitHandler}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" value ={name} onChange={(event)=>setName(event.target.value)} required/>
      <label htmlFor="comment"></label>
      <textarea name="comment" value ={comment} onChange={(event)=>setComment(event.target.value)} required></textarea>
      <button type = "submit">submit</button>
    </form>
    
  )
}
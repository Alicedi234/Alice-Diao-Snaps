import { useState } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import "./CommentForm.scss";

export default function CommentForm({onSubmit}){
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isCommentValid, setIsCommentValid] = useState(true);

  const {id} = useParams();

  const submitHandler = async(event) =>{
    event.preventDefault();
    
    const isNameEmpty = name.trim() === "";
    const isCommentEmpty = comment.trim() === "";

    setIsNameValid(!isNameEmpty);
    setIsCommentValid(!isCommentEmpty);

    if (isNameEmpty || isCommentEmpty) {
      alert("The field can not be empty");
      return;
    }

    
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
    <form onSubmit = {submitHandler} className ="comment">
      <label htmlFor="name" className="comment__label">Name</label>
      <input  className ={`comment__input--name ${!isNameValid ? "invalid" : ""}`}
       type="text" id="name" value ={name} onChange ={(event) => setName(event.target.value)} />
      <label htmlFor="comment" className="comment__label">Comment</label>
      <textarea className ={`comment__input--comment ${!isCommentValid ? "invalid" : ""}`} name="comment" value ={comment} onChange={(event)=>setComment(event.target.value)} ></textarea>
      <button className ="comment__button" type = "submit">Submit</button>
    </form>
    
  )
}

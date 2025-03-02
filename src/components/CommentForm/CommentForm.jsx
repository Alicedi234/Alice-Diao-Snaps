import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CommentForm.scss";
import { v4 as uuidv4 } from "uuid";

export default function CommentForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isCommentValid, setIsCommentValid] = useState(true);

  const { id } = useParams();

  const submitHandler = async (event) => {
    event.preventDefault();

    const isNameEmpty = name.trim() === "";
    const isCommentEmpty = comment.trim() === "";

    setIsNameValid(!isNameEmpty);
    setIsCommentValid(!isCommentEmpty);

    if (isNameEmpty || isCommentEmpty) {
      alert("The field can not be empty");
      return;
    }

    const baseurl = import.meta.env.VITE_API_URL;
    const url = `${baseurl}/photos/${id}/comments`;

    const requestbody = {
      name: name,
      comment: comment,
      id: uuidv4(),
    };

    const response = await axios.post(url, requestbody, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("comment submitted", response.data);
    setName("");
    setComment("");

    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <form onSubmit={submitHandler} className="comment">
      <label htmlFor="name" className="comment__label">
        Name
      </label>
      <input
        className={`comment__input--name ${!isNameValid ? "invalid" : ""}`}
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label htmlFor="comment" className="comment__label">
        Comment
      </label>
      <textarea
        className={`comment__input--comment ${
          !isCommentValid ? "invalid" : ""
        }`}
        name="comment"
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      ></textarea>
      <button className="comment__button" type="submit">
        Submit
      </button>
    </form>
  );
}

import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import PhotoDetailsCard from "../../components/PhotoDetailsCard/PhotoDetailsCard";
import CommentForm from "../../components/CommentForm/CommentForm";

export default function PhotoPage() {
  const [photoDetails, setPhotoDetails] = useState(null);
  const [photoComments, setPhotoComments] = useState(null);

  const { id } = useParams();

  const fetchPhotoDetails = async () => {
    const url = `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}?api_key=4cf989da-7d80-4ad0-8dd3-82429cbbb621`;
    const response = await axios.get(url);
    console.log(response);

    setPhotoDetails(response.data);
  };

  useEffect(() => {
    fetchPhotoDetails();
  }, [id]);

  const fetchComments = async () => {
    const url = `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=4cf989da-7d80-4ad0-8dd3-82429cbbb621`;
    const response = await axios.get(url);
    console.log(response);

    setPhotoComments(response.data);
  };
  useEffect(() => {
    fetchComments();
  }, [id]);

  if (!photoDetails) {
    return <div>loading...</div>;
  }

  if (!photoComments) {
    return <div>loading</div>;
  }
  return (
    <>
    <PhotoDetailsCard
      photoDetails={photoDetails}
      photoComments={photoComments}
      />
    <CommentForm onSubmit={fetchComments}/>
    <div>the end</div>
    </>
  );
}

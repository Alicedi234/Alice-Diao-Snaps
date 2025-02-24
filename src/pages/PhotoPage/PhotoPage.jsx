import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import PhotoDetailHeader from "../../components/PhotoDetailHeader/PhotoDetailHeader";
import PhotoDetailsCard from "../../components/PhotoDetailsCard/PhotoDetailsCard";
import CommentForm from "../../components/CommentForm/CommentForm";
import PhotoCommentsCard from "../../components/PhotoCommentsCard/PhotoCommentsCard";
import Footer from "../../components/Footer/Footer";
import "./PhotoPage.scss";


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
    <PhotoDetailHeader/>
    <main className = "photoPage__main">
    <PhotoDetailsCard photoDetails={photoDetails}/>
    <CommentForm onSubmit={fetchComments}/>
    <PhotoCommentsCard photoComments = {photoComments} />
    </main>
    <Footer/>
    </>
  );
}


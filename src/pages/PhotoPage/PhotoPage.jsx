import React from "react";
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
  const baseurl = import.meta.env.VITE_API_URL;

  const fetchPhotoDetails = async () => {
    try {
      const url = `${baseurl}/photos/${id}`;
      const response = await axios.get(url);
      console.log(response);
      setPhotoDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPhotoDetails();
  }, [id]);

  const fetchComments = async () => {
    try {
      const url = `${baseurl}/photos/${id}/comments`;
      const response = await axios.get(url);
      console.log(response);
      setPhotoComments(response.data);
    } catch (error) {
      console.log(error);
    }
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
      <PhotoDetailHeader />
      <main className="photoPage__main">
        <PhotoDetailsCard photoDetails={photoDetails} />
        <CommentForm onSubmit={fetchComments} />
        <PhotoCommentsCard photoComments={photoComments} />
      </main>
      <Footer />
    </>
  );
}

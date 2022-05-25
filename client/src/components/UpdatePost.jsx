import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Client from "../services/api";

const UpdatePost = (props) => {
  //set all the states
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [address, setAddress] = useState("");
  const [distance, setDistance] = useState("");
  const [elevation, setElevation] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState("");
  const [park, setPark] = useState("");
  const [mapUrl, setMapUrl] = useState("");

  let navigate = useNavigate();

  //select a post by id to update
  const getPostToUpdate = async () => {
    await Client.put(`/posts/${props.postId}`, {
      title: title,
      address: address,
      distance: distance,
      elevation: elevation,
      imgUrl: imgUrl,
      content: content,
      rating: rating,
      park: park,
      mapUrl: mapUrl,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPostToUpdate();
    navigate("/posts");
    window.location.reload(false);
  };

  return (
    <div className="centered">
      <h2 className="post-title">Update Your Post</h2>
      <form className="submit-form centered" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          title="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Title"
        />
        <input
          className="input"
          type="text"
          distance="distance"
          onChange={(e) => {
            setDistance(e.target.value);
          }}
          placeholder="Length"
        />
        <input
          className="input"
          type="text"
          elevation="elevation"
          onChange={(e) => {
            setElevation(e.target.value);
          }}
          placeholder="Elevation"
        />
        <input
          className="input"
          type="text"
          park="park"
          onChange={(e) => {
            setPark(e.target.value);
          }}
          placeholder="Park"
        />
        <input
          className="input"
          type="text"
          address="address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          placeholder="Address"
        />
        <input
          className="input"
          type="text"
          content="content"
          onChange={(e) => {
            setContent(e.target.value);
          }}
          placeholder="Content"
        />
        <input
          className="input"
          type="text"
          imgUrl="imgUrl"
          onChange={(e) => {
            setImgUrl(e.target.value);
          }}
          placeholder="imgUrl"
        />
        <input
          className="input"
          type="text"
          rating="rating"
          onChange={(e) => {
            setRating(e.target.value);
          }}
          placeholder="Difficulty Rating"
        />
        <input
          className="input"
          type="text"
          mapUrl="mapUrl"
          onChange={(e) => {
            setMapUrl(e.target.value);
          }}
          placeholder="Map Image Url"
        />
        <button className="sub-btn">Submit</button>
      </form>
    </div>
  );
};

export default UpdatePost;

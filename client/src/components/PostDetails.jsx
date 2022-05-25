import React from "react";
import CommentsItem from "./CommentsItem";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Client from "../services/api";
import Slide from "react-reveal/Slide";

const PostDetails = (props) => {
  const [selectedPost, setSelectedPost] = useState("");
  const [comments, setComment] = useState("");

  let { id } = useParams();

  //get posts by id
  const getPost = async () => {
    const result = await Client.get(
      `/posts/postdetail/${id}`
    );
    console.log(result.data);
    console.log(result.data.onePost);
    setSelectedPost(result.data.onePost);
    setComment(result.data.getComments);
  };

  useEffect(() => {
    getPost();
  }, []);

  return selectedPost && comments ? (
    <div className="centered bkground2">
      <p className="post-title"> {selectedPost.title}</p>
      <Slide left>
        <img className="land" src={selectedPost.imgUrl} />
      </Slide>
      <br></br>
      <div className="centered">
        <Slide right>
          <p className="post-content"> {selectedPost.content}</p>
        </Slide>
        <div>
          <p className="rating">Park: {selectedPost.park}</p>
          <p className="rating">Address: {selectedPost.address}</p>
          <p className="rating">Length: {selectedPost.distance}</p>
          <p className="rating">Elevation: {selectedPost.elevation}</p>
          <p className="rating">
            Difficulty Rating (1-easy, 5-hard): {selectedPost.rating}
          </p>
        </div>
        <img className="img-map" src={selectedPost.mapUrl} />
        <br></br>
        <div className="centered">
          <h3 className="rating">Comments</h3>
          {comments.map((comment) => (
            <div className="comments" key={comment.id}>
              <CommentsItem name={comment.username} content={comment.comment} />
            </div>
          ))}
        </div>
        <Link
          className="add-comment"
          to={`/posts/postdetail/${selectedPost.id}/createcomment`}
        >
          Add your comment here
        </Link>
      </div>
    </div>
  ) : null;
};

export default PostDetails;

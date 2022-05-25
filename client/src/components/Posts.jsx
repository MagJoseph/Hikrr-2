import React from "react";
import PostItem from "./PostItem";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Client from "../services/api";
import Slide from "react-reveal/Slide";

const Posts = () => {
  //set posts state
  const [posts, setPosts] = useState([]);

  let navigate = useNavigate();

  //after clicking on post it will go to PostDetails
  const showPost = (posts) => {
    navigate(`/posts/postdetail/${posts.id}`);
  };

  const getPosts = async () => {
    const list = await Client.get(`/posts`);
    console.log(list.data);
    setPosts(list.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="post-container">
      <Slide left>
        <h1>Hikrr</h1>
      </Slide>
      <div>
        <div className="post-square">
          {posts.map((post) => (
            <div
              className="square"
              onClick={() => showPost(post)}
              key={post.id}
            >
              <PostItem
                title={post.title}
                      className="img"
                      park={post.park}
                      address={post.address}
                      distance={post.distance}
                      elevation={post.elevation}
                image={post.imgUrl}
                content={post.content}
                rating={post.rating}
                mapUrl={post.mapUrl}
                userId={post.user_id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;

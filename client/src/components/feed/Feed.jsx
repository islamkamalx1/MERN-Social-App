/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = username
          ? await axios.get(
              `http://localhost:8800/api/posts/profile/${username}`
            )
          : await axios.get(
              "http://localhost:8800/api/posts/timeline/64c30635a336448c7096a73e"
            );
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, [username]);

  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share />
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;

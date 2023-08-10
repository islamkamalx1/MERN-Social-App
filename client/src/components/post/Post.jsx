/* eslint-disable react/prop-types */
import { MoreVert } from "@mui/icons-material";
import "./post.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/users?userId=${post.userId}`
        );
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, [post.userId]);

  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-topLeft">
            <Link to={`profile/${user.username}`}>
              <img
                className="port-profilePic"
                src={
                  user.profilePicture ||
                  "../../../public/assets/person/noAvatar.png"
                }
                alt=""
              />
            </Link>
            <span className="post-username">{user.username}</span>
            <span className="post-date">{format(post.createdAt)}</span>
          </div>

          <div className="post-topRight">
            <MoreVert style={{ cursor: "pointer" }} />
          </div>
        </div>

        <div className="post-center">
          <span className="post-text">{post?.desc}</span>
          <img className="post-img" src={post.img} alt="" />
        </div>

        <div className="post-bottom">
          <div className="post-bottomLeft">
            <img
              src="/public/assets/like.png"
              alt=""
              className="like-icon"
              onClick={likeHandler}
            />
            <img
              src="/public/assets/heart.png"
              alt=""
              className="like-icon"
              onClick={likeHandler}
            />
            <span className="post-like-counter">{like} people like it</span>
          </div>

          <div className="post-bottomRight">
            <span className="post-comment-text">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

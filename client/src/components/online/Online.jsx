/* eslint-disable react/prop-types */
import "./online.css";

const Online = ({ user }) => {
  return (
    <li className="rightbar-friend">
      <div className="rightbar-profileImg-container">
        <img
          className="rightbar-profile-img"
          src={user.profilePicture}
          alt=""
        />
        <span className="rightbar-online"></span>
      </div>
      <span className="rightbar-username">{user.username}</span>
    </li>
  );
};

export default Online;

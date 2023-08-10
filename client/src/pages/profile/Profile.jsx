import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";
import RightBar from "../../components/rightbar/RightBar";
import Feed from "../../components/feed/Feed";
import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/users?username=karim`
        );
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="profile-cover">
              <img
                src={
                  user.coverPicture ||
                  "../../../public/assets/person/noCover.png"
                }
                alt=""
                className="profile-cover-img"
              />
              <img
                src={
                  user.profilePicture ||
                  "../../../public/assets/person/noAvatar.png"
                }
                alt=""
                className="profile-user-img"
              />
            </div>

            <div className="profile-info">
              <h4 className="profile-info-name">{user.username}</h4>
              <span className="profile-info-desc">{user.desc}</span>
            </div>
          </div>

          <div className="profile-right-bottom">
            <Feed username="karim" />
            <RightBar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

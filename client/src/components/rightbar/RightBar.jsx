/* eslint-disable react/prop-types */
import "./rightBar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

const RightBar = ({ user }) => {
  const HomeRightBar = () => (
    <div className="rightbar-wrapper">
      <div className="birthday-container">
        <img className="birthday-img" src="/public/assets/gift.png" alt="" />
        <span className="birthday-text">
          <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
        </span>
      </div>

      <img className="rightbar-Ad" src="/public/assets/ad.png" alt="" />

      <h4 className="rightbar-title">Online Friends</h4>
      <ul className="rightbar-friend-list">
        {Users.map((user) => (
          <Online key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbar-title">User information</h4>
        <div className="rightbar-info">
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">City:</span>
            <span className="rightbar-info-value">{user.city}</span>
          </div>

          <div className="rightbar-info-item">
            <span className="rightbar-info-key">From:</span>
            <span className="rightbar-info-value">{user.from}</span>
          </div>

          <div className="rightbar-info-item">
            <span className="rightbar-info-key">Relationship:</span>
            <span className="rightbar-info-value">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : ""}
            </span>
          </div>

          <h4 className="rightbar-title">User friends</h4>
          <div className="rightbar-followings">
            <div className="rightbar-following">
              <img
                src="/public/assets/person/1.jpeg"
                alt=""
                className="rightbar-following-img"
              />
              <span className="rightbar-following-name">John Carter</span>
            </div>

            <div className="rightbar-following">
              <img
                src="/public/assets/person/2.jpeg"
                alt=""
                className="rightbar-following-img"
              />
              <span className="rightbar-following-name">John Carter</span>
            </div>

            <div className="rightbar-following">
              <img
                src="/public/assets/person/3.jpeg"
                alt=""
                className="rightbar-following-img"
              />
              <span className="rightbar-following-name">John Carter</span>
            </div>

            <div className="rightbar-following">
              <img
                src="/public/assets/person/4.jpeg"
                alt=""
                className="rightbar-following-img"
              />
              <span className="rightbar-following-name">John Carter</span>
            </div>

            <div className="rightbar-following">
              <img
                src="/public/assets/person/5.jpeg"
                alt=""
                className="rightbar-following-img"
              />
              <span className="rightbar-following-name">John Carter</span>
            </div>

            <div className="rightbar-following">
              <img
                src="/public/assets/person/6.jpeg"
                alt=""
                className="rightbar-following-img"
              />
              <span className="rightbar-following-name">John Carter</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      {user ? <ProfileRightBar /> : <HomeRightBar />}
    </div>
  );
};

export default RightBar;

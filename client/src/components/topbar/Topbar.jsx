import "./topbar.css";
import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbar__container">
      <div className="topbar__container-left">
        <Link to={"/"}>
          <span className="logo">Social App</span>
        </Link>
      </div>

      <div className="topbar__container-center">
        <div className="search-bar">
          <Search fontSize="small" className="search-icon" />
          <input
            type="search"
            placeholder="Search for friend, post, or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbar__container-right">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>

        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>

          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>

        <img
          src="../../../public/assets/person/1.jpeg"
          alt=""
          className="topbarImg"
        />
      </div>
    </div>
  );
};

export default Topbar;

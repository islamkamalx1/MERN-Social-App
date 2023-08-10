import {
  Bookmarks,
  Chat,
  EventSharp,
  Groups,
  QuestionMarkSharp,
  RssFeed,
  School,
  Videocam,
  Work,
} from "@mui/icons-material";
import "./sidebar.css";
import CloseFriend from "../closeFriend/CloseFriend";
import { Users } from "../../dummyData";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <RssFeed className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebar-list-item">
            <Chat className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebar-list-item">
            <Videocam className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebar-list-item">
            <Groups className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebar-list-item">
            <Bookmarks className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebar-list-item">
            <QuestionMarkSharp className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebar-list-item">
            <Work className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebar-list-item">
            <EventSharp className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebar-list-item">
            <School className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>

        <button className="sidebar-btn">Show more</button>
        <hr className="sidebar-hr" />
        <ul className="sidebar-friend-list">
          {Users.map((user) => (
            <CloseFriend key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

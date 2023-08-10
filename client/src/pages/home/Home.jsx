import "./home.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar"

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="home-container">
        <Sidebar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
};

export default Home;

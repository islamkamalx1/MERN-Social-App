import { EmojiEmotions, Label, PhotoSharp, Room } from "@mui/icons-material";
import "./share.css";

const Share = () => {
  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-top">
          <img
            src="/public/assets/person/1.jpeg"
            alt=""
            className="share-profile-img"
          />
          <input
            type="text"
            placeholder="What's in your mind Safak?"
            className="share-input"
          />
        </div>
        <hr className="share-hr"></hr>
        <div className="share-bottom">
          <div className="share-options">
            <div className="share-option">
              <PhotoSharp htmlColor="tomato" className="share-icon" />
              <span className="share-option-text">Photo or Video</span>
            </div>
            <div className="share-option">
              <Label htmlColor="blue" className="share-icon" />
              <span className="share-option-text">Tag</span>
            </div>
            <div className="share-option">
              <Room htmlColor="green" className="share-icon" />
              <span className="share-option-text">Location</span>
            </div>
            <div className="share-option">
              <EmojiEmotions htmlColor="goldenrod" className="share-icon" />
              <span className="share-option-text">Feelings</span>
            </div>
          </div>

          <button className="share-btn">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;

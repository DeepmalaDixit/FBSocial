import "./share.css"
import { MdPermMedia } from "react-icons/md";
import { AiFillTag } from "react-icons/ai";
import { IoLocation } from "react-icons/io5";
import { ImHappy } from "react-icons/im";

export default function Share() {
  return (
      <div className="share">
      <div className="shareWrapper">
      <div className="shareTop">
        <img className="shareProfileImg"src="/assets/person/1.jpeg" alt="" />
        <input placeholder="What's in your mind Deep?" className="shareInput" />
      </div>
      <hr className="shareHr" />
      <div className="shareButtom">
        <div className="shareOptions">
            <div className="shareOption">
                <MdPermMedia className="shareIcon"/>
                <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
                <AiFillTag className="shareIcon"/>
                <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
                <IoLocation className="shareIcon"/>
                <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
                <ImHappy className="shareIcon"/>
                <span className="shareOptionText">Feelings</span>
            </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
      </div>
    </div>
  );
}

import "./topbar.css"
import { BiSearch } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillChatTextFill } from "react-icons/bs";
import { MdCircleNotifications } from "react-icons/md";
export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="TopbarLeft">
            <span className="logo">Malasocial</span>
        </div>
        <div className="TopbarCenter">
            <div className="searchbar">
             <BiSearch className="searchIcon"/>
             <input 
             placeholder="Search for friend, post or video" className="searchInput"/>
            </div>
        </div>
        <div className="TopbarRight">
        <div className="topbarLinks">
            <span className="topbstLink">Homepage</span>
            <span className="topbstLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <BsFillPersonFill/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <BsFillChatTextFill/>
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconItem">
                    <MdCircleNotifications/>
                    <span className="topbarIconBadge">4</span>
                </div>
            </div>
            <img src="./assets/person/1.jpeg" alt="" className="topbarImg"/>
        </div>
    </div>
  );
}

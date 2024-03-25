import "./Profile.css";
import Topbar from "../../Components/Topbar/Topbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";
import Rightbar from "../../Components/Rightbar/Rightbar";
import Aliko from "../Profile/aliko.jpg";
import Otedola from  "../Profile/nature4.jpg";


export default function Profile () {
  return (
    <>
      
    <Topbar />
    <div className="Profile">
        <Sidebar />
          <div className="ProfileRight">
                <div className="ProfileRightTop">  
                    <div className="profileCover">
                        <img className="profileCoverImg" src={Otedola}  alt="Aliko" /> 
                        <img className="profileUserImg" src={Aliko}  alt="Aliko" /> 
                    </div>
                </div>
                <div className="profileInfo">
                      <h4 className="profileInfoName"> Kayode Odunuga Valentine  </h4>
                      <span className="profileInfoDesc"> I am an Medicoenterpreneur  </span>
                </div>
                <div className="ProfileRightBottom"> 
                    <Feed />
                    <Rightbar profile/>
                </div> 
          </div>
    </div>

    
  </>
  )
}
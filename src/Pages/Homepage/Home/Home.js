import React from "react";
import Topbar from "../../../Components/Topbar/Topbar";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import Feed from "../../../Components/Feed/Feed";
import Rightbar from "../../../Components/Rightbar/Rightbar";
import "../Home/Home.css";


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





export default function Home () {
  return (
    <div>
      
      <Topbar />
      <div className="homeContainer">
          <Sidebar />
          <Feed />
          <Rightbar />
      </div>

      
    </div>
  )
}
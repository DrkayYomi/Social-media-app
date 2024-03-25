import "./Topbar.css";

import Man from '../Topbar/man1.jpg';





export default function Topbar () {
  return (
    <div className="topbarContainer">
          <div className="TopbarLeft "> 
              <span className="logo"> Lamasocial </span>
          </div>
          <div className="TopbarCentre "> 
              <div className="searchbar">
                        <svg className="Topbarsearchbar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                        <input placeholder="Search for friend, post or video" className="Searchinput"/>


              </div>
          </div>
          <div className="TopbarRight "> 
              <div className="TopbarLinks">
                  <span className="TopbarLink"> Homepage</span>
                  <span className="TopbarLink"> Timeline</span>
              </div>
              <div className="TopbarIcons">
                  <div className="TopbarIconsItem">
                      <svg height={"20px"} className="TopBarIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                      <div className="TopbarIconBadge"> 1 </div>
                  </div>
                  <div className="TopbarIconsItem">
                      <svg height={"20px"} className="TopBarIcon"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/></svg>
                      <div className="TopbarIconBadge"> 2 </div>
                  </div>
                  <div className="TopbarIconsItem">
                        <svg height={"20px"} className="TopBarIcon"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg>
                        <div className="TopbarIconBadge"> 3 </div>
                  </div>
              </div>
              <img src={Man}  alt="mand" className="TobarImg" />
          </div>
    </div>
  )
}
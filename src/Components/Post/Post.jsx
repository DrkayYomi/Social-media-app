import "./Post.css"; 

import Thumbsup from "../Post/check.jpg";
import Heart from "../Post/heart.jpg";
import { Users } from "../../dummyData.js";
import { useState } from "react";



export default function Post({post}) {
     const [like, setLike] = useState(post.like);
  const [isliked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isliked ? like - 1 : like + 1);
    setIsLiked(!isliked);
  }


   return(
    <div className="Post">
          <div className="Postwrapper">
                <div className="PostTop"> 
                    <div className="PostTopLeft"> 
                          <img  className="PostTopLeftImg" 
                              src={Users.filter((u) =>u.id === post.userId)[0].profile} 
                              alt="ProfileImage" />
                          <span className="PostUsername"> 
                              {Users.filter((u) =>u.id === post.userId)[0].username}
                          </span>
                          <span className="PostDate"> {post.date} </span>
                    </div>  
                    <div className="PostTopRight"> 
                          <svg height={"20px"} className="PostTopRightIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"> <path d="M64 384a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-160a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM96 96A32 32 0 1 0 32 96a32 32 0 1 0 64 0z"/></svg>
                    </div>  
                </div>

                <div className="PostCenter"> 
                          <span className="PostCenterText"> {post?.description} </span>
                          <img className="PostCenterPost1" src={post.photo} alt="Paris" />
                </div>
                <div className="PostBottom"> 
                        <div className="PostBottomLeft"> 
                              <img height={"25px"} className="LikeIcon" src={Thumbsup} onClick={likeHandler} alt="Thumbs-up" />
                              <img height={"35px"} className="LikeIcon" src={Heart}  onClick={likeHandler} alt="Heart" />
                              <span className="PostLikeCounter"> {like}  people liked</span>
                        </div>
                        <div className="PostBottomRight"> 
                            <div className="PostBottomRightText"> {post.comment} Comments </div>
                        </div>

                </div>
          </div>
    </div>
  )
}
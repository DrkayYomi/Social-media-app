import "./Online.css"

export default function Online({user}){
  return(
    <li className="OnlineFriends"> 
                        <div className="OnlineFriendsImgContainer">
                              <img className="OnlineFriendsImg" src={user.profile} alt="Friends" />
                              <span className="RightBarOnline"> </span>
                        </div>
                        <span className="RightBarUsername"> {user.username} </span>
    </li>
  )
}

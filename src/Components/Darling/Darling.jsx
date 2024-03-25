import "./Darling.css"

export default function Darling({user}){
  return(
    <li className="SideBarFriend">
          <img className="SideBarFriendImg" src={user.profile} alt="friend" />
          <span className="SidebarFriendName"> {user.username} </span> 
    </li>
  )
}

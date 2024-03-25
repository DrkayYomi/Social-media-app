import "../Rightbar/Rightbar.css"; 
import Birthday from "../Rightbar/birthday.avif";
import Advert from "../Rightbar/add.avif";
import Boy1 from "../Rightbar/boy1.avif";
import Boy2 from "../Rightbar/boy2.avif";
import Finegirl from "../Rightbar/finegirl.avif";
import Finegirl2 from "../Rightbar/finegirl2.avif";
import Finegirl3 from "../Rightbar/finegirl3.avif";
import Finegirl4 from "../Rightbar/finegirl4.avif";
import Finegirl5 from "../Rightbar/finegirl5.avif";
import { Users } from "../../dummyData";
import Online from "../Online/Online";
import Finegirl6 from "../Rightbar/finegirl6.avif";
import Finegirl7 from "../Rightbar/finegirl7.avif";

export default function Rightbar({profile}) {
  
    const HomeRightbar = () => {
        return(
            <>
                <div className="BirthdayContainer"> 
                  <img className="BirthdayImg" src={Birthday} alt="Happy Birhday" />
                  <span className="BirthdayText" > 
                        <b> Adeniran Kenny </b> and <b> 3 other friends </b> have a birthday today. 
                  </span>
              </div>
              <img className="RightBarImg" src={Advert} alt="Earn money" />
              <h4 className="RightBarImgTitle">  Online Friends</h4>
                  <ul className="OnlineFriendList">
                    <li className="OnlineFriends"> 
                        <div className="OnlineFriendsImgContainer">
                              <img className="OnlineFriendsImg" src={Boy1} alt="Friends" />
                              <span className="RightBarOnline"> </span>
                        </div>
                        <span className="RightBarUsername"> Nurse Gbenjo </span>
                    </li>
                    <li className="OnlineFriends"> 
                        <div className="OnlineFriendsImgContainer">
                              <img className="OnlineFriendsImg" src={Finegirl} alt="Friends" />
                              <span className="RightBarOnline"> </span>
                        </div>
                        <span className="RightBarUsername"> Mrs Oladimeji </span>
                    </li>
                    <li className="OnlineFriends"> 
                        <div className="OnlineFriendsImgContainer">
                              <img className="OnlineFriendsImg" src={Finegirl2} alt="Friends" />
                              <span className="RightBarOnline"> </span>
                        </div>
                        <span className="RightBarUsername"> Miss Oluwatemilorun </span>
                    </li>
                    <li className="OnlineFriends"> 
                        <div className="OnlineFriendsImgContainer">
                              <img className="OnlineFriendsImg" src={Boy2} alt="Friends" />
                              <span className="RightBarOnline"> </span>
                        </div>
                        <span className="RightBarUsername"> Dr Asha Joseph </span>
                    </li>
                    <li className="OnlineFriends"> 
                        <div className="OnlineFriendsImgContainer">
                              <img className="OnlineFriendsImg" src={Finegirl3} alt="Friends" />
                              <span className="RightBarOnline"> </span>
                        </div>
                        <span className="RightBarUsername"> Mrs Akinyemi </span>
                    </li>
                    <li className="OnlineFriends"> 
                        <div className="OnlineFriendsImgContainer">
                              <img className="OnlineFriendsImg" src={Finegirl4} alt="Friends" />
                              <span className="RightBarOnline"> </span>
                        </div>
                        <span className="RightBarUsername"> Mr Owolabi </span>
                    </li>
                    <li className="OnlineFriends"> 
                        <div className="OnlineFriendsImgContainer">
                              <img className="OnlineFriendsImg" src={Finegirl5} alt="Friends" />
                              <span className="RightBarOnline"> </span>
                        </div>
                        <span className="RightBarUsername"> Mrs Nwanere </span>
                    </li>
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ) )}
                    </ul>
            </>
        )
    };

    const ProfileRightbar = () => {
        return(
            <>
              <h4 className="rightBarTitle"> User Information </h4> 
                <div className="rightBarInfo">
                        <div className="rightBarInfoItem">
                            <span className="rightBarInfoKey"> City: </span>
                            <span className="rightBarInfoKeyValue"> New York </span>
                        </div>
                        <div className="rightBarInfoItem">
                            <span className="rightBarInfoKey"> From: </span>
                            <span className="rightBarInfoKeyValue"> Madrid </span>
                        </div>
                        <div className="rightBarInfoItem">
                            <span className="rightBarInfoKey"> Relationship: </span>
                            <span className="rightBarInfoKeyValue"> Single </span>
                        </div>
                </div> 
                <h4 className="rightBarTitle"> User Friends </h4> 
                <div className="rightBarFollowings">
                        <div className="rightBarFollowing">
                                <img className="rightbarFollowingImg" src={Finegirl6} alt="The" />
                                <span className="rightbarFollowingName" > Kenny Adeniran  </span>
                        </div>
                        <div className="rightBarFollowing">
                                <img className="rightbarFollowingImg" src={Finegirl7} alt="The" />
                                <span className="rightbarFollowingName" > Lizzy Ademola  </span>
                        </div>
                        <div className="rightBarFollowing">
                                <img className="rightbarFollowingImg" src={Finegirl5} alt="The" />
                                <span className="rightbarFollowingName" > Damilola Okunola  </span>
                        </div>
                        <div className="rightBarFollowing">
                                <img className="rightbarFollowingImg" src={Finegirl4} alt="The" />
                                <span className="rightbarFollowingName" > Kehinde Moses  </span>
                        </div>
                        <div className="rightBarFollowing">
                                <img className="rightbarFollowingImg" src={Finegirl3} alt="The" />
                                <span className="rightbarFollowingName" > Daniel Yemisi  </span>
                        </div>
                        <div className="rightBarFollowing">
                                <img className="rightbarFollowingImg" src={Finegirl2} alt="The" />
                                <span className="rightbarFollowingName" > Tope Omoloja  </span>
                        </div>
                </div>   
            </>
        )
    }
    return(
    <div className="Rightbar">
        <div className="Rightbarwrapper"> 
              {profile ? <ProfileRightbar /> :  <HomeRightbar /> }
        </div>
    </div>
  )
}
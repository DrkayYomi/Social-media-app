import "./Share.css" 
import Profilepix from '../Share/manwithcup.jpg'


export default function Share() {
  return(
    <div className="Share">
        <div className="Sharewrapper ">
              <div className="ShareTop"> 
                    <img className="Profilepix" src={Profilepix} alt="Profilepix" />
                    <input placeholder="What's on your mind?" className="Shareinput" />
              </div>
              <hr className="ShareHr" /> 
              <div className="ShareBottom"> 
                    <div className="ShareOptions">
                          <div className="ShareOption">
                                <svg height={"20px"}  className="ShareOptionIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"/></svg>
                                <span className="ShareOptionTest"> Photo or Video </span>
                          </div>
                          <div className="ShareOption">
                                  <svg height={"20px"} className="ShareOptionIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path d="M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5V80C0 53.5 21.5 32 48 32H197.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
                                 <span className="ShareOptionTest"> Tag </span>
                          </div>
                          <div className="ShareOption">
                                <svg height={"20px"} className="ShareOptionIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"> <path d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"/></svg>
                                <span className="ShareOptionTest"> Location </span>
                          </div>
                          <div className="ShareOption">
                                <svg height={"20px"} className="ShareOptionIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                                <span className="ShareOptionTest"> Feelings </span>
                          </div>
                    </div>
                    <button className="ShareButton">  Share </button>
              </div>
        </div>  
    </div>
  )
}
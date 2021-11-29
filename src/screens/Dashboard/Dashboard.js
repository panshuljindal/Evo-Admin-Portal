import "./Dashboard.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import PartnerBanner from "./assets/partner.svg";
import UpcomingIcon from "./assets/UpcomingIcon.png";
import GreyIcon from "./assets/GreyIcon.png";
import Notif from "./Notif";
import {AiOutlineCalendar} from 'react-icons/ai';
import {FaRupeeSign} from 'react-icons/fa';
import calendar from "./assets/calendar.svg";
import rupee from "./assets/rupee.svg";
import like from "./assets/like.svg";

function Dashboard() {
  return (
    <div>
      <div className="cont-dash">
        <div className="left">
            <Navbar />
        </div>
        <div className="middle-dash">
          <div className="middle-top">
            <img src={PartnerBanner} alt="Partner" className="banner"></img>
          </div>
          <div className="middle-mid">
            <h3 className="title">Upcoming Events</h3>

            <div className="row">
              <div className="middle-card">
                <p>01</p>
                <img src={UpcomingIcon} alt="upcoming-event" className="upcoming-icon"></img>
                <div className="details">
                  <p>Event Name</p>
                  <div className="sign-detail">
                    <img src={calendar} alt="" className="detail-icon"/>
                    <p>Jul 21 2021, 08:00PM</p>
                  </div>
                  <div className="sign-detail">
                    <img src={rupee} alt="" className="detail-icon"/>
                    <p>Free</p>
                  </div>
                  <div className="sign-detail">
                    <img src={like} alt="" className="detail-icon"/>
                    <p>120 Likes</p>
                  </div>
                </div>
              </div>

              <div className="middle-card">
                <p>02</p>
                <img src={UpcomingIcon} alt="upcoming-event" className="upcoming-icon"></img>
                <div className="details">
                  <p>Event Name</p>
                  <div className="sign-detail">
                    <img src={calendar} alt="" className="detail-icon"/>
                    <p>Jul 21 2021, 08:00PM</p>
                  </div>
                  <div className="sign-detail">
                    <img src={rupee} alt="" className="detail-icon"/>
                    <p>Free</p>
                  </div>
                  <div className="sign-detail">
                    <img src={like} alt="" className="detail-icon"/>
                    <p>120 Likes</p>
                  </div>
                </div>
              </div>
            </div>


            <div className="row">
              <div className="middle-card">
                <p>03</p>
                <img src={UpcomingIcon} alt="upcoming-event" className="upcoming-icon"></img>
                <div className="details">
                  <p>Event Name</p>
                  <div className="sign-detail">
                    <img src={calendar} alt="" className="detail-icon"/>
                    <p>Jul 21 2021, 08:00PM</p>
                  </div>
                  <div className="sign-detail">
                    <img src={rupee} alt="" className="detail-icon"/>
                    <p>Free</p>
                  </div>
                  <div className="sign-detail">
                    <img src={like} alt="" className="detail-icon"/>
                    <p>120 Likes</p>
                  </div>
                </div>
              </div>

              <div className="middle-card">
                <p>04</p>
                <img src={UpcomingIcon} alt="upcoming-event" className="upcoming-icon"></img>
                <div className="details">
                  <p>Event Name</p>
                  <div className="sign-detail">
                    <img src={calendar} alt="" className="detail-icon"/>
                    <p>Jul 21 2021, 08:00PM</p>
                  </div>
                  <div className="sign-detail">
                    <img src={rupee} alt="" className="detail-icon"/>
                    <p>Free</p>
                  </div>
                  <div className="sign-detail">
                    <img src={like} alt="" className="detail-icon"/>
                    <p>120 Likes</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="middle-bot">
            <div className="right-bottom">
              <h3 className="title">Most Viewed Events</h3>
              <div className="bottom-card">
                <p>01</p>
                <img src={GreyIcon} alt="event" className="event-icon"></img>
                <div className="details">
                  <p>Event Name</p>
                  <p>Views: 200</p>
                </div>
              </div>
              <div className="bottom-card">
                <p>02</p>
                <img src={GreyIcon} alt="event" className="event-icon"></img>
                <div className="details">
                  <p>Event Name</p>
                  <p>Views: 200</p>
                </div>
              </div>
              <div className="bottom-card">
                <p>03</p>
                <img src={GreyIcon} alt="event" className="event-icon"></img>
                <div className="details">
                  <p>Event Name</p>
                  <p>Views: 200</p>
                </div>
              </div>
            </div>

            <div className="left-bottom">
              <h3 className="title">Most Liked Events</h3>
              <div className="bottom-card">
                <p>01</p>
                <img src={GreyIcon} alt="event" className="event-icon"></img>
                <div className="details">
                  <p>Event Name</p>
                  <p>Likes: 200</p>
                </div>
              </div>
              <div className="bottom-card">
                <p>02</p>
                <img src={GreyIcon} alt="event" className="event-icon"></img>
                <div className="details">
                  <p>Event Name</p>
                  <p>Likes: 200</p>
                </div>
              </div>
              <div className="bottom-card">
                <p>03</p>
                <img src={GreyIcon} alt="event" className="event-icon"></img>
                <div className="details">
                  <p>Event Name</p>
                  <p>Likes: 200</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-dash">
          <div className="notif-main">
          <p className="notif">Notifications</p>
          <div className="notif-text">
          Welcome to Evo. <Link to="/profile" exact><span>Click Here</span></Link> to complete your Profile
          </div>
          <Notif text="Blender 3D Workhop was the 3rd most viewed workshop this week"></Notif>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

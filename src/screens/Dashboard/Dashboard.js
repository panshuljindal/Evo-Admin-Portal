import "./Dashboard.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import PartnerBanner from "./assets/partner.svg";
import Notif from "./Notif";

function Dashboard() {
  return (
    <div>
      <div className="cont-dash">
        <div className="left">
            {/* <Navbar /> */}
        </div>
        <div className="middle-dash">
          <div className="middle-top">
            <img src={PartnerBanner} alt="Partner" className="banner"></img>
            </div>
          <div className="middle-mid">Hi Mid</div>
          <div className="middle-bot">Hi Bottom</div>
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

import Navbar from "../components/Navbar";
import "./AllEvents.css";
import poster from "./assets/poster.svg";

function AllEvents() {
  return (
    <div>
      <div className="cont-dash">
        
        <div className="left">
          {/* <Navbar /> */}
        </div>
        
        <div className="middle-dash">
          <h3>All Events (04)</h3>

          <div className="row">
            <div className="eventcard">
              <div className="info">
                <h4>Blender 3D Workshop</h4>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Jul 24 2021, 09:00 PM</p>
                <p>900 Rs</p>
              </div>
              <div className="image">
                <img src={poster} alt="event poster" className="poster"></img>
              </div>
            </div>

            <div className="eventcard">
              <div className="info">
                <h4>Blender 3D Workshop</h4>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Jul 24 2021, 09:00 PM</p>
                <p>900 Rs</p>
              </div>
              <div className="image">
                <img src={poster} alt="event poster" className="poster"></img>
              </div>
            </div>
          </div>
          

          <div className="row">
            <div className="eventcard">
              <div className="info">
                <h4>Blender 3D Workshop</h4>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Jul 24 2021, 09:00 PM</p>
                <p>900 Rs</p>
              </div>
              <div className="image">
                <img src={poster} alt="event poster" className="poster"></img>
              </div>
            </div>

            <div className="eventcard">
              <div className="info">
                <h4>Blender 3D Workshop</h4>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Jul 24 2021, 09:00 PM</p>
                <p>900 Rs</p>
              </div>
              <div className="image">
                <img src={poster} alt="event poster" className="poster"></img>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AllEvents;

import Navbar from "../components/Navbar";
import "./NewEvent.css"
import InputBox from "../components/InputBox";

function NewEvent() {
  return (
    <div>
      <div className="cont-dash">
      <div className="left">
            {/* <Navbar /> */}
        </div>
        <div className="middle-new">
          <p className="title">New Event</p>
          <InputBox type="text" place="Name of the Event" />
          <InputBox type="date" place="Date of the Event" />
          <InputBox type="time" place="Time Duration" />
          <InputBox type="number" place="Price" />
          <InputBox type="link" place="Registration Link" />
        </div>
        <div className="right-new">
         <InputBox type="file" place="Name of the Event" />
        </div>
      </div>
    </div>
  );
}

export default NewEvent;

import React from "react";
import { useEffect, useState } from "react";
import Client from "../services/api";
import RecordingItem from "../components/RecordingItem";
import { useNavigate } from "react-router-dom";
import Stopwatch from "../components/Stopwatch";

const YourRecordings = () => {
  let navigate = useNavigate();

  const [times, setTime] = useState([]);

  const getTimes = async () => {
    const recordings = await Client.get(`times`);
    console.log(recordings.data);
    setTime(recordings.data);
  };

  useEffect(() => {
    getTimes();
  }, []);

  const [newRecording, setRecording] = useState({
    name: "",
    content: "",
    distance: "",
  });

  const getNewTiming = async () => {
    await Client({
      url: `times`,
      method: "post",
      data: newRecording,
    });
  };

  const handleChange = (e) => {
    setRecording({ ...newRecording, [e.target.name]: e.target.value });
    console.log(e.target.name);
    console.log(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    getNewTiming();
    navigate("/yourrecordings");
    window.location.reload(false);
  };

  return (
    <div>
      <div className="post-title">
        <Stopwatch />
      </div>
      <div className="rec-container centered bkground2">
        <h2 className="post-title">Add a New Recording</h2>
        <form className="submit-form centered" onSubmit={submitForm}>
          <input
            className="input"
            type="text"
            value={newRecording.name}
            onChange={handleChange}
            name={"name"}
            placeholder={"Trail name"}
          />
          <input
            className="input"
            type="text"
            value={newRecording.content}
            onChange={handleChange}
            name={"content"}
            placeholder={"Your Time"}
          />
          <input
            className="input"
            type="text"
            value={newRecording.distance}
            onChange={handleChange}
            name={"distance"}
            placeholder={"Distance"}
          />
          <button className="sub-btn">Submit</button>
        </form>
      </div>
      <div className="centered">
        <h2 className="post-title">Your Recordings:</h2>
        {times.map((time) => (
          <div className="comments" key={time.id}>
            <RecordingItem
              name={time.name}
              content={time.content}
              distance={time.distance}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourRecordings;

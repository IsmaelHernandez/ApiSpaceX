import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CardMissions from "./components/CardMissions";
import ImgSpacex from "./assets/img/SpaceX_Logo_Black.png";

function App() {
  const [missions, setMissions] = useState();

  useEffect(() => {
    const URL = "https://api.spacexdata.com/v3/missions";
    axios
      .get(URL)
      .then((res) => setMissions(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(missions);

  return (
    <div className="App">
      <div className="divContainer">
        <div className="header"></div>
        <div className="divImg">
          <img src={ImgSpacex} alt="" />
        </div>
        {missions?.map((mission) => (
          <CardMissions mission={mission} key={`${mission.mission_id}`} />
        ))}
      </div>
    </div>
  );
}

export default App;

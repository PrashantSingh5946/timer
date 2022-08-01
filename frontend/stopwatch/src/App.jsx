import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [isTicking, setIsTicking] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  // Convert time to a format of hours, minutes, seconds, and milliseconds

function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let diffInMs = (diffInSec - ss) * 100;
  let ms = Math.floor(diffInMs);

  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  let formattedMS = ms.toString().padStart(2, "0");

  return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

  useEffect(() => {
    let interval = setInterval(() => {
      if (isTicking) {
        setElapsedTime((elapsedTime) => elapsedTime + 10);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [isTicking]);

  return (
    <div className="container">
      {/* Toggle Bar */}
      <div>
        <button
          onClick={() => {
            setIsTicking((isTicking) => !isTicking);
          }}
        >
          {isTicking ? "Pause" : "Play"}
        </button>
        <button onClick={() => {setElapsedTime(0)}}>Reset</button>
      </div>

      <div>{timeToString(elapsedTime)}</div>
    </div>
  );
}

export default App;

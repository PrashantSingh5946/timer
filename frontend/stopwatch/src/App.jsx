import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [isTicking, setIsTicking] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

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

      <div>{elapsedTime}</div>
    </div>
  );
}

export default App;

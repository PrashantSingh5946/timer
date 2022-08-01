import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [isTicking, setIsTicking] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      isTicking ? setElapsedTime((elapsedTime) => elapsedTime + 1000) : null;
    }, 1000);
  }, []);

  return (
    <div className="container">
      {/* Toggle Bar */}
      <div>
        <button
          onClick={() => {
            setIsTicking((isTicking) => !isTicking);
          }}
        >
          Play/Pause
        </button>
        <button onClick={() => {}}>Reset</button>
      </div>

      <div>{elapsedTime}</div>
    </div>
  );
}

export default App;

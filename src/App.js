import './App.css';
import { useState, useEffect } from "react";

export default function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };

  // Verification of the initial state of the stopwatch
  useEffect(() => {
    console.log("Initial state of the stopwatch:");
    console.log("isRunning:", isRunning);
    console.log("elapsedTime:", elapsedTime);
  }, []);

  return (
    <div>
      <h1>Stop Timer</h1>
      <h1> Time: {formatTime(elapsedTime)} </h1>
      <button onClick={handleStartStop}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

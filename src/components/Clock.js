import { useEffect, useRef, useState } from "react";

import "../styles/Clock.css";

const Clock = () => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      const date = new Date();
      setHours(date.getHours());
      setMinutes(date.getMinutes());
      setSeconds(date.getSeconds());
    }, 1000);

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="clock">
      {hours < 10 ? (
        <span className="hours">0{hours}</span>
      ) : (
        <span className="hours">{hours}</span>
      )}
      :
      {minutes < 10 ? (
        <span className="minutes">0{minutes}</span>
      ) : (
        <span className="minutes">{minutes}</span>
      )}
      :
      {seconds < 10 ? (
        <span className="seconds">0{seconds}</span>
      ) : (
        <span className="seconds">{seconds}</span>
      )}
    </div>
  );
};

export default Clock;

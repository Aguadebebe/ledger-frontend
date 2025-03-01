import React from "react";
import { useState, useEffect } from "react";

const TimeStamp = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date().toLocaleString()), 1000); //1000 - milliseconds is a second, 60000 ms is a one minute

    return () => clearInterval(interval);
  }, []);
  return <p style={{ color: "aquamarine" }}>{currentTime}</p>;
};

export default TimeStamp;

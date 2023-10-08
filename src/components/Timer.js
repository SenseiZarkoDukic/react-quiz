import React, { useState, useEffect } from "react";

const Timer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer">
      <p>{time / 60}</p>
    </div>
  );
};

export default Timer;

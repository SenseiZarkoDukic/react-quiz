import React, { useState, useEffect } from "react";

function Timer() {
  useEffect(() => {
    setInterval(() => {}, 1000);
  }, []);
  return (
    <div className="timer">
      <p>05:00</p>
    </div>
  );
}

export default Timer;

// const Timer = ({ initialTime }) => {
//   const [time, setTime] = useState(initialTime);
//   const seconds = String(time % 60).padStart(2, 0);
//   const minutes = String(Math.floor(time / 60)).padStart(2, 0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime((prevTime) => prevTime - 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="timer">
//       <p>
//         {minutes}:{seconds}
//       </p>
//     </div>
//   );
// };

// export default Timer;

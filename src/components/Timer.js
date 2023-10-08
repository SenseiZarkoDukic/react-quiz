import React, { useState, useEffect } from "react";

function Timer({ secondsRemaining, dispatch }) {
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);
  return (
    <div className="timer">
      <p>{secondsRemaining}</p>
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

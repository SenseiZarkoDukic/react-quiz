import React, { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

function Timer() {
  const { secondsRemaining, dispatch } = useQuiz();
  const minutes = String(Math.floor(secondsRemaining / 60)).padStart(2, 0);
  const seconds = String(secondsRemaining % 60).padStart(2, 0);

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);
  return (
    <div className="timer">
      <p>
        {minutes < 0 && "0"}
        {minutes}:{seconds < 0 && "0"}
        {seconds}
      </p>
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

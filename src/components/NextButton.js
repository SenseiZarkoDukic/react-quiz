function NextButton({ dispatch, answer }) {
  return (
    <div>
      {answer && (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Play again
        </button>
      )}
    </div>
  );
}

export default NextButton;

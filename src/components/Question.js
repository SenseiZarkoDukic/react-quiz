import Options from "./Options";

function Question({ question, dispatch }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} />
    </div>
  );
}

export default Question;

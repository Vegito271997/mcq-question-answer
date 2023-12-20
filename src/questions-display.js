import { useEffect, useState } from "react";
import RenderResult from "./render-result";
import { mockQuestions } from "./constants";

const QuestionsDisplay = () => {
  const [questions, setQuestions] = useState(mockQuestions);
  const [activeQues, setActiveQues] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [ans, setAns] = useState(Array(questions.length).fill(""));

  const isLastQues = activeQues === questions.length - 1;
  const showPreviousButton = activeQues !== 0;

  const handleButtonClick = () => {
    if (isLastQues) {
      setShowResult(true);
    } else setActiveQues((prev) => prev + 1);
  };
  const handleAnswerSubmit = (e) => {
    const _ans = e.target.value;

    const newAnsArray = ans;
    newAnsArray[activeQues] = _ans;
    setAns([...newAnsArray]);
  };

  const handlePrev = () => {
    setActiveQues((prev) => prev - 1);
  };

  console.log(ans);

  const question = questions[activeQues];

  return (
    <div>
      <h1>Quiz App</h1>
      {showResult ? (
        <RenderResult questions={questions} ans={ans} />
      ) : (
        <>
          <div>
            <span>{question.title}</span>
            <select
              key={question}
              onChange={handleAnswerSubmit}
              value={ans[activeQues]}
            >
              {question.options.map((option, i) => (
                <option value={option}>{option}</option>
              ))}
            </select>
          </div>
          {showPreviousButton && <button onClick={handlePrev}>Prev</button>}
          <button onClick={handleButtonClick}>
            {isLastQues ? "Submit" : "Next"}
          </button>
        </>
      )}
    </div>
  );
};

export default QuestionsDisplay;

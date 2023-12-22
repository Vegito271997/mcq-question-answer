import { useEffect, useState } from "react";
import RenderResult from "./render-result";
import { mockQuestions } from "./constants";
import RenderQuestion from "./select-ui";

const QuestionsDisplay = () => {
  const [questions] = useState(mockQuestions);
  const [activeQues, setActiveQues] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState([]); // Multiple answers

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < questions.length; i++) arr.push([]);

    setSelectedOption(arr);
  }, [questions.length]);

  const isLastQues = activeQues === questions.length - 1;
  const showPreviousButton = activeQues !== 0;

  const handleButtonClick = () => {
    if (isLastQues) {
      setShowResult(true);
    } else setActiveQues((prev) => prev + 1);
  };

  const handlePrev = () => {
    setActiveQues((prev) => prev - 1);
  };

  const onChangeHandler = (e, option) => {
    const value = e.target.value;

    setSelectedOption((prev) => {
      const newArr = [...prev];
      if (prev[activeQues].includes(option)) {
        const updatedArr = selectedOption[activeQues]?.filter(
          (val) => val !== option
        );
        newArr[activeQues] = updatedArr;
        return newArr;
      }
      newArr[activeQues].push(value);
      return newArr;
    });
  };

  const question = questions[activeQues];

  return (
    <div>
      <h1>Quiz App</h1>
      {showResult ? (
        <RenderResult questions={questions} ans={selectedOption} />
      ) : (
        <>
          <RenderQuestion
            question={question}
            onChangeHandler={onChangeHandler}
            activeQues={activeQues}
            selectedOption={selectedOption}
          />

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

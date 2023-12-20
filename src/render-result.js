import React from "react";

const RenderResult = ({ questions, ans }) => {
  return (
    <div>
      <h3>Here are your answers:</h3>
      <div>
        {questions.map((_question, index) => (
          <>
            <span>Ques: {_question.title}</span>
            <span>Ans: {ans[index]}</span>
          </>
        ))}
      </div>
    </div>
  );
};

export default RenderResult;

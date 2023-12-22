const RenderResult = ({ questions, ans }) => {
  return (
    <div>
      <h3>Here are your answers:</h3>
      <div>
        {questions.map((_question, index) => (
          <div>
            <span>Ques: {_question.title}</span>
            <span>Ans:</span>
            {ans[index].map((val) => (
              <span>{val}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RenderResult;

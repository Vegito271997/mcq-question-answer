const RenderQuestion = ({
  question,
  onChangeHandler,
  activeQues,
  selectedOption,
}) => {
  return (
    <div>
      <span>{question.title}</span>
      <ul>
        {question.options.map((option, index) => (
          <label>
            <input
              key={option}
              value={option}
              type="checkbox"
              checked={selectedOption[activeQues]?.includes(option)}
              onChange={(e) => onChangeHandler(e, option)}
            />
            {option}
          </label>
        ))}
      </ul>
    </div>
  );
};

export default RenderQuestion;

import React from "react";
import Option from "./Option";

const Question = ({question, selectedOption, onOptionChange, onSubmit}) => {
    return (
        <div className="question">
            <h3>Question {question.id}</h3>
            <h4 className="my-2">{question.question}</h4>
            <form onSubmit={onSubmit} className="mb-2">
              <Option 
                options={question.options}
                selectedOption={selectedOption}
                onOptionChange={onOptionChange}
              />
              <button type="submit" className="btn">
                Submit
              </button>
            </form>
        </div>
    )
};

export default Question;
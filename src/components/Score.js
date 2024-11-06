import React from "react";

const Score = ({ score, onNextQuestion}) => {
    return (
        <div>
            <h2>Results</h2>
            <h4>Your Score: {score} </h4>

            {score > 80 ? (
              <p>Great Job! You Score high!</p>
            ):(
                <p>Keep trying! Practice make prefect.</p>
            )}
            {onNextQuestion && (
                <button onClick={onNextQuestion}>Next Question</button>
            )}
        </div>
    )
}

export default Score;
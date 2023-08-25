import React, { useEffect, useState } from 'react';
import Wrapper from './style'; 
import axios from 'axios';

const Question = () => {
  const [selectedQuiz, setSelectedQuiz] = useState('');
  const [questions, setQuestions] = useState([]);
  const [quizes, setQuizes] = useState([])


  useEffect(() => {
    axios
    .get("https://quizattendace.onrender.com/api/quiz/read")
    .then((res) => {
      setQuizes(res.data);
    })
    .catch(console.log)
    .finally(() => {
      // e.target.value = "Created";
      // navigate("/quizCreate");
    })
  },[])

  const handleQuizSelect = (event) => {
    setSelectedQuiz(event.target.value);
  };

  const handleAddQuestion = () => {
    const newQuestion = {
      question: '',
      options: ['', '', '', ''],
      correctOption: 0,
    };

    setQuestions([...questions, newQuestion]);
  };

  

  return (
    <Wrapper>
      <div>
        <h1>Create a Quiz</h1>
        <label htmlFor="quizSelector">Select a Quiz:</label>
        <select id="quizSelector" value={selectedQuiz} onChange={handleQuizSelect}>
          <option value="">Select an option</option>
          {
            quizes.map(quiz => <option value={quiz.id}>{quiz.title}</option>)
          }
        </select>

        <button onClick={handleAddQuestion}>Add Question</button>

        {
        questions.map((question, index) => (
          <div key={index} className="question-container">
            <label>Question {index + 1}:</label>
            <input
              type="text"
              value={question.question}
              onChange={(event) => {
                const updatedQuestions = [...questions];
                updatedQuestions[index].question = event.target.value;
                setQuestions(updatedQuestions);
              }}
            />

            <label>Options:</label>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <label>
                  <input
                    type="radio"
                    value={optionIndex}
                    checked={question.correctOption === optionIndex}
                    onChange={() => {
                      const updatedQuestions = [...questions];
                      updatedQuestions[index].correctOption = optionIndex;
                      setQuestions(updatedQuestions);
                    }}
                  />
                  <input
                    type="text"
                    value={option}
                    onChange={(event) => {
                      const updatedQuestions = [...questions];
                      updatedQuestions[index].options[optionIndex] = event.target.value;
                      setQuestions(updatedQuestions);
                    }}
                  />
                </label>
              </div>
            ))}
          </div>
        ))}

      </div>
    </Wrapper>
  );
};

export default Question;

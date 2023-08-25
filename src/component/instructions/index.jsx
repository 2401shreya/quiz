import React from 'react'
import Wrapper from './style'
import { Link, useNavigate } from 'react-router-dom'



const Instructions = (quiz) => {

  
 
const navigate = useNavigate()

  const startQuiz = () => {
    const selectedQuizId = quiz.id;

    navigate(`/quiz/${selectedQuizId}`);
  };
  return (
    <Wrapper>
      <><section>
      <div class="first">
        <h2>Instructions for Quiz</h2>
        <ol>
          <li>The duration of quiz is 10 minutes.</li>
          <li>The quiz contains 10 Questions.</li>
          <li>The type of Questions shall be Multiple Choice Question(MCQs).</li>
          <li>Each Question carries 1 mark.</li>
          <li>There shall be no negative marking.</li>
        </ol>
       <input type="button" onClick={startQuiz} value="Start Quiz" /> 
      </div>
      </section></>
    </Wrapper>
  )
}

export default Instructions

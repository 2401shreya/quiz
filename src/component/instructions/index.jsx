import React from 'react'
import Wrapper from './style'

const Instructions = () => {
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
        <input type="button" value="Start Quiz" />
      </div>
      </section></>
    </Wrapper>
  )
}

export default Instructions

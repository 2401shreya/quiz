import React, { useState } from 'react';
import {  useNavigate } from 'react-router';
import axios from 'axios';
import Wrapper from './style';

const Teacher = () => {
  const [quizTitle, setQuizTitle] = useState('');
  const [quizImage, setQuizImage] = useState(null);
  const [quizDuration, setQuizDuration] = useState('');
    const navigate = useNavigate();
  const handleTitleChange = (event) => {
    setQuizTitle(event.target.value);
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setQuizImage(selectedImage);
  };

  const handleDurationChange = (event) => {
    setQuizDuration(event.target.value);
  };

  const handleSubmit = (e) => {
    axios
    .post("https://quizattendace.onrender.com/api/quiz/add", {
      quizTitle,quizImage,quizDuration 
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.message);
    })
    .finally(() => {
      e.target.value = "Created";
      navigate("/addques");
    })
}

  return (
    <Wrapper>
    <section>
    <div className="quiz-container">
      <h1>Quiz Page</h1>
      <div className="quiz-form">
        <label>
          Quiz Title:
          <input type="text" value={quizTitle} onChange={handleTitleChange} />
        </label>
        <label>
          Quiz Image:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        <label>
          Quiz Duration (minutes):
          <input type="number" value={quizDuration} onChange={handleDurationChange} />
        </label>
        <button onClick={handleSubmit}>Add Quiz</button>
      </div>
    </div>
    </section>
    </Wrapper>
  );
}

export default Teacher;

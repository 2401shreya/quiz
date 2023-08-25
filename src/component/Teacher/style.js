import { styled } from "styled-components";


const Wrapper = styled.section`


.quiz-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.quiz-form {
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 20px;
}

.quiz-form label {
  display: block;
  margin-bottom: 10px;
}

.quiz-form input[type="text"],
.quiz-form input[type="number"],
.quiz-form input[type="file"] {
  width: 90%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  margin-top: 5px;
}

.quiz-form button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
}

.quiz-form button:hover {
  background-color: #0056b3;
}
`

export default Wrapper
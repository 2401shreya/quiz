import styled from "styled-components";

const Wrapper = styled.section`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  select,
  button {
    font-size: 16px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  button {
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }

  .question-container {
    border: 1px solid #ccc;
    padding: 10px;
    margin-top: 20px;
    border-radius: 5px;
    background-color: #f9f9f9;
  }

  .question-container label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .question-container input[type="text"] {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .question-container input[type="text"]:focus {
    border-color: #007bff;
  }

  .question-container input[type="text"],
  .question-container input[type="radio"] {
    margin-right: 5px;
  }

  .question-container input[type="radio"] {
    vertical-align: middle;
  }
`;

export default Wrapper;

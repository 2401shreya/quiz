import { styled } from "styled-components";

const Wrapper = styled.section`

// QuizDetails.scss

.quiz-details {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .top {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    h2 {
      font-size: 1.5rem;
      margin-right: 10px;
      color: #333;
    }

    img {
      max-width: 200px;
      height: auto;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }

  h3 {
    font-size: 1.2rem;
    margin-top: 15px;
    color: #555;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin-top: 10px;

    .ques {
      margin-top: 20px;
      padding: 10px;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      background-color: #fff;
      transition: background-color 0.2s, border-color 0.2s;

      &:hover {
        background-color: #f8f8f8;
        border-color: #ccc;
      }

      ul {
        margin-top: 10px;
        padding-left: 20px;

        .option {
          margin-top: 5px;

          .radio {
            display: flex;
            align-items: center;
            cursor: pointer;
            transition: color 0.2s;

            input {
              margin-right: 5px;
            }

            &:hover {
              color: #007bff;
            }
          }
        }
      }
    }
  }

  input[type="button"] {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #0056b3;
    }
  }
}






`

export default Wrapper
import { styled } from "styled-components";



const Wrapper = styled.section`

// style.scss

@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

$primary-color: #3498db;
$secondary-color: #e74c3c;

.link {
    text-decoration: none;
      color: #007bff;

      &:hover {
        text-decoration: underline;
      }
}


  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;

  section {
    background-color: #f1f1f1;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    div {
      text-align: center;

      h1 {
        font-size: 24px;
        margin-bottom: 20px;
        color: $primary-color;
      }

      input {
        width: 90%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-family: 'Roboto', sans-serif;

        &:focus {
          outline: none;
          border-color: $primary-color;
        }
      }

      input[type="button"] {
        background-color: #007bff;
      color: #fff;
      border: none;
      cursor: pointer;
      
      &:hover{
        color: #0056b3;
      }
      }

      p {
        margin-top: 20px;
      }

      footer {
        margin-top: 20px;
        color: #888;
      }
    }
  }



`
export default Wrapper
import { styled } from "styled-components";

const Wrapper = styled.section`
h1{
  font-size: 25px;
  margin-left: 50px;
}
div{
  display:flex;
  justify-content:center;
  margin-right: 30px;
  margin-left:10px;
}



  img{
    width:140px;
    height:140px;
    margin-bottom:10px;

    &:hover {
      transform: scale(1.05); 
    }
  }

  li{
    margin-bottom:40px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    list-style:none;


    

    .quiz-link{
      text-decoration: none;
    }

    .quiz-title {
      font-weight: bold;
    }

    a {
      color: #333; 
      text-decoration: none;
  
      &:hover {
        color: #007bff; 
        text-decoration: underline;
      }
    }
  } 
}



`
export default Wrapper
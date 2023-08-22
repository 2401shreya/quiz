import { styled } from "styled-components";

const Wrapper = styled.section`
margin: 5vh;

.first{
    padding-top: 1px;
    height: 40vh;
    border-radius: 5px;
    background-color:#f1f1f1;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
    }
.first h2{
    text-align: center;

}
.first ol{
    font-size: 18px;
}
.first input[type=button]{
    margin-left: 45%;
    width: 100px;
    height: 40px;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    border: 0.5px;
}



`
export default Wrapper
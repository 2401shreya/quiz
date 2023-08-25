import Student from "./component/Student";
import Header from "./component/header";
import Login from "./component/loginpage";
import RegistrationForm from "./component/registration";
import { Route,Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import QuizDetails from "./component/quiz";
import QuizResult from "./component/result";
import Teacher from "./component/Teacher";
import Question from "./component/Addques";

function App() {
  return(
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/register" element={<RegistrationForm/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/student" element={<Student/>}/>
      <Route path="/quiz/:id" element={<QuizDetails/>}/>
      <Route path="/quiz/:id/result" element={<QuizResult/>}/>
      <Route path="/teacher" element={<Teacher/>}/>
      <Route path="/addques" element={<Question/>}/>
    </Routes>
   
    </BrowserRouter>
  

   
  )
}

export default App;
import Header from "./component/header";
import Login from "./component/loginpage";
import QuizPage from "./component/quizpage";
import RegistrationForm from "./component/registration";
import { Route,Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return(
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/register" element={<RegistrationForm/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/quizpage" element={<QuizPage />} />
    </Routes>
   
    </BrowserRouter>
  

   
  )
}

export default App;
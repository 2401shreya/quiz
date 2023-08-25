import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import QuizDetails from '../quiz';
import quizzes from '../Data';
import Wrapper from './style';
// import Instructions from '../instructions';

const Student = () => {
    const [selectedQuiz, setSelectedQuiz] = useState(null);
    

    const handleQuizClick = (quizId) => {
        const selected = quizzes.find(quiz => quiz.id === quizId);
        setSelectedQuiz(selected);
        console.log(selected)
    };


    return (  
        <Wrapper>
        <section>    
        
            <h1>Welcome to Quiz, Student</h1>
           
            <div>
            <ul>
                {quizzes.map(quiz => (
                    <li key={quiz.id}>
                        <Link to={`/quiz/${quiz.id}`} onClick={() => handleQuizClick(quiz.id)}>
                            <div className="quiz-thumbnail">
                                <img src={quiz.thumbnail} alt={`${quiz.title} Thumbnail`} />
                            </div>
                            <div className="quiz-title">{quiz.title}</div>
                        </Link>
                    </li>
                ))} 
            </ul>
            </div>
            {selectedQuiz && <QuizDetails quiz={selectedQuiz} />} 
        
        </section>
        </Wrapper>
        
    
    );
}

export default Student;



import { useCallback, useState } from "react";
import QUESTION from '../questions.js';
import Summary from "./Summary.jsx";
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import Question from "./Question.jsx";

export default function Quiz(){
    
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex =userAnswers.length;

    const quizIsComplete = activeQuestionIndex ===QUESTION.length;

   const handleSelectAnswer = useCallback( function handleSelectAnswer(selectedAnswer){
        
        setUserAnswers((prevUserAnswer)=>{
            return [...prevUserAnswer, selectedAnswer];
        });

  
    },[]
);

const handleSkipAnswer = useCallback(()=>handleSelectAnswer(null),[handleSelectAnswer])

    if(quizIsComplete){  
       return <Summary userAnswers={userAnswers} index={activeQuestionIndex}/>
    }


    return(
        <div id="quiz">
           <Question 
            key={activeQuestionIndex}
            index={activeQuestionIndex}
            onSkipAnswer={handleSkipAnswer}
            onSelectAnswer={handleSelectAnswer} 
           />
          
            
        </div>
    )
}
import React from 'react';

import ActionBar from './ActionBar';
import Question from './Question.js';
import Answer from './Answer';

export default function Game (props){

    function nextClick() {
        props.nextClick();
      }

      function previousClick() {
        props.previousClick();
      }

      function submitClick() {
        props.submitClick();
      }

      function scoring() {
        props.scoring();
      }
    
    
    
    return (
            <div>
               
               <Question quiz={props.quiz} empty={props.empty} finished={props.finished} score={props.score}/>
                <Answer scoring= {scoring} quiz={props.quiz} currentQuiz={props.currentQuiz}/>
                <ActionBar currentQuiz={props.currentQuiz} finished={props.finished} quizzesLength={props.quizzesLength} 
                    nextClick={nextClick} previousClick={previousClick} submitClick ={submitClick} />
            </div>


        );

        
    
}
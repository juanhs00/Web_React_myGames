import React, { useState, useEffect } from 'react';

import { array } from "../assets/mock-data";

import Game from "./Game.js";


export default function Quiz(props) {
  
  const [score, setScore] = useState(0); 
  const [finished, setFinished] = useState(false); 
  const [currentQuiz, setCurrentQuiz] = useState(0); 
  const [quizzes, setQuizzes] = useState([]); 
  const [empty, setEmpty] = useState(true); 

 useEffect(() => {
      async function fetchData(){
        try{
        const token ='62cf154fa6412374c914' ;
        const url = 'https://core.dit.upm.es/api/quizzes/random10wa?token='+token;
        const response = await fetch (url)
        
        const array = await response.json();
     
        if (array === []) {
          alert("El quiz está vacío")
      }else{
        setQuizzes(array);
        setEmpty(false);
        
      }
  } catch(e){
    alert("Error en la descarga del quiz");
    setEmpty(true);
  }}
      fetchData();
}, []);  

function  nextClick(){
  let currentquiz = currentQuiz;
  setCurrentQuiz(currentquiz + 1);
};

function  previousClick(){
  let currentquiz = currentQuiz;
  setCurrentQuiz(currentquiz - 1);

};

function  submitClick(){

  setFinished(true);


};

function scoring(){
  let points = score;
  points++;
  setScore(points);
}

  


  return(
    <div className="Quiz">
      <h1>Quiz</h1>
      <Game quiz={quizzes[currentQuiz]} currentQuiz={currentQuiz} quizzesLength={quizzes.length} empty={empty}
       score={score} finished = {finished}  
       nextClick={nextClick} previousClick={previousClick} submitClick={submitClick} scoring= {scoring}/>
    </div>
  )
}


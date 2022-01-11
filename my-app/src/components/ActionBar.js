import React from 'react';
import {Button} from 'react-bootstrap';
import { useContext } from "react";
import { LangContext } from "../App";


export default function ActionBar (props) {

    function nextClick() {
        props.nextClick();
      }

      function previousClick() {
        props.previousClick();
      }

      function submitClick() {
        props.submitClick();
      }
  
      const lang = useContext(LangContext);

        return (
          <div>
            <Button onClick={nextClick}
                 disabled={(props.currentQuiz === props.quizzesLength-1) || (props.quizzesLength===0) || (props.finished)}>
                {lang.dictionary["next"]}</Button>
            <Button onClick={previousClick} 
                disabled={props.currentQuiz === 0 || (props.quizzesLength===0)|| (props.finished)}>
                {lang.dictionary["previous"]}</Button>
            <Button onClick={submitClick} disabled={props.finished}>{lang.dictionary["submit"]}</Button>
          </div>
        );
}
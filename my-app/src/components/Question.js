import React from "react";


	

export default function Question(props) {




if (props.empty){
    return(
        <h2>No hay quizzes disponibles</h2>
    )
}

else if (props.finished === false) { //TODO
    return(
        <div>
               <h3>{props.quiz.question} </h3>
              <div >
              {props.quiz.attachment=== null ? (<p>Sin Foto</p>) : <img src={props.quiz.attachment.url } width="200" height="200"/> }
			</div>
            <div>
           {props.quiz.author ===null ? (<b>Autor anónimo sin foto</b>): (<b>{props.quiz.author.username === null ? (<p>Anónimo</p>): props.quiz.author.username}          </b>)}
           {props.quiz.author ===null ? (<b>Autor anónimo sin foto</b>): props.quiz.author.photo=== null ? (<p>Sin Foto de Autor </p>) : <img src={props.quiz.author.photo.url } width="70" height="70"/> }
                 
            </div>

        </div>
    )
}

else {
    return (
        <h2>Tu puntuación ha sido {props.score} puntos</h2>
        
    )
}
}
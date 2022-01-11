import React from "react";
import { useContext } from "react";
import { LangContext } from "../App";
import { useForm} from "react-hook-form"



export default class Answer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', correct: []};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.scoring = this.scoring.bind(this);
    }
    

    scoring() {
        this.props.scoring();
      }

    handleChange(event){
        this.setState({value: event.target.value});

    }

    handleSubmit(event){
        alert ('Comprobando ' + this.state.value);
        
        event.preventDefault();
        if (this.state.correct.includes(this.state.value)){
            alert ('Ya acertada')
        }
       else if (this.state.value === this.props.quiz.answer){
            this.scoring();
            this.state.correct.push(this.state.value);
            alert ('OK!');
        }
        else {
            alert (':(')
        }
    }

    render(){
        
        return(
            
            <form onSubmit={this.handleSubmit}>
                      
                    <input  type="text"  
                    value={this.state.value}
                    onChange={ this.handleChange}>
                    </input> 
                        <input type ="submit" value="Check"/>
                    </form>
        );
    }
}




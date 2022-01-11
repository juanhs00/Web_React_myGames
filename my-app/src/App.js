import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import TicTacToe from "./ticComponents/TicTacToe";

import es from './lang/es.json';
import en from './lang/en.json';
import Navbar from './components/Navbar';

const dictionaryList = {en, es};

export const LangContext = React.createContext({userLang: 'es', dictionary: es});

export default function App(props) {
  
  const [lang, setLang] = useState('en');
  const [loading, setLoading] = useState(false);

  const handleLanguageChange = (event) => {
		setLang(event.target.value);
	}

  return (
    <div className="App">
      
      <LangContext.Provider value={{handleLanguageChange: handleLanguageChange, userLang: lang, dictionary: dictionaryList[lang]}}>
  
  
      <Navbar/>


          <nav className="nav nav-tabs" role="tablist">  
            <NavLink to="/">Home</NavLink>
            <NavLink to="/tictactoe">TicTacToe</NavLink>
            <NavLink to="/quiz">Quiz</NavLink>
          </nav>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="tictactoe" element={<TicTacToe />} />
            <Route path="quiz" element={<Quiz />} />
          </Routes>
  
     

      </LangContext.Provider>
    </div>
  );
}


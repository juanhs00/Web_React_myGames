import React from 'react';
import { useContext } from "react";
import { LangContext } from "../App";

export default function Home (props){
    const lang = useContext(LangContext);
        return (
            <h1>{lang.dictionary["welcome"]}</h1>
            
         )  
        }
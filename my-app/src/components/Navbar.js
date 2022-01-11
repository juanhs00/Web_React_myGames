import React from "react";
import { useContext } from "react";
import { LangContext } from "../App";
import LangSelector from "./LangSelector";
          

export default function Navbar(props) {
	const lang = useContext(LangContext);
	return <div className="header">
			<h1>{lang.dictionary["mygames"]}</h1>
			<LangSelector />
		</div>
	}		
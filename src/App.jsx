import "./App.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Home from "./pages/Home";

function App() {
	const navigate = useNavigate();
	return (
		<div className="h-full w-full flex items-center justify-center bg-white">
			<Home />
		</div>
	);
}

export default App;
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./App.css";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);

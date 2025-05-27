import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Home() {
	const navigate = useNavigate();
	return (
		<div className="min-h-full bg-[#F7F8F9] shadow-lg flex flex-col items-center justify-end p-6 ">
			<div className="mb-6">
				<h1 className="text-3xl font-bold text-gray-900 mb-2">
					Welcome to PopX
				</h1>
				<p className="text-gray-500 text-sm mb-6">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit
				</p>
				<div className="space-y-3">
					<Button
						label="Create Account"
						className="text-white bg-[#6C25FF] cursor-pointer"
						onClick={() => navigate("/signup")}
					/>
					<Button
						label="Already Registered? Login"
						className="text-[#504E64] bg-[#CEBAFB] cursor-pointer"
						onClick={() => navigate("/login")}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
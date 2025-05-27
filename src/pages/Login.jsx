import React, { useState } from "react";
import TextField from "../components/TextField";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Login() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({ email: "", password: "" });
	const [errors, setErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);

	const validateFields = () => {
		const newErrors = {};

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
			newErrors.email = "Enter a valid email address.";
		if (formData.password.length < 6)
			newErrors.password = "Password must be at least 6 characters.";

		return newErrors;
	};

	const handleChange = (field, value) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	const handleSubmit = () => {
		setSubmitted(true);
		const validationErrors = validateFields();
		setErrors(validationErrors);

		if (Object.keys(validationErrors).length === 0) {
			navigate("/profile");
		}
	};

	return (
		<div className="h-full w-full flex items-center justify-center">
			<div className="w-[375px] min-h-full shadow-lg flex flex-col p-6 bg-[#F7F8F9]">
				<h1 className="text-2xl font-bold text-gray-900 mb-2">
					SignIn to your <br /> PopX account
				</h1>
				<p className="text-gray-500 text-sm mb-6 font-semibold">
					Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit
				</p>

				<div className="mb-5">
					<TextField
						label="Email Address"
						placeholder="Enter email address"
						type="email"
						name="email"
						value={formData.email}
						onChange={(e) => handleChange("email", e.target.value)}
					/>
					{submitted && errors.email && (
						<p className="text-red-500 text-xs">{errors.email}</p>
					)}
				</div>
				<div className="mb-5">
					<TextField
						label="Password"
						placeholder="Enter password"
						type="password"
						name="password"
						value={formData.password}
						onChange={(e) => handleChange("password", e.target.value)}
					/>
					{submitted && errors.password && (
						<p className="text-red-500 text-xs">{errors.password}</p>
					)}
				</div>

				<Button
					label="Login"
					onClick={handleSubmit}
					className={
						Object.keys(validateFields()).length === 0
							? "text-white bg-[#6c25ff] cursor-pointer"
							: "text-white bg-[#CBCBCB] cursor-not-allowed"
					}
				/>
			</div>
		</div>
	);
}

export default Login;
import React, { useState } from "react";
import TextField from "../components/TextField";
import RadioGroup from "../components/RadioGroup";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function SignUp() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		fullName: "",
		phone: "",
		email: "",
		password: "",
		company: "",
		isAgency: "yes",
	});
	const [errors, setErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);

	const validateAllFields = () => {
		const newErrors = {};

		if (!formData.fullName.trim())
			newErrors.fullName = "Full Name is required.";
		if (!formData.company.trim())
			newErrors.company = "Company Name is required.";
		if (!/^\d{10}$/.test(formData.phone))
			newErrors.phone = "Enter a valid 10-digit phone number.";
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
		const validationErrors = validateAllFields();
		setErrors(validationErrors);

		if (Object.keys(validationErrors).length === 0) {
			navigate("/profile");
		}
	};

	return (
		<div className="h-full w-full flex items-center justify-center">
			<div className="w-[375px] min-h-full shadow-lg flex flex-col p-6 bg-[#F7F8F9]">
				<h1 className="text-2xl font-bold text-gray-900 mb-5">
					Create your <br /> PopX account
				</h1>
				<div className="flex flex-col flex-grow ">
					<div className="mb-5">
						<TextField
							label="Full Name"
							placeholder="Enter your name"
							type="text"
							value={formData.fullName}
							onChange={(e) => handleChange("fullName", e.target.value)}
							required={true}
						/>
						{submitted && errors.fullName && (
							<p className="text-red-500 text-xs">{errors.fullName}</p>
						)}
					</div>

					<div className="mb-5">
						<TextField
							label="Phone Number"
							placeholder="Enter your Phone Number"
							type="tel"
							value={formData.phone}
							onChange={(e) => handleChange("phone", e.target.value)}
							required={true}
						/>
						{submitted && errors.phone && (
							<p className="text-red-500 text-xs">{errors.phone}</p>
						)}
					</div>

					<div className="mb-5">
						<TextField
							label="Email Address"
							placeholder="Enter your Email"
							type="email"
							value={formData.email}
							onChange={(e) => handleChange("email", e.target.value)}
							required={true}
						/>
						{submitted && errors.email && (
							<p className="text-red-500 text-xs mt-1">{errors.email}</p>
						)}
					</div>

					<div className="mb-5">
						<TextField
							label="Password"
							placeholder="Enter your password"
							type="password"
							value={formData.password}
							onChange={(e) => handleChange("password", e.target.value)}
							required={true}
						/>
						{submitted && errors.password && (
							<p className="text-red-500 text-xs mt-1">{errors.password}</p>
						)}
					</div>

					<div className="mb-5">
						<TextField
							label="Company Name"
							placeholder="Enter your company name"
							type="text"
							value={formData.company}
							onChange={(e) => handleChange("company", e.target.value)}
						/>
						{submitted && errors.company && (
							<p className="text-red-500 text-xs mt-1">{errors.company}</p>
						)}
					</div>

					<div className="mb-5">
						<RadioGroup
							label="Are you an Agency?"
							options={[
								{ value: "yes", label: "Yes" },
								{ value: "no", label: "No" },
							]}
							value={formData.isAgency}
							onChange={(value) => handleChange("isAgency", value)}
							required
						/>
					</div>

					<div className="flex-grow" />

					<Button
						label="Create Account"
						onClick={handleSubmit}
						className={
							Object.keys(validateAllFields()).length === 0
								? "text-white bg-[#6C25FF] cursor-pointer"
								: "text-white bg-[#CBCBCB] cursor-not-allowed"
						}
					/>
				</div>
			</div>
		</div>
	);
}

export default SignUp;
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
		if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required.";
		if (!formData.company.trim()) newErrors.company = "Company Name is required.";
		if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Enter a valid 10-digit phone number.";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email address.";
		if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters.";
		return newErrors;
	};

	const handleChange = (field, value) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
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
		<div className="min-h-screen bg-[#F2F2F2] flex items-center justify-center">
			<div className="w-[360px] min-h-[720px] bg-gradient-to-br from-[#EDEDED] to-[#D7D7F9] rounded-[40px] shadow-2xl border-[14px] border-transparent flex items-center justify-center">
				<div className="w-full h-full bg-[#F7F8F9] rounded-[26px] overflow-auto p-6">
					<h1 className="text-2xl font-bold text-gray-900 mb-5">
						Create your <br /> PopX account
					</h1>
					<div className="flex flex-col">
						<div className="mb-5">
							<TextField
								label="Full Name"
								placeholder="Enter your name"
								type="text"
								value={formData.fullName}
								onChange={(e) => handleChange("fullName", e.target.value)}
								required
							/>
							{submitted && errors.fullName && (
								<p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
							)}
						</div>
						<div className="mb-5">
							<TextField
								label="Phone Number"
								placeholder="Enter your Phone Number"
								type="tel"
								value={formData.phone}
								onChange={(e) => handleChange("phone", e.target.value)}
								required
							/>
							{submitted && errors.phone && (
								<p className="text-red-500 text-xs mt-1">{errors.phone}</p>
							)}
						</div>
						<div className="mb-5">
							<TextField
								label="Email Address"
								placeholder="Enter your Email"
								type="email"
								value={formData.email}
								onChange={(e) => handleChange("email", e.target.value)}
								required
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
								required
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
								required
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
						<div className="mt-6">
							<Button
								label="Create Account"
								onClick={handleSubmit}
								className={`w-full py-3 rounded-full text-white font-semibold transition ${
									Object.keys(validateAllFields()).length === 0
										? "bg-[#6C25FF] hover:bg-[#5420cc] cursor-pointer"
										: "bg-[#CBCBCB] cursor-not-allowed"
								}`}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignUp;

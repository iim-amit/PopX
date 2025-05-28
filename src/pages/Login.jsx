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
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
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

  const isFormValid = Object.keys(validateFields()).length === 0;

  return (
    <div className="min-h-screen bg-[#F2F2F2] flex items-center justify-center">
      
     <div className="relative w-[360px] h-[720px] bg-bg-gradient-to-br from-[#EDEDED] to-[#D7D7F9] rounded-[40px]   shadow-2xl flex items-center justify-center">
       
        <div className="w-full h-full bg-gradient-to-br from-[#EDEDED] to-[#D7D7F9] rounded-[26px] overflow-hidden p-5">
          <div className="w-full h-full flex flex-col justify-center items-center animate-fade-in-down transition-all duration-500">
            <div className="w-full max-w-sm bg-white shadow-xl rounded-[32px] p-6 space-y-6">
              
              
              <div className="text-center">
                <h1 className="text-2xl font-bold text-[#1F1F1F]">
                  Sign in to your <span className="text-[#6C25FF]">PopX</span> account
                </h1>
                <p className="text-sm font-medium text-gray-500 mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

             
              <div className="bg-[#F7F8F9] p-6 rounded-2xl shadow-inner space-y-5">
                
                <div>
                  <TextField
                    label="Email Address"
                    placeholder="Enter email address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                  {submitted && errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

               
                <div>
                  <TextField
                    label="Password"
                    placeholder="Enter password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                  />
                  {submitted && errors.password && (
                    <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                  )}
                </div>
              </div>

             
              <Button
                label="Login"
                onClick={handleSubmit}
                className={`w-full py-4 rounded-full text-base font-semibold shadow-md transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-4 ${
                  isFormValid
                    ? "text-white bg-[#6C25FF] hover:bg-[#5420cc] focus:ring-[#cbb8ff]"
                    : "bg-[#CBCBCB] text-white cursor-not-allowed"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

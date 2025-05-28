import React from "react";
import { useNavigate } from "react-router-dom";
import { UserPlus, LogIn } from "lucide-react";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F2F2F2] flex items-center justify-center">
      {/* Android-style frame */}
      <div className="relative w-[360px] h-[720px] bg-bg-gradient-to-br from-[#EDEDED] to-[#D7D7F9] rounded-[40px]   shadow-2xl flex items-center justify-center">
       
        <div className="w-full h-full bg-gradient-to-br from-[#EDEDED] to-[#D7D7F9] rounded-[26px] overflow-hidden p-5">
          <div className="w-full h-full flex flex-col justify-center items-center animate-fade-in-down transition-all duration-500">
            <div className="w-full max-w-sm bg-white shadow-xl rounded-[32px] p-6 flex flex-col justify-center space-y-6">
              
              
              <div className="text-center">
                <h1 className="text-3xl font-extrabold text-[#1F1F1F] tracking-tight">
                  Let’s Get You Started
                </h1>
              </div>

              
              <div className="bg-gradient-to-br from-[#EDEDED] to-[#D7D7F9] p-6 rounded-2xl shadow-inner">
                <div className="text-center">
                  <p className="text-lg text-gray-700 font-semibold">Welcome Back</p>
                  <p className="text-sm font-medium text-gray-500">
                    PopX
                  </p>
                </div>
              </div>

           
              <div className="bg-[#F7F8F9] p-6 rounded-2xl shadow-inner space-y-4">
                <button
                  onClick={() => navigate("/signup")}
                  className="w-full py-4 rounded-full bg-[#6C25FF] text-white text-base font-semibold flex items-center justify-center gap-2 transition duration-300 shadow-md hover:bg-[#5420cc] focus:outline-none focus:ring-4 focus:ring-[#cbb8ff]"
                >
                  <UserPlus size={20} />
                  Create Account
                </button>

                <button
                  onClick={() => navigate("/login")}
                  className="w-full py-4 rounded-full bg-white text-[#6C25FF] border border-[#6C25FF] text-base font-semibold flex items-center justify-center gap-2 transition duration-300 shadow-md hover:bg-[#f0eaff] focus:outline-none focus:ring-4 focus:ring-[#e2d4ff]"
                >
                  <LogIn size={20} />
                  Already Registered? Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

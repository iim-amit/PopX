import React from "react";
import { User, Settings, HelpCircle, Bell, ChevronRight, DoorClosed, DoorClosedIcon, LucideDoorOpen, DoorOpen } from "lucide-react";
import marryDoeImage from "../assets/MaryDoe.jpg";

function Profile() {
  return (
    <div className="min-h-screen bg-[#F2F2F2] flex items-center justify-center px-4">
    <div className="relative w-[360px] h-[720px] bg-bg-gradient-to-br from-[#EDEDED] to-[#D7D7F9] rounded-[40px]   shadow-2xl flex items-center justify-center">
      <div className="w-full max-w-[360px] h-[720px] bg-white rounded-[40px] shadow-xl overflow-hidden flex flex-col">
        
        
        <div className="text-[#6C25FF] text-xl font-bold px-6 py-5 justify-center border-b border-gray-200">
          Settings
        </div>

        
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F2F2F7]">
          
        
          <div className="bg-white rounded-xl shadow-lg p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={marryDoeImage}
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium text-black">Marry Doe</p>
                <p className="text-xs text-gray-500">PopX</p>
              </div>
            </div>
            <div className="bg-gray-200 p-2 rounded-full">
              <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h18v18H3V3z" fill="none" />
                <path d="M16 11h2v2h-2v-2zm-6 0h2v2h-2v-2zm-6 0h2v2H4v-2z" />
              </svg>
            </div>
          </div>

         
          <div className="bg-white rounded-xl shadow divide-y">
            <SettingItem icon={<User size={20} />} label="General" />
            <SettingItem icon={<Settings size={20} />} label="Account" />
            <SettingItem icon={<HelpCircle size={20} />} label="Help" />
            <SettingItem icon={<Bell size={20} />} label="Alerts" />
          </div>
        </div>

        
        <div className="py-2 bg-white border-t border-gray-200 flex items-center justify-center">
          <div className="w-24 h-1 bg-gray-300 rounded-full"></div>
          <button
            onClick={() => console.log("Logging out...")}
            className="flex items-center justify-between px-4 py-3 text-red-600 hover:bg-red-50 w-full font-semibold transition-all">
              <div className="flex items-center gap-3">
                <DoorOpen size={20} />
                <span>Log out</span>
              </div>
          </button>

        </div>
      </div>
      </div>
    </div>
  
  );
}
<div className="py-2 bg-white border-t border-gray-200 flex items-center justify-center">
  <div className="w-24 h-1 bg-[#6C25FF]/40 rounded-full"></div>
</div>



function SettingItem({ icon, label }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 hover:bg-[#F0EFFF] cursor-pointer transition-all">
      <div className="flex items-center gap-3 text-[#3D2175]">
        <div className="text-[#6C25FF]">{icon}</div>
        <span className="text-sm font-semibold">{label}</span>
      </div>
      <ChevronRight size={16} className="text-gray-400" />
    </div>
    
  );


}

export default Profile;

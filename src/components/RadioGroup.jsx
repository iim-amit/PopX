import React from "react";

function RadioGroup({ label, options, value, onChange, required = false }) {
	return (
		<div className="mb-6 w-full">
			<label className="text-black text-sm">
				{label} {required && <span className="text-red-500">*</span>}
			</label>

			<div className="flex mt-2 space-x-6">
				{options.map((option) => (
					<div key={option.value} className="flex items-center">
						<input
							type="radio"
							id={`radio-${option.value}`}
							name={label.replace(/\s+/g, "-").toLowerCase()}
							value={option.value}
							checked={value === option.value}
							onChange={() => onChange(option.value)}
							className="hidden"
						/>
						<label
							htmlFor={`radio-${option.value}`}
							className="flex items-center justify-center cursor-pointer">
							<span
								className={`w-5 h-5 inline-block rounded-full border flex-shrink-0 mr-2 relative ${
									value === option.value
										? "border-[#6C25FF] bg-white"
										: "border-gray-400 bg-white"
								}`}>
								{value === option.value && (
									<span className="w-3 h-3 absolute inset-0 m-auto rounded-full bg-[#6C25FF]"></span>
								)}
							</span>
							{option.label}
						</label>
					</div>
				))}
			</div>
		</div>
	);
}

export default RadioGroup;
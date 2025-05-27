import React, { useState } from "react";

function TextField({
	label,
	placeholder,
	type = "text",
	value,
	onChange,
	name,
	required = false,
}) {
	const [focused, setfocused] = useState(false);

	const id = `field-${label.toLowerCase().replace(/\s+/g, "-")}`;

	const inputClasses = focused
		? "w-full px-3 py-2 border border-[#6C25FF] rounded-md shadow-sm focus:outline-none placeholder:text-xs"
		: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none placeholder:text-xs";

	return (
		<div className=" w-full relative">
			<div className="relative">
				<input
					id={id}
					type={type}
					name={name}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					onFocus={() => setfocused(true)}
					onBlur={() => setfocused(false)}
					className={inputClasses}
				/>
				<label
					htmlFor={id}
					className="absolute -top-2 left-2 text-xs px-1 bg-[#f8f8f8] text-[#6C25FF]">
					{label}
					{required && <span className="text-red-500">*</span>}
				</label>
			</div>
		</div>
	);
}

export default TextField;
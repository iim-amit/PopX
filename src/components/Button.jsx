import React from "react";

function Button({ label, onClick, className }) {
	return (
		<button
			onClick={onClick}
			className={`w-full py-2 rounded text-sm font-semibold ${className}`}>
			{label}
		</button>
	);
}

export default Button;
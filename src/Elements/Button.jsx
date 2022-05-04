import React from "react";

const Button = ({ border }) => {
	return <button>{border?.name?.common}</button>;
};

export default Button;

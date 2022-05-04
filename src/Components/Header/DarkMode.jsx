import React from 'react'

const DarkMode = ({ switchTheme, buttonText, buttonIcon }) => {
	return (
		<button className='theme__btn' onClick={switchTheme}>
			<span className='visually-hidden'>Change Theme</span>
			<span aria-hidden="true">{buttonIcon}</span>
			<span>{buttonText}</span>
		</button>
	);
};

export default DarkMode

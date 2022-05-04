import React from 'react'
import DarkMode from './DarkMode'

const Header = ({ switchTheme, buttonText, buttonIcon }) => {
	return (
		<header>
			<h2 role="heading">Where in the world?</h2>
			<DarkMode
				switchTheme={switchTheme}
				buttonText={buttonText}
				buttonIcon={buttonIcon}
			/>
		</header>
	);
};

export default Header
import React from 'react'
import { Link } from 'react-router-dom';
import DarkMode from './DarkMode'

const Header = ({ switchTheme, buttonText, buttonIcon }) => {
	return (
		<header>
			<Link
				to={{
					pathname: "/",
					search: "",
					state: {},
				}}
			>
				<h2 role='heading'>Where in the world?</h2>
			</Link>
			<DarkMode
				switchTheme={switchTheme}
				buttonText={buttonText}
				buttonIcon={buttonIcon}
			/>
		</header>
	);
};

export default Header
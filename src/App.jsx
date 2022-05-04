import React, { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import axios from "axios";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import CountryInfo from "./Pages/CountryInfo";
import NotFound from "./Pages/NotFound";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	const [countries, setCountries] = useState([]); //state for managing api data
	const [searchTerm, setSearchTerm] = useState(""); //state for managing search query
	const [searchedCountries, setSearchedCountries] = useState([]); //state for managing search aand filter results
	const [filterParam, setFilterParam] = useState("All"); //state for managing filter query
	const [isPending, setIsPending] = useState(true); //Loader state
	const [buttonText, setButtonText] = useState("Dark Mode"); //Button Text state
	const [buttonIcon, setButtonIcon] = useState(<IoMdMoon />); //Button Icon state


	//API Request with Axios and the try/catch method

	useEffect(() => {
		const fetchCountries = async () => {
			try {
				const response = await axios.get("https://restcountries.com/v3.1/all");
				setCountries(response.data);
				setSearchedCountries(response.data);
				setIsPending(false);
			} catch (err) {
				console.error(err);
			}
		};
		fetchCountries();
	}, []);


	//The handleSearchedCountries function handles the Search functionality of the app.
	//It takes in a "searchQuery" which is a string - filtering through searchedCountries and returning countries whose names include the search query.

	const handleSearchedCountries = (searchQuery) => {
		setSearchTerm(searchQuery);
		setSearchedCountries(
			countries.filter((country) =>
				country.name.common
					.toLowerCase()
					.includes(searchQuery.trim().toLowerCase())
			)
		);
	};


	//The handleFilteredCountries function handles the filter functionality of the app.
	//It takes in a "filterQuery" which represents all the regions - filtering through countries whose region are selected.

	const handleFilteredCountries = (filterQuery) => {
		setFilterParam(filterQuery);
		filterQuery === "All"
			? setSearchedCountries(countries)
			: setSearchedCountries(
					countries.filter((country) => country.region === filterQuery)
			  );
	};


	const defaultDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
	const [theme, setTheme] = useLocalStorage(
		"theme",
		defaultDark ? "dark" : "light"
	);

	const switchTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		const newText = buttonText === "Light Mode" ? "Dark Mode" : "Light Mode";
		setButtonText(newText);
		const newIcon = buttonText === "Light Mode" ? <IoMdMoon /> : <IoMdSunny />;
		setButtonIcon(newIcon);
	};


	return (
		<Router>
			<div className='App' data-theme={theme}>
				<Header
					switchTheme={switchTheme}
					buttonText={buttonText}
					buttonIcon={buttonIcon}
				/>
				<Routes>
					<Route
						exact
						path='/'
						element={
							<Home
								handleSearchedCountries={handleSearchedCountries}
								searchTerm={searchTerm}
								searchedCountries={searchedCountries}
								filterParam={filterParam}
								handleFilteredCountries={handleFilteredCountries}
								isPending={isPending}
							/>
						}
					></Route>
					<Route
						path='/country/:id'
						element={<CountryInfo searchedCountries={searchedCountries} />}
					/>
					<Route path='*' element={<NotFound />}></Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;

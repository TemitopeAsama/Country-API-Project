import React, { useState} from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Nav/Navbar";
import Loader from "../Elements/Loader";
import Card from "../Components/CardList/Card";

const Home = ({
	handleSearchedCountries,
	searchTerm,
	searchedCountries,
	filterParam,
	handleFilteredCountries,
	isPending
}) => {
	return (
		<main role="main">
			<Navbar
				handleSearchedCountries={handleSearchedCountries}
				searchTerm={searchTerm}
				filterParam={filterParam}
				handleFilteredCountries={handleFilteredCountries}
			/>
			{isPending && <Loader />}
			<div className='card__list'>
				{searchedCountries
					.sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
					.map((country) => {
						return (
							<Link
								key={country.flags.svg}
								to={{
									pathname: `/country/${country.name.common}`,
									search: "",
									state: {},
								}}
							>
								{" "}
								<Card countryData={country} />
							</Link>
						);
					})}
			</div>
		</main>
	);
};

export default Home;

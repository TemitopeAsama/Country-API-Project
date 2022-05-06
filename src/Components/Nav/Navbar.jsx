import React from "react";
import Search from "./Search";
import Filter from "./Filter";

const Navbar = ({
	handleFilteredCountries,
	handleSearchedCountries,
	searchTerm,
	filterParam,
}) => {

	return (
		<nav>
			<Search
				handleSearchedCountries={handleSearchedCountries}
				searchTerm={searchTerm}
			/>
			<Filter
				filterParam={filterParam}
				handleFilteredCountries={handleFilteredCountries}
			/>
		</nav>
	);
};

export default Navbar;

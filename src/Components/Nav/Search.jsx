import React from "react";

const Search = ({ searchTerm, handleSearchedCountries }) => {
	return (
		<div className='input__div'>
			<label htmlFor='Search__country' aria-hidden='false'></label>
			<input
				type='search'
				id='Search__country'
				placeholder='Search for a country...'
				aria-label='Search for a country'
				value={searchTerm}
				onChange={(event) => {
					handleSearchedCountries(event.target.value);
				}}
			/>
		</div>
	);
};

export default Search;

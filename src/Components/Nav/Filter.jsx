import React from 'react'

const Filter = ({ handleFilteredCountries }) => {
	return (
		<>
			<label htmlFor='filter' aria-hidden="false"></label>
			<select
				id='filter'
				className='region__filter'
				aria-label='Filter by region'
				onChange={(event) => {
					handleFilteredCountries(event.target.value);
				}}
			>
				<option value='All'>Filter By Region</option>
				<option value='Africa'>Africa</option>
				<option value='Americas'>America</option>
				<option value='Asia'>Asia</option>
				<option value='Europe'>Europe</option>
				<option value='Oceania'>Oceania</option>
				<option value='Antarctic'>Antarctic</option>
			</select>
		</>
	);
};

export default Filter
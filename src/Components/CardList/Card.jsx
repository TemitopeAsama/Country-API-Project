import React from 'react'

const Card = ({countryData: {altSpellings, flags, name, population, region, capital}}) => {
  return (
		<div className='card__item' aria-label={name.common}>
			<div className='flag'>
				<img
					src={flags.svg}
					alt={altSpellings[1]}
					aria-label={name.common}
				/>
			</div>

			<div className='details'>
				<h3 className='title'>{name.common}</h3>
				<h6 className='population'>
					Population: <span>{population.toLocaleString("en-US")}</span>
				</h6>
				<h6 className='region'>
					Region: <span>{region}</span>
				</h6>
				<h6 className='capital'>
					Capital: <span>{capital ? capital.join(", ") : "None"}</span>
				</h6>
			</div>
		</div>
	);
}

export default Card;
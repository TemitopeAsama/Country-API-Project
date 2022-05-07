import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import Button from "../Elements/Button";

// The "countryInfo" component takes the "searchedCountries" data from the App component
// as a prop. The "countryDetails" variable stores the data obtained from using the .find() method
// to access the details of the clicked CountryCard by match the details to the id.

// Within the return block, Optional chaining and Conditional Rendering is employed to locate the necessary details from the returned "countryDetails".

// Mapping the border countries (See line 100) into buttons is a little tricky, however. Specific countries (e.g Antartica) do not possess the border array
// and hence the conditional rendering is used to display the borderButtons for countries with the borders array.

// The .find() method is employed again to find the countries whose "cca3" match the "border" and display them as <Button />s.
//(check the Button component import above at line 5). As we want to see their "countryInfo",
//we wrap the <Button />s in Links to their CountryInfo Route.

const CountryInfo = ({ searchedCountries }) => {
	const { id } = useParams(); // The id parameter from our pre-defined Coun
	const navigate = useNavigate(); //The useNagivate hook here is used to create functionality for the "back__btn" button (see line 32).
	const countryDetails = searchedCountries.find(
		(country) => country.name.common === id
	);
	console.log(countryDetails);

	return (
		<div className='country__details'>
			<div className='back__btn'>
				<button onClick={() => navigate(-1)}>
					<span className="visually-hidden"> Go Back </span>
					<span>
						<MdOutlineKeyboardBackspace aria-hidden="true"/>
					</span>
					<span>Back</span>
				</button>
			</div>

			<div className='main__details'>
				<div className='country__flag'>
					<img
						src={countryDetails?.flags?.svg}
						alt={countryDetails?.name?.common}
					/>
				</div>

				<div className='country__text'>
					<div className='country__info'>
						<section className='location__info'>
							<h1 className='country__name'>{countryDetails?.name?.common}</h1>

							<h4 className='native__name'>
								Native Name:{" "}
								<span>
									{countryDetails?.name?.nativeName
										? Object.values(countryDetails?.name.nativeName)[0].common
										: countryDetails?.name?.common}
								</span>
							</h4>
							<h4 className='population'>
								Population:{" "}
								<span>
									{countryDetails?.population?.toLocaleString("en-US")}
								</span>
							</h4>
							<h4 className='region'>
								Region: <span>{countryDetails?.region}</span>
							</h4>
							<h4 className='sub__region'>
								Sub Region:{" "}
								<span>
									{countryDetails?.subregion
										? countryDetails?.subregion
										: "None"}
								</span>
							</h4>
							<h4 className='capital'>
								Capital:{" "}
								<span>
									{countryDetails?.capital
										? countryDetails?.capital.join(", ")
										: "None"}
								</span>
							</h4>
						</section>

						<section className='miscellanous__info'>
							<h4 className='top__level__domain'>
								Top Level Domain: <span>{countryDetails?.tld?.join(", ")}</span>
							</h4>
							<h4 className='currencies'>
								Currencies:{" "}
								<span>
									{countryDetails?.currencies
										? Object.values(countryDetails?.currencies)
												.map((curr) => curr.name)
												.join(", ")
										: "None"}
								</span>
							</h4>
							<h4 className='languages'>
								Languages:{" "}
								<span>
									{countryDetails?.languages
										? Object.values(countryDetails?.languages).join(", ")
										: "None"}
								</span>
							</h4>
						</section>
					</div>
					<section className='border__countries'>
						<span>Border countries: </span>
						<div className='border__btn'>
							{countryDetails?.borders
								? Object.values(countryDetails.borders).map((border) => {

										let borderDetails = searchedCountries.find(
											(borderCountry) => borderCountry.cca3 === border

										);
										console.log(borderDetails);
										return (
											<Link
												key={border}
												to={{
													pathname: `/country/${borderDetails?.name?.common}`,
													search: "",
													state: {},
												}}
											>
												<Button border={borderDetails} />
											</Link>
										);
								  })
								: "None"}
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default CountryInfo;

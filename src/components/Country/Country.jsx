import React from "react";

export default function Country({ country }) {
  console.log(country.currencies.currencies);

  return (
    <>
      <div className="countryCard">
        <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
        <h3>
          Name: <span className="countryName"> {country.name.common}</span>
        </h3>
        <p>Population: {country.population.population}</p>
        <p>Region: {country.region.region}</p>
      </div>
    </>
  );
}

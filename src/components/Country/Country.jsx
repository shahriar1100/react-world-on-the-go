import React from "react";

export default function Country({ country }) {
  console.log(country.currencies.currencies);

  return (
    <>
      <div className="countryCard mainCard">
        <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
        <h3 className="textBlack">
          Name: <span className="countryName"> {country.name.common}</span>
        </h3>
        <p className="textBlack">Population: {country.population.population}</p>
        <p className="textBlack">Region: {country.region.region}</p>
      </div>
    </>
  );
}

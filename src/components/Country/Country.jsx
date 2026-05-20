import React, { useState } from "react";

export default function Country({ country,handleVisitedCountries }) {
  
  const [visited, setVisited] = useState(false)
  
  const handleVisited = () => {
    // if(visited){
    //   setVisited(false)
    // }
    // else{
    //   setVisited(true)
    // }

    // setVisited(visited ? false : true)

    setVisited(!visited);
    handleVisitedCountries(country)
  };

  return (
    <>
      <div className={`countryCard mainCard ${visited && "countryVisited"}`}>
        <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
        <h3 className="textBlack">
          Name: <span className="countryName"> {country.name.common}</span>
        </h3>
        <p className="textBlack">Population: {country.population.population}</p>
        <p className="textBlack">Region: {country.region.region}</p>
        <p className="textBlack">
          Area: {country.area.area}{" "}
          {country.area.area > 300000 ? "Big Country" : "Small Country"}
        </p>
        <button className="btn" onClick={handleVisited}>
          {visited ? 'Visited':'Not Visited'}
        </button>
      </div>
    </>
  );
}

import React, { use, useState } from 'react'
import Country from '../Country/Country';

export default function Countries({countriesPrimise}) {

  const [visitedCountries, setVisitedCountries] = useState([])

  const handleVisitedCountries = (country)=>{
    console.log("visited count", country);
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries)
    
  }

  const countriesData = use(countriesPrimise)
  const countries = countriesData.countries
  
  return (
    <>
    <div className='mainCard'>
      <h1>In The Countries: {countries.length} </h1>
      <h3>Total Visited Countries: {visitedCountries.length} </h3>
      <ol>
        {
        visitedCountries.map(country=><li key={country.cca3.cca3} >{country.name.common}</li>)
      }
      </ol>
     <div className="flex">
       {
        countries.map(country => <Country 
          handleVisitedCountries={handleVisitedCountries}
          key={country.cca3.cca3} 
          country={country}></Country>)
      }
     </div>
    </div>
    </>
  )
}

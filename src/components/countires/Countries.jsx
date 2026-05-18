import React, { use } from 'react'
import Country from '../Country/Country';

export default function Countries({countriesPrimise}) {
  const countriesData = use(countriesPrimise)
  const countries = countriesData.countries
  
  return (
    <>
    <div className='mainCard'>
      <h1>In The Countries: {countries.length} </h1>
     <div className="flex">
       {
        countries.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
      }
     </div>
    </div>
    </>
  )
}

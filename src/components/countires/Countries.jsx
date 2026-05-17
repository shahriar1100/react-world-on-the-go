import React, { use } from 'react'

export default function Countries({countriesPrimise}) {
  const countriesData = use(countriesPrimise)
  const countries = countriesData.countries
  console.log(countries);
  
  return (
    <>
    <h1>In The Countries: {countries.length} </h1>
    </>
  )
}

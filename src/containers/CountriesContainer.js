import React, { useState, useEffect } from 'react';
import CountrySelect from '../components/CountrySelect';
import './CountriesContainer.css';
import CountryDetail from '../components/CountryDetail';
import WorldPopulation from '../components/WorldPopulation';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
    getCountries();
    }, [])
//==============================================================================================================
    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(resolve => resolve.json())
        .then(countries => setCountries(countries))
    }
//for finding total pop. 
    const totalPop = countries.reduce((total, country) => {
        return total + country.population
    },0)

    const updateCountrySelected = function(country) {
        setSelectedCountry(country)
    }


   
    return (
//used to show the general layout on the browser page, whilst component returns present the actual content to be put on browser
        <div className="main-container">
            <WorldPopulation totalPop={totalPop} />
            <label htmlFor="Countries-dropdown">Select Country:</label>
            <CountrySelect countries={countries} updateCountrySelected={updateCountrySelected} />
            {selectedCountry ? <CountryDetail country={selectedCountry} /> : null}
        </div>
    )
}

export default CountryContainer;

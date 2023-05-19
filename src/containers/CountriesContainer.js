import React, { useState, useEffect } from 'react';
import CountrySelect from '../components/CountrySelect';
import './CountriesContainer.css';
import CountryDetail from '../components/CountryDetail';

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

    const updateCountrySelected = function(country) {
        setSelectedCountry(country)
    }
    return (

        <div className="main-container">
            <label htmlFor="Countries-dropdown">Select Country </label>
            <CountrySelect countries={countries} updateCountrySelected={updateCountrySelected} />
            {selectedCountry ? <CountryDetail country={selectedCountry} /> : null}
        </div>
    )
}

export default CountryContainer;

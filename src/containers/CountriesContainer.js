import React, { useState, useEffect } from 'react';
import CountrySelect from '../components/CountrySelect';
import './CountriesContainer.css';
import CountryDetail from '../components/CountryDetail';
import WorldPopulation from '../components/WorldPopulation';
import FaveCountries from '../components/FaveCountries';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [favourites, setFavouriteCountry] = useState([])

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

    // const addFavourites = (newCountry) => {
    //     newCountry.id = Date.now()
    //     const newCountries = [...countries, newCountries]
    //     setCountries(newCountries)
    // }



    return (

//used to show the general layout on the browser page, whilst component returns the actual content to be put on browser

        <div className="main-container">
        <label htmlFor='total-pop'></label>
            <WorldPopulation totalPop={totalPop} />
            <br></br>
            <label htmlFor="Countries-dropdown"><b>Select Country:</b></label>
            <CountrySelect countries={countries} updateCountrySelected={updateCountrySelected} />
        
            {selectedCountry ? <CountryDetail country={selectedCountry} /> : null}
            <label htmlFor='Fave-country'><b> Select Favourite Countries:</b> </label>
            <CountrySelect countries={countries} updateCountrySelected={updateCountrySelected} />
            {selectedCountry ? <CountryDetail country={selectedCountry} /> : null}
            <br></br>
            <label htmlFor='Favourites List'><b>Your Favourite Countries: </b></label>
        </div>
    )
}

export default CountryContainer;

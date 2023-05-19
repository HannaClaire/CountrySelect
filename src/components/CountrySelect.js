import React from 'react';
import ListItem from './ListItem';

const CountrySelect = ({countries, updateCountrySelected}) => {

//below code connected to the return code (line 29)- puts the data of countries into countryOptions, which then gets populated into the dropdown box on browser
    const countryOptions = countries.map((country, cca2) => {
        return <option key={cca2} value={cca2}> {country.name.common} {country.flag}</option>

    })

//incase of errors
    if (countries.length === 0){
    return null
    }

    //separate function - handles the change of country (and its data)
    const handleOnChange = (event) => {
        const cca2 = event.target.value
        const country = countries[cca2]
        updateCountrySelected(country)

    }


    
    return (
        <div>
            <label htmlFor='CountryChange' className='country-change'></label>
            <select id = "selectCountry" onChange={handleOnChange}>
                {countryOptions}
            </select>
        </div>
    )
}

export default CountrySelect;

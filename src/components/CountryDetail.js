// import './CountryDetail.css';

const CountryDetail = ({ country }) => {

    return (
        <div className="country-detail">
            <label htmlFor="country-detail"> </label>
    The <b> capital </b> of {country.name.common} is {country.capital}.<b> Country population: </b>  {country.population} 
        </div>
    )
}

export default CountryDetail;
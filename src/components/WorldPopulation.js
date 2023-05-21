
const WorldPopulation = ({ totalPop }) => {
    return (
        <div className="total-pop">
        <label htmlFor="Total-pop">World Population: </label>

            {totalPop} 

        </div>
    )
}



export default WorldPopulation







// const CountryList = ({countries, onCountryClicked}) => {

//     const countryItems = countries.map((country, index) => {
//     return <WorldPopulation country={country}
//                         key={index} 
//                         onCountryClicked={onCountryClicked}/>
//     })

// return (
//     <div>
//     <ul>
//     {countryItems}
//     </ul>
// </div>
// )
// }

// if (countries.length === 0) {
//     return null
// }

// const WorldPopulation = () => {
//     const totalPop = countries.reduce((accumulator, currentCountry) => {
//         return accumulator + currentCountry
//     }, 0)
//     return (
//         <div className="total-pop">
//             <label htmlFor="total-pop"> </label>
//             Total population of all countries: {totalPop}
//         </div>
//     )
// }

const loadCountries =() =>{
    const url ='https://restcountries.com/v3.1/all';
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountries(data));
   

}
const displayCountries = countries => {
    console.log(countries[0])
    const countriesHTML = countries.map( desh =>getCountryHTML(desh))
    // console.log(countriesHTML[0])
    const container=document.getElementById('countries');
    container.innerHTML=countriesHTML.join('');
}

const getCountryHTML = ({name,flags,area,capital,region}) =>{
 
    return`
    <div class='country'>
    <h2>${name.common} </h2>
    <p>Area: ${area}</p>
    <p>Capital: ${capital}</p>
    <p>Region: ${region}</p>
    <img src='${flags.png}' >
    </div>
    `
}

//option 2
// const getCountryHTML = country =>{
//   const {name,flags}=country;
//     return`
//     <div class='country'>
//     <h2>${name.common} </h2>
//     <img src='${flags.png}' >
//     </div>
//     `
// }
//option 1
// const getCountryHTML = country =>{
  
//     return`
//     <div class='country'>
//     <h2>${country.name.common} </h2>
//     <img src='${country.flags.png}' >
//     </div>
//     `
// }

loadCountries()
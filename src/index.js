const button = document.querySelector("#buttonSearch");
const inputSearch = document.querySelector("#search");
const spanNameCity = document.querySelector("#nameCity");
const spanFlagCountry = document.querySelector("flagCountry");
const spanTemp = document.querySelector("#temp");
const spanTempMax = document.querySelector("#tempMax");
const spanTempMin = document.querySelector("#tempMin");
const spanHumidity = document.querySelector("#humidity");
const spanimgDescription = document.querySelector("#img-descripition");
const spanDescription = document.querySelector("#descripition");


const apiweatherKey = "8fba19d8ddc947edbbe37b443a5bda45";
// API OpenWeather (climate)
const getInformation = async (city) => {
  const apiWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiweatherKey}&lang=pt_br`;

  let response = await fetch(apiWeather);
  let dataWeather = await response.json();
  return dataWeather;
};

// API REST Countries (Informations of countries)
const getFlagCountry = async (country) => {
	
  const apiCountry = `https://flagsapi.com/${country}/flat/64.png`;

  let response = await fetch(apiCountry);
  let dataCountry = await response.json();
  console.log(dataCountry)
  return dataCountry;
};

button.addEventListener("click", async (ev) => {
  ev.preventDefault;
  const city = inputSearch.value;
  const responseWeather = await getInformation(city);
  // const  responseCountry = await getFlagCountry("BR")
  console.log(responseWeather);

  const h3NameCity = document.createElement("h3");
  h3NameCity.innerText = `${responseWeather.name}`;

  // const imgFlagCountry = document.createElement("img");
  // imgFlagCountry.src = `${responseCountry}`

  const pTemp = document.createElement("p");
  pTemp.innerText = `Temperatura: ${Math.round(responseWeather.main.temp)}`;

  const pTempMax = document.createElement("p");
  pTempMax.innerText = `Máxima:${Math.round(responseWeather.main.temp_max)}`;

  const pTempMin = document.createElement("p");
  pTempMin.innerText = `Mínima:${Math.round(responseWeather.main.temp_min)}`;

  const pHumidity = document.createElement("p");
  pHumidity.innerText = `Humidade:${Math.round(responseWeather.main.humidity)}%`;

  const imgDescription = document.createElement("img");
  imgDescription.src = `https://openweathermap.org/img/wn/${responseWeather.weather[0].icon}.png`;

  const pDescription = document.createElement("p");
  pDescription.innerText = `${responseWeather.weather[0].description}`;

  // spanNameCountry

  // spanTContinent

  // spanPopulation

  // spanCapital

  spanNameCity.appendChild(h3NameCity);
//   spanFlagCountry.appendChild();
  spanTemp.appendChild(pTemp);
  spanTempMax.appendChild(pTempMax);
  spanTempMin.appendChild(pTempMin);
  spanHumidity.appendChild(pHumidity);
  spanimgDescription.appendChild(imgDescription);
  spanDescription.appendChild(pDescription);
//   spanNameCountry.appendChild();
//   spanTContinent.appendChild();
//   spanPopulation.appendChild();
//   spanCapital.appendChild();
});

// informações para extrair da chamada api rest countries
// [0].flags.svg (bandeira)
// [0].capital
// [0].continents[0] (continente)
// [0].population (população)

// informações para extrair da chamada api openweather
// .name(nome da cidade)
// .main.temp (temperatura)
// .main.humidity(humidade)
// .main.temp_max (temperatura máxima)
// .main.temp_min (temperatura minima)
// .sys.country (país da cidade)
// .weather[0].description (como está o céu)
// .weather[0].icon (imagem de como está o céu)

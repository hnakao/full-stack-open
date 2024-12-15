import { useEffect, useState } from "react";
import "./App.css";
import { findCountries } from "./services/countries";
import { getWeather } from "./services/weather";
import Weather from "./components/Weather";

function App() {
  // Testing the API found that search by name always return an object, not an array
  // const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (country) {
      const weather = async () => {
        const result = await getWeather(country.capital[0]);
        setWeather(result);
      };
      weather();
    }
  }, [country]);

  const handleSearch = async (e) => {
    const search = e.target.value;

    const result = await findCountries(search);
    console.log("🚀 ~ handleSearch ~ result:", result);
    setCountry(result);
  };

  const rowStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  };

  console.log("aa", import.meta.env.VITE_OPEN_WEATHER_API_KEY);

  const labelStyle = {
    marginRight: "10px",
  };

  return (
    <>
      <div style={rowStyle}>
        <label style={labelStyle} htmlFor="search">
          Find a country:
        </label>
        <input id="search" type="text" onChange={handleSearch} />
      </div>

      {country && (
        <>
          <div>
            <h3>{country.name.common}</h3>

            <div style={rowStyle}>
              <label style={labelStyle}>Capital:</label>
              <p>{country.capital[0]}</p>
            </div>

            <div style={rowStyle}>
              <label style={labelStyle}>Area:</label>
              <p>{country.area}</p>
            </div>

            <h4>Languages</h4>
            {Object.values(country.languages).map((language) => (
              <p key={language}>{language}</p>
            ))}

            <img
              src={country.flags.svg}
              alt={country.name.common}
              height={200}
              width={200}
            />
          </div>

          {weather && (
            <Weather
              city={country.capital[0]}
              temperature={weather.main.temp}
              iconCode={weather.weather[0].icon}
              rowStyle={rowStyle}
              labelStyle={labelStyle}
              wind={weather.wind.speed}
            />
          )}
        </>
      )}
    </>
  );
}

export default App;

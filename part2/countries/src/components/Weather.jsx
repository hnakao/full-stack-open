const Weather = ({ city, temperature, rowStyle, labelStyle, iconCode, wind }) => {
  return (
    <div>
      <h2>Weather in {city}</h2>

      <div>
        <div style={rowStyle}>
          <label style={labelStyle}>Temperature:</label>
          <p>{temperature} Celsius</p>
        </div>

        <img
          src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
          alt="icon"
        />

        <div style={rowStyle}>
          <label style={labelStyle}>Wind:</label>
          <p>{wind} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;

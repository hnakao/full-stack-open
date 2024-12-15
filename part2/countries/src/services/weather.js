import axios from "axios";

const getWeather = async (city) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
      import.meta.env.VITE_OPEN_WEATHER_API_KEY
    }&units=metric`
  );
  return response.data;
};

export { getWeather };

import axios from "axios";

const findCountries = async (search) => {
  const response = await axios.get(
    `https://studies.cs.helsinki.fi/restcountries/api/name/${search}`
  );
  return response.data;
};

export { findCountries };

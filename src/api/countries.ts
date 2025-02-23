import axios from "axios";
import { Country } from "../types/Country";

export const getCountries = async (): Promise<Country[]> => {
  const response = await axios.get(`https://restcountries.com/v3.1/all`);
  // console.log(response.data);
  return response.data;
};

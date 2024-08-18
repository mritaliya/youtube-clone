import axios from "axios";
const API_KEY = import.meta.env.vite_youtube_api_key;
const URL = "https://youtube138.p.rapidapi.com";
const options = {
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
};

export const fetchData = async (url) => {
  try {
    const { data } = axios.get(`${URL}/${url}`, options);
    return data;
  } catch (error) {
    console.log("error fetching data:",error);
    throw error
    
  }
};

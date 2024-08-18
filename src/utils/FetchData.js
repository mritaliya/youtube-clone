import axios from "axios";

const Api_key=import.meta.env.vite_youtube_api_key;
const Base_url="https://youtube-v31.p.rapidapi.com"

const options = {
	
	headers: {
		'x-rapidapi-key': Api_key,
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

export const fetchData=async(url)=>{
    try {
        const {data}=await axios.get(`${Base_url}/${url}`,options)
    } catch (error) {
        console.error("error fetching api data:",error)
    }
}
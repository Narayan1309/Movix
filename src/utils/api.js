import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjQ0NDU3NzVhNjg3OGZkZTk0OWY2ZmU4YjljNjkxMiIsIm5iZiI6MTcyMDI2OTIzNy4yOTgxNTcsInN1YiI6IjY2ODkyYjI5M2EyNjg5NzQ0ZWEzOTQ4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xmJJrwvQmr0R4bPRM80v1dg2bXsd0OlaiEicrHtJEto";

const headers = {
    Authorization: "bearer " +TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url , {
            headers,
            params,
        });
        console.log(BASE_URL+url);
        
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};

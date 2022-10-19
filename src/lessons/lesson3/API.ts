import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com/?apikey=5a560d46',
};
//const key = '5a­560d46';
const axiosInstance = axios.create(configOMB);

export const API = {
    searchFilmsByTitle: (title: string) => {
        axios
            .get(`http://www.omdbapi.com/?apikey=5a560d46&t=${title}`)
            .then((response) => response.data
            )
    },
    searchFilmsByType: (title: string, type: string) => {
        axiosInstance
            .get(`&${title}&${type}`, {})
            .then(response => response.data)
    }
};
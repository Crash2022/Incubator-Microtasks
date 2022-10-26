import axios from 'axios';

// Please append it to all of your API https://www.omdbapi.com/?i=tt3796198&apikey=5a560d46

const configOMB = {
    baseURL: 'http://www.omdbapi.com'
};

const key = '5a560d46';
const axiosInstance = axios.create(configOMB);

export const API = {
    searchFilmsByTitle: (title: string) => {
         return axiosInstance
            .get(`?apikey=${key}&t=${title}`)
            .then(response => response.data)
    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance
            .get(`?apikey=${key}&t=${title}&type=${type}`, {})
            //.then(response => response.data)
    }
};
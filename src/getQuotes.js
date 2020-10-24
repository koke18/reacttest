import axios from 'axios';

const url = 'https://andruxnet-random-famous-quotes.p.rapidapi.com';

const config = {
    headers: {  "X-Mashape-Key" : "362071c61fmsh5099fd312984da7p1ba7e0jsn947d3285b1df" }, 
    transformResponse: response => response,

}

export default async () => {
    const { data } = await axios.get(url, config); 

    return data; 
}
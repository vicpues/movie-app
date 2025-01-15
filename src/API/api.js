const API_KEY = `3383bcd2696682b35f848f85a1f62690`;
const moveID = 550;

const getData = async () =>{
    const response = await fetch(`https://api.themoviedb.org/3/movie/${moveID}?api_key=${API_KEY}`);
    const data = await response.json();
    console.log(data);
};
getData()
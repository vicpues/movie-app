const API_KEY = `3383bcd2696682b35f848f85a1f62690`;

const getData = async (name) =>{
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${name}&language=en-US&page=1&api_key=${API_KEY}`);
    const data = await response.json();
    console.log(data.results)
    return data.results
};
const fetchMovies = async (name) => {
    const response = await fetch(`https://api.themoviedb.org/3/${name}/movie/week?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}
export { getData, fetchMovies };
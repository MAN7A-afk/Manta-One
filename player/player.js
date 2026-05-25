const API_KEY = "8c5359fb9f2b0c63381a972d9ccb880e";

const movieId = 157336;

async function fetchMovie(){

    // FETCH MOVIE INFO
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
    );

    const movie = await response.json();




    // MOVIE INFO N STUFF
    document.getElementById("movie").innerHTML = `
        <img 
            src="https://image.tmdb.org/t/p/original${movie.backdrop_path}"
        >

        <h1>${movie.title}</h1>

        <p>${movie.overview}</p>

        <a 
            href="https://streamex.sh/watch/movie/157336?server=streamex"
            target="_blank"
        >
            <button>
                Watch Officially
            </button>
        </a>

    `;

}

fetchMovie();




// BACK BUTTON
const backBtn = document.querySelector("#backBtn");

backBtn.addEventListener("click", () => {

    window.location.href = "index.html";

});
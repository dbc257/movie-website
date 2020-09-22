const moviesContainer = document.querySelector("#movie-container");
// const button = document.getElementById("search-button");

document.addEventListener("DOMContentLoaded", function () {
  let myForm = document.getElementById("search-form");
  myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const searchString = document.getElementById("search-bar").value;
    const urlEncodedSearchString = encodeURIComponent(searchString);
    let url = `http://www.omdbapi.com/?apikey=59354c85&s=${urlEncodedSearchString}`;
    axios.get(url).then((response) => {
      // console.log(response.data);
      // moviesContainer.innerHTML = renderMovies(response.data.Search);
      // renderMovies(response.data.Search);
      movieD = response.data.Search;
      console.log(movieD);
      var movieHTML = renderMovies(movieD);
      moviesContainer.innerHTML = movieHTML;
      // renderMovies(response.data.Search);
    });

    // moviesContainer.innerHTML = renderMovies(response.data.Search);
    // renderMovies(response.data.Search);
  });
});

function renderMovies(moviesArray) {
  const movieHtmlArray = moviesArray.map((currentMovie) => {
    return `<div class="col-6 col-md-4 results">
        <div class="card text-white text-center bg-dark mb-3" style="max-width: 18rem">
        <div class="card-body">
        <h5 class="card-title">${currentMovie.Title} - ${currentMovie.Year}</h5>
        <img src="${currentMovie.Poster}" class="card-img-top" alt="..." />
        <p></p>
        <div>
        <button onclick="saveToWatchList('${currentMovie.imdbID}')" class="btn btn-primary">Add</button>
        </div>
        </div>
        </div>
        </div>`;
  });
  return movieHtmlArray.join("");
}
function saveToWatchList(imdbID) {
  console.log(imdbID);
  // movieData = response.data.Search;
  console.log(movieD);
  let movie = movieD.find((currentMovie) => {
    return currentMovie.imdbID == imdbID;
  });
  let watchlistJSON = localStorage.getItem("watchlist");
  let watchlist = JSON.parse(watchlistJSON);
  if (watchlist == null) {
    watchlist = [];
  }
  watchlist.push(movie);
  watchlistJSON = JSON.stringify(watchlist);
  localStorage.setItem("watchlist", watchlistJSON);
  console.log(watchlist);
}

// fetch("./data.js")
//   .then(function (response) {
//     return response.text();
//   })
//   .then(function (text) {
//     const title = document.createElement("h1");
//     title.textContent = text;
//     document.body.appendChild(title);
//   });

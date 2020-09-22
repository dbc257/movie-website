var myForm = document.getElementById("search-form");
var addButton = document.getElementById("addButton");
var moviesList = document.getElementById("movie-container");
var searchButton = document.getElementById("searchButton");

function renderMovies(moviesArray) {
  const movieHtmlArray = moviesArray.map((currentMovie) => {
    return `<div class="col-6 col-md-4 results">
              <div class="card text-white text-center bg-dark mb-3" style="max-width: 18rem">
              <div class="card-body">
              <h5 class="card-title">${currentMovie.Title} - ${currentMovie.Year}</h5>
              <img src="${currentMovie.Poster}" class="card-img-top" alt="..." />
              <p></p>
              <div>
              <button onclick="saveToWatchList('${currentMovie.imdbID}')" class="btn btn-primary" id="addButton">Add</button>
              </div>
              </div>
              </div>
              </div>`;
  });
  return movieHtmlArray.join("");
}

function saveToWatchList(imdbID) {
  console.log(imdbID);
  let movie = movieData.find((currentMovie) => {
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
document.addEventListener("DOMContentLoaded", function () {
  // code here will execute after the document is loaded
  saveToWatchList();
  searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    moviesList.innerHTML = renderMovies(movieData);
  });
});

// myForm.addEventListener("submit", function (e) {
//   // event listener code goes here
//   e.preventDefault();
//   var moviesList = document.querySelector("#movie-container");
// }

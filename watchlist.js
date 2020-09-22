const moviesContainerWatchlist = document.querySelector(
  "#movie-container-watchlist"
);

document.addEventListener("DOMContentLoaded", function (e) {
  // code here will execute after the document is loaded
  e.preventDefault();
  let watchlistJSON = localStorage.getItem("watchlist");
  let watchlist = JSON.parse(watchlistJSON);
  console.log(watchlist);

  function renderMovies(watchlistArray) {
    const movieHtmlArray = watchlistArray.map((currentMovie) => {
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
  moviesContainerWatchlist.innerHTML = renderMovies(watchlist);
  renderMovies(watchlist);
});

//   function renderMovies(moviesArray) {
//     const movieHtmlArray = moviesArray.map((currentMovie) => {
//       return `<div class="col-6 col-md-4 results">
//                     <div class="card text-white text-center bg-dark mb-3" style="max-width: 18rem">
//                         <div class="card-body">
//                             <h5 class="card-title">${currentMovie.Title} - ${currentMovie.Year}</h5>
//                             <img src="${currentMovie.Poster}" class="card-img-top" alt="..." />
//                             <p></p>
//                             <div>
//                                 <button class="btn btn-primary">Add</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>`;
//     });
//     return movieHtmlArray.join("");
//   }
//   moviesList.innerHTML = renderMovies(movieData);
//   renderMovies(movieData);

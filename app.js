

//---------------------------------------------------------------------------------------------------------


function fetchMovies() {
  const movieList = document.getElementById('movieList'); // Make sure this exists in your HTML
  movies.forEach(movie => {
    const movieCard = `
      <div class="col-md-4">
        <div class="card mb-4">
          <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">${movie.description}</p>
            <a href="${movie.url}" class="btn btn-primary" target="_blank">More Info</a>
          </div>
        </div>
      </div>
    `;
    movieList.innerHTML += movieCard;
  });
}

document.getElementById('fetchMovies').addEventListener('click', fetchMovies);

// Populate dropdown menu with all the available genres
const populateGenreDropdown = (genres) => {
    const select = document.getElementById('genres')

    for (const genre of genres) {
        // Setting properties of current option element/tag
        let option = document.createElement("option");
        option.value = genre.id;
        option.text = genre.name;
        select.appendChild(option);
    }
};

// Returns the current genre selection from the dropdown menu
const getSelectedGenre = () => {
    const selectedGenre = document.getElementById('genres').value;
    return selectedGenre;
};

// Displays the like and dislike buttons on the page
const showBtns = () => {
    const btnDiv = document.getElementById('likeOrDislikeBtns');
    btnDiv.removeAttribute('hidden');
};

// Clear the current movie from the screen
const clearCurrentMovie = () => {
    const moviePosterDiv = document.getElementById('moviePoster');
    const movieTextDiv = document.getElementById('movieText');
    moviePosterDiv.innerHTML = '';
    movieTextDiv.innerHTML = '';
}

// After liking a movie, clears the current movie from the screen and gets another random movie
const likeMovie = () => {
    clearCurrentMovie();
    showRandomMovie();
};

// After disliking a movie, clears the current movie from the screen and gets another random movie
const dislikeMovie = () => {
    clearCurrentMovie();
    showRandomMovie();
};

const createLikedMoviePoster = (posterPath) => {
    const moviePosterUrl = `https://image.tmdb.org/t/p/original/${posterPath}`;

    const posterImg = document.createElement('img');
    posterImg.setAttribute('src', moviePosterUrl);
    posterImg.setAttribute('id', 'likedMoviePoster');
  
    return posterImg;
};

const createLikedMovieTitle = (title) => {
    const titleHeader = document.createElement('h2');
    titleHeader.setAttribute('id', 'likedMovieTitle');
    titleHeader.innerHTML = title;
  
    return titleHeader;
};

// Create HTML for movie poster
const createMoviePoster = (posterPath) => {
    const moviePosterUrl = `https://image.tmdb.org/t/p/original/${posterPath}`;

    const posterImg = document.createElement('img');
    posterImg.setAttribute('src', moviePosterUrl);
    posterImg.setAttribute('id', 'moviePoster');
  
    return posterImg;
};

// Create HTML for movie title
const createMovieTitle = (title) => {
    const titleHeader = document.createElement('h1');
    titleHeader.setAttribute('id', 'movieTitle');
    titleHeader.innerHTML = title;
  
    return titleHeader;
};

// Create HTML for movie overview
const createMovieOverview = (overview) => {
    const overviewParagraph = document.createElement('p');
    overviewParagraph.setAttribute('id', 'movieOverview');
    overviewParagraph.innerHTML = overview;
  
    return overviewParagraph;
};

// Create HTML for movie release date
const createMovieReleaseDate = (releaseDateText) => {
    const releaseDate = document.createElement('h2');
    releaseDate.setAttribute('id', 'movieReleaseDate');
    releaseDate.innerHTML = releaseDateText;
  
    return releaseDate;
};


// Returns a random movie from the first page of movies
const getRandomMovie = (movies) => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[randomIndex];
    return randomMovie;
};

// Uses the DOM to create HTML to display the movie
const displayMovie = (movieInfo) => {
    const moviePosterDiv = document.getElementById('moviePoster');
    const movieTextDiv = document.getElementById('movieText');
    const likeBtn = document.getElementById('likeBtn');
    const dislikeBtn = document.getElementById('dislikeBtn');
  
    // Create HTML content containing movie info
    const moviePoster = createMoviePoster(movieInfo.poster_path);
    const titleHeader = createMovieTitle(movieInfo.title);
    const overviewText = createMovieOverview(movieInfo.overview);
    const releaseDateText = createMovieReleaseDate(movieInfo.release_date);
  
    // Append title, poster, and overview to page
    moviePosterDiv.appendChild(moviePoster);
    movieTextDiv.appendChild(titleHeader);
    movieTextDiv.appendChild(overviewText);
    movieTextDiv.appendChild(releaseDateText);
  
    showBtns();
    
    likeBtn.addEventListener('click', () => {
        const newLikedMovieDiv = document.createElement('div');
        newLikedMovieDiv.setAttribute('id', 'liked-movie');
        const likedMoviePoster = createLikedMoviePoster(movieInfo.poster_path);
        const likedMovieTitle = createLikedMovieTitle(movieInfo.title);
        newLikedMovieDiv.appendChild(likedMoviePoster);
        newLikedMovieDiv.appendChild(likedMovieTitle);

        const likedMovieContainer = document.getElementById('liked-movies-container');
        likedMovieContainer.appendChild(newLikedMovieDiv);
    });
    
    
    likeBtn.onclick = likeMovie;
    dislikeBtn.onclick = dislikeMovie;
};
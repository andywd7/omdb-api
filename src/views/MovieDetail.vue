<template>
  <div>
    <h1 class="mb-4">
      Movie Summary
    </h1>
    <div
      class="card mb-3"
    >
      <div class="d-flex">
        <img
          :src="movie.Poster"
          class="img-fluid"
          :alt="movie.Title"
        >
        <div class="flex-grow-1">
          <div class="card-body">
            <h5 class="card-title">
              {{ movie.Title }}
            </h5>
            <ul class="card-text">
              <li>Languages : {{ movie.Language }}</li>
              <li>Rated : {{ movie.Rated }}</li>
              <li>Year : {{ movie.Year }}</li>
              <li>Released : {{ movie.Released }}</li>
              <li>Actors : {{ movie.Actors }}</li>
              <li>Country : {{ movie.Country }}</li>
              <li>Genre : {{ movie.Genre }}</li>
              <li>IMDB Rating : {{ movie.imdbRating }}</li>
            </ul>
            <h6>Plot</h6>
            <p class="card-text">
              {{ movie.Plot }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MovieDetail',
  props: {
    movieID: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      movie: []
    }
  },
  created () {
    axios
      .get(`https://www.omdbapi.com/?i=${this.movieID}&apikey=d46d895c`)
      .then(res => {
        this.movie = res.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

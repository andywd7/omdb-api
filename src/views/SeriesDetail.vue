<template>
  <div>
    <h1 class="mb-4">
      Series Summary
    </h1>
    <div
      class="card mb-3"
    >
      <div class="d-flex">
        <div>
          <img
            :src="movie.Poster"
            class="img-fluid"
            :alt="movie.Title"
          >
        </div>
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
            <h6>{{ movie.totalSeasons }} Seasons</h6>
            <div
              v-for="(item, key) in totalSeasons"
              :key="key"
            >
              <series-seasons
                :imdb="movie.imdbID"
                :seasons="item"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import SeriesSeasons from '../components/SeriesSeasons'

export default {
  name: 'SeriesDetail',
  components: {
    SeriesSeasons
  },
  props: {
    seriesID: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      movie: [],
      totalSeasons: 0
    }
  },
  created () {
    axios
      .get(`https://www.omdbapi.com/?i=${this.seriesID}&apikey=d46d895c`)
      .then(res => {
        this.movie = res.data
        this.totalSeasons = Number(res.data.totalSeasons)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.movie,
.summary {
  padding-top: 50px !important;
}

@media (max-width: 568px) {
  .movie,
  .summary {
    padding-top: 10px !important;
  }
}
</style>

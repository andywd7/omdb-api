<template>
  <div>
    <div class="row mb-4">
      <div class="col-12">
        <search
          @search="getMovies"
        />
        <div
          v-if="errors"
          class="row"
        >
          <div class="col-12">
            <p
              class="text-danger"
            >
              No movies found
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="row"
    >
      <div class="col-md-9">
        <div class="row">
          <movie-list-item
            v-for="(movie, i) in movies"
            :key="i"
            class="col-md-3 col-sm-6 col-xs-12"
            :data="movie"
          />
        </div>
      </div>
      <div class="col-md-3">
        <h3>Filter</h3>
        <app-filter
          v-model="type"
          :options="filters"
          @filter-type="filterType"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import AppFilter from '../components/Filter'
import MovieListItem from '@/components/MovieListItem'
import Search from '@/components/Search'

export default {
  name: 'Home',
  components: {
    AppFilter,
    MovieListItem,
    Search
  },
  data () {
    return {
      movies: false,
      errors: false,
      type: '',
      title: '',
      filters: [
        { value: '', name: 'All' },
        { value: 'movie', name: 'Movie' },
        { value: 'series', name: 'Series' }
      ]
    }
  },
  created () {
    this.getMovies(this.$route.params.title)
  },
  methods: {
    filterType (type) {
      this.type = type
      this.getMovies(this.title, this.type)
    },
    getMovies (title, type) {
      this.title = title
      axios
        .get(`https://www.omdbapi.com/?s=${this.title}&type=${this.type}&apikey=d46d895c`)
        .then(res => {
          this.movies = res.data.Search
          this.errors = res.data.Error
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

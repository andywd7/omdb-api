<template>
  <div class="row justify-content-center">
    <div class="col-md-4">
      <div class="card">
        <div class="card-body">
          <h1 class="mb-5">
            Thousands of titles to search
          </h1>
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
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Search from '@/components/Search'

export default {
  name: 'Home',
  components: {
    Search
  },
  data () {
    return {
      movies: [],
      errors: false,
      title: ''
    }
  },
  methods: {
    getMovies (title) {
      this.title = title
      axios
        .get(`https://www.omdbapi.com/?s=${this.title}&apikey=d46d895c`)
        .then(res => {
          this.movies = res.data.Search
          this.errors = res.data.Error
        })
        .catch(error => {
          console.log(error)
        })
      this.$router.push({ name: 'results', params: { title: title } })
    }
  }
}
</script>

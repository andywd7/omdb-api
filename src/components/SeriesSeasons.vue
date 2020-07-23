<template>
  <div>
    <div
      :id="'accordion' + id"
      class="accordion"
    >
      <div class="card">
        <div
          :id="'heading' + id"
          class="card-header"
        >
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left"
              type="button"
              data-toggle="collapse"
              :data-target="'#' + id"
              aria-expanded="true"
              aria-controls="id"
            >
              Season {{ series.Season }}
            </button>
          </h2>
        </div>

        <div
          :id="id"
          class="collapse"
          :aria-labelledby="'heading' + id"
          :data-parent="'#accordion' + id"
        >
          <div class="card-body">
            <ol>
              <li
                v-for="(esp, i) in series.Episodes"
                :key="i"
              >
                {{ esp.Title }}
                {{ esp.Released }}
                {{ esp.imdbRating }}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SeriesSeasons',
  props: {
    seasons: {
      type: Number,
      default: 0
    },
    imdb: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      series: []
    }
  },
  computed: {
    id () {
      return 'season' + this.series.Season
    }
  },
  created () {
    axios
      .get(`https://www.omdbapi.com/?i=${this.imdb}&Season=${this.seasons}&apikey=d46d895c`)
      .then(res => {
        this.series = res.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

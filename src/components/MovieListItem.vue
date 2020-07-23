<template>
  <div
    class="card card-result mb-3"
    @click="viewMovie(data.imdbID, data.Type)"
  >
    <img
      v-if="data.Poster != 'N/A'"
      class="card-img-top"
      :src="data.Poster"
    >
    <img
      v-if="data.Poster == 'N/A'"
      class="card-img-top"
      src="../assets/logo.png"
    >
    <div class="card-body">
      <h5 class="card-title mb-1">
        {{ data.Title }}
      </h5>
      <div>
        <span
          class="badge badge-secondary"
          :class="data.Type"
        >
          {{ data.Type }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieListItem',
  props: {
    data: {
      type: Object,
      default: () => []
    }
  },
  methods: {
    viewMovie (id, type) {
      type === 'movie'
        ? this.$router.push({
          name: 'movie-detail',
          params: { movieID: id, type: type }
        })
        : this.$router.push({
          name: 'series-detail',
          params: { seriesID: id, type: type }
        })
    }
  }
}
</script>

<style lang="scss">
.card-result:hover {
  cursor: pointer;
}
</style>

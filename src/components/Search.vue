<template>
  <form
    id="search"
    novalidate
    :class="{ 'was-validated': validated }"
  >
    <div class="input-group">
      <input
        v-model="title"
        type="text"
        class="form-control"
        minlength="3"
        required
        placeholder="Type name of movie..."
      >
      <span class="input-group-append">
        <button
          class="btn btn-primary form-control"
          type="button"
          @click="search"
        >
          <i class="fas fa-search" /> Search
        </button>
      </span>
    </div>
    <div
      v-if="validated"
      class="invalid-feedback"
      :class="{ 'd-block': validated }"
    >
      {{ error }}
    </div>
  </form>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      title: '',
      error: ''
    }
  },
  computed: {
    validated () {
      return this.error && this.title.length < 3
    }
  },
  methods: {
    search (e) {
      if (this.title.length >= 3) {
        this.$emit('search', this.title)
      } else if (this.title.length > 0) {
        this.error = 'Please enter at least 3 characters'
      } else {
        this.error = 'Please enter a movie'
      }
    }
  }
}
</script>

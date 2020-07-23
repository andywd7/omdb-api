<template>
  <div class="form-group">
    <label for="typeFilter">Type:</label>
    <select
      id="typeFilter"
      class="custom-select"
      @change="change($event)"
    >
      <option
        v-for="(opt, i) in options"
        :key="i"
        :value="opt.value"
        :selected="selectedOption(opt.name)"
      >
        {{ opt.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'AppFilter',
  props: {
    value: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      required: true
    }
  },
  methods: {
    selectedOption (option) {
      if (this.value) {
        return option === this.value
      }
      return false
    },
    change (e) {
      const selectedValue = e.target.value
      const option = this.options.find(option => {
        return selectedValue === option.value
      })
      this.$emit('filter-type', option.value)
    }
  }
}
</script>

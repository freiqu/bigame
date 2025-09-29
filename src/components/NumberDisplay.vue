<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "NumberDisplay",
  props: {
    number: Number
  },
})
</script>

<template>
  ZAHL
  <h1> {{ number }} </h1>
</template>

<style scoped>

</style>
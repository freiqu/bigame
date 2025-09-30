<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "GuessDisplay",
  props: {
    guess: String
  },
})
</script>

<template>
<div>
  <div id="guess-root">{{ guess?.padStart(5, "0") }}</div>
</div>
</template>

<style scoped>
#guess-root {
  text-align: center;
  width: 100%;
  font-size: 30px;
  font-weight: bold;
}
</style>
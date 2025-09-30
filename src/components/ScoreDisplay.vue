<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ScoreDisplay",
  props: {
    score: Number
  },
})
</script>

<template>
  <div>Score: {{score}}</div>
</template>

<style scoped>

</style>
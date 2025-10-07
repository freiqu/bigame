<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "GuessDisplay",
  props: {
    guess: String,
    length: Number,
    help: {
      type: Boolean,
      default: true,
    },
  },
})
</script>

<template>
  <div>
    <div id="guess-root">
      <div v-for="i in length">
        <div class="help" v-if="help">{{Math.pow(2, (length ?? 0)-i)}}</div>
        <div class="digit" :key="i"><p>{{ guess?.[i-1] }}</p></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#guess-root {
  justify-content: center;
  width: 100vw;
  font-weight: bold;
  gap: 0.5em;
  display: flex;
}
.digit {
  border: black solid 1px;
  border-radius: 0;
  height: 2em;
  width: 1.3em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
.help {
  text-align: center;
  color: white;
  background: #9e0000;
}

</style>
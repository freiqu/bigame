<script lang="ts">
import {defineComponent} from 'vue'
import randomNumber from "./libs/randomNumber.js";
import NumberDisplay from "./components/NumberDisplay.vue";
import toBaseTwo from "./libs/toBaseTwo.js";


export default defineComponent({
  name: "App",
  components: {NumberDisplay},
  data() {
    return {
      number: 0,
      guess: "",
      min: 1,
      max: 10,
    }
  },
  methods: {
    newRandomNumber() {
      let newNumber = 0;
      do {
        newNumber = randomNumber(this.min, this.max)
      } while (this.number === newNumber)
      this.number = newNumber
    },
    resetGame() {
      this.newRandomNumber()
      this.guess = ""
    },
  },
  computed: {
    solutionString() {
      return toBaseTwo(this.number)
    }
  },
  watch: {
    guess(newVal) {
      if (newVal === this.solutionString) {
        console.log("win")
        this.resetGame()
      }
    }
  },
  beforeMount() {
    this.newRandomNumber()
  }
})
</script>

<template>
  <NumberDisplay :number="number"></NumberDisplay>
  <input v-model="guess">
</template>

<style scoped>
</style>

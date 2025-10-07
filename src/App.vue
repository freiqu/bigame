<script lang="ts">
import {defineComponent} from 'vue'
import randomNumber from "./libs/randomNumber.js";
import NumberDisplay from "./components/NumberDisplay.vue";
import toBaseTwo from "./libs/toBaseTwo.js";
import ScoreDisplay from "./components/ScoreDisplay.vue";
import scoreCalculation from "./libs/scoreCalculation.ts";
import Keyboard from "./components/Keyboard.vue";
import GuessDisplay from "./components/GuessDisplay.vue";


export default defineComponent({
  name: "App",
  components: {GuessDisplay, Keyboard, ScoreDisplay, NumberDisplay},
  data() {
    return {
      score: 0,
      streak: 0,
      numbers: [0],
      number: 0,
      guess: "",
      min: 1,
      round: 0,
      showHelpNumbers: false,
    }
  },
  methods: {
    newRandomNumber() {
      let newNumber = 0;
      do {
        newNumber = randomNumber(this.min, this.max)
      } while (this.number === newNumber && this.numbers.includes(newNumber))
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
    },
    max () {
      return 32 + this.round * 2
    },
  },
  watch: {
    guess(newVal) {
      const sanitizedGuess = this.guess.replace(/[^0-1]|^0+/, "");
      if (sanitizedGuess !== this.guess) {
        this.guess = sanitizedGuess
        return;
      }
      if (newVal === this.solutionString) {
        // win
        this.resetGame()
        this.score = scoreCalculation(this.streak, this.score)
        this.streak++;
        this.round++;
      } else if (newVal.replace(/^0+/, "").length == this.solutionString.length) {
        // loose
        this.guess = ""
        this.streak = 0
      }
    }
  },
  beforeMount() {
    this.newRandomNumber()
  }
})
</script>

<template>
  <div id="game">
    <input type="checkbox" v-model="showHelpNumbers" id="help-toggle">
    <label for="help-toggle">Help</label>
    <ScoreDisplay :score="score"/>
    <NumberDisplay :number="number"/>
    <GuessDisplay :guess="guess" :length="solutionString.length" :help="showHelpNumbers"/>
    <Keyboard id="keyboard" @keyPressed="key => guess += key" @backspace="guess = guess.slice(0, guess.length - 1)" @reset="guess = ''"/>
  </div>
</template>

<style scoped>
#game {
  padding: 8px;
}
#keyboard {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  top: auto;
}
</style>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Keyboard",
  props: {
    keys: {
      default: ["0", "1"],
      type: Array<string>,
    }
  },
  emits: {
    "keyPressed": String,
    "backspace" : Boolean,
    "reset" : Boolean,
  },

  methods: {
    onKeyDown(e: KeyboardEvent) {
      if (e.key === "0" || e.key === "1") {
        this.$emit("keyPressed", e.key)
      } else if (e.key === 'Backspace') {
        this.$emit("backspace")
      }else if (e.key === 'r') {
        this.$emit("reset")
      }
    },
  },

  mounted() {
    window.addEventListener("keydown", this.onKeyDown);
  },

  beforeUnmount() {
    window.removeEventListener("keydown", this.onKeyDown);
  },
})
</script>

<template>
  <div>
    <div id="board">
      <button class="button common-button" v-for="key in keys" @click="$emit('keyPressed', key)">{{key}}</button>
    </div>
    <button class='extra-button common-button' @click="$emit('backspace')"><span>back</span></button>
    <button class='extra-button common-button' @click="$emit('reset')"><span>reset</span></button>
  </div>

</template>

<style scoped>
div {
  touch-action: manipulation;
}
#board {
  width: 100%;
  height: 40vh;
  display: flex;
  flex-wrap: wrap;
}
.common-button {

  border-radius: 0;
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}
.button {
  min-width: 100px;
  flex-grow: 2;
  color: black;
  font-size: 100px;
}
.extra-button {
  background: #9e0000;
  color: white;
  flex-grow: 1;
  width: 100%;
  padding: 10px 0;
}

.extra-button span {
  font-size: 5vw;
  text-transform: uppercase;
}
</style>
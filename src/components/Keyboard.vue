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
    "keyPressed": (payload: string) => typeof payload === "string",
    "backspace" : () => true,
    "reset" : () => true,
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
      <button class="button" v-for="key in keys" @click="$emit('keyPressed', key)">{{key}}</button>
    </div>
    <button class='extra-button' @click="$emit('backspace')"><span>back</span></button>
    <button class='extra-button' @click="$emit('reset')"><span>reset</span></button>
  </div>

</template>

<style scoped>
#board {
  width: 100%;
  height: 40vh;
  display: flex;
  flex-wrap: wrap;
}
.button {
  min-width: 100px;
  flex-grow: 2;
}
.extra-button {
  background: #9e0000;
  color: white;
  flex-grow: 1;
  width: 100%;
}

.extra-button span {
  font-size: 5vw;
  text-transform: uppercase;
}
</style>
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
    "type": (payload: string) => typeof payload === "string"
  },
})
</script>

<template>
  <div>
    <button v-for="key in keys" @click="$emit('type', key)">{{key}}</button>
  </div>

</template>

<style scoped>

</style>
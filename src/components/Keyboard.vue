<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Keyboard",
  props: {
    keys: {
      default: ["0", "1"],
      type: Array<String>,
    }
  },
  emits: {
    onType(payload: string) {

    }
  },
})
</script>

<template>
  <div>
    <button v-for="key in keys" >{{key}}</button>
  </div>

</template>

<style scoped>

</style>
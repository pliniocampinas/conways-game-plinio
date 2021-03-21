<template>
  <span class="timer-display">
    <span style="float: left;">
      Tempo:
    </span>
    {{segundos}}(s)
  </span>
</template>

<script>
export default {
  name: 'TimerDisplay',
  props: {
    segundos: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
.timer-display {
  display: inline-block;
  width: 150px;
  overflow-x: hidden;
  border-bottom: 1px solid black;
  text-align: right;
}
</style>

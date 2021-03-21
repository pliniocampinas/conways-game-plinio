<template>
  <span 
    class="tabuleiro-celula"
    :class="estaViva? 'viva': ''"
    :style="`width: ${pixels}px; height: ${pixels}px;`"
  >
  </span>
</template>

<script>
export default {
  name: 'TabuleiroCelula',
  props: {
    pixels: {
      type: Number,
      default: 4
    },
    estaViva: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.tabuleiro-celula {
  box-sizing: border-box;
  display: inline-block;
  border: 1px solid #000;
  background-color: #fff;
}
  .tabuleiro-celula:hover {
    background-color: #eee;
  }
  .tabuleiro-celula.viva {
    border: 1px solid #fff;
    background-color: #000;
  }
</style>

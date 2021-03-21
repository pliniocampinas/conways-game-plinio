<template>
  <div 
    class="tabuleiro-linha"
    :style="`height: ${altura}px;`"
  >
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'TabuleiroLinha',
  props: {
    altura: {
      type: Number,
      default: 4
    },
  }
}
</script>

<style scoped>
.tabuleiro-linha {
  box-sizing: border-box;
  width: 100%;
  display: flex;
}
</style>

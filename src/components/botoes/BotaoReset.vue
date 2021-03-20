<template>
  <div class="botao-reset">
    <IconeReset/>
  </div>
</template>

<script>
import IconeReset from '@/components/icones/IconeReset.vue'

export default {
  name: 'BotaoReset',

  components: {
    IconeReset
  },
}
</script>

<style scoped>
.botao-reset {
  cursor: pointer;
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;
}
.botao-reset:hover {
  background-color: black;
}

.botao-reset > * {
  width: 100%;
  height: 100%;
  position: relative;
  left: -1px;
}
.botao-reset:hover > * {
  color: white;
}
</style>

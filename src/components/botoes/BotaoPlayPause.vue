<template>
  <div class="botao-play-pause">
    <IconePlay v-if="pausado" />
    <IconePause v-if="!pausado" />
  </div>
</template>

<script>
import IconePlay from '@/components/icones/IconePlay.vue'
import IconePause from '@/components/icones/IconePause.vue'

export default {
  name: 'BotaoPlayPause',

  components: {
    IconePlay,
    IconePause
  },

  props: {
    pausado: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.botao-play-pause {
  cursor: pointer;
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;
}
.botao-play-pause:hover {
  background-color: black;
}

.botao-play-pause > * {
  width: 100%;
  height: 100%;
  position: relative;
  left: 1px;
}
.botao-play-pause:hover > * {
  color: white;
}
</style>

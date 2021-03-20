<template>
  <div class="app-page">
    <h1>Conway's Game of Life</h1>
    <div class="app-conteudo">

      <FormGerarTabuleiro @click-gerar="gerarTabuleiro"/>

      <TabuleiroDaVida/>

      <ControlesTabuleiro
        :pausado="pausado"
        :segundosTimer="segundosTimer"
        @play-pause-click="playPauseClick"
        @reset-click="resetClick"
        @selecionar-loaf="selecionarLoaf"
        @selecionar-pulsar="selecionarPulsar"
        @selecionar-glider="selecionarGlider"
      />
    </div>
  </div>
</template>

<script>
import FormGerarTabuleiro from './components/FormGerarTabuleiro.vue'
import TabuleiroDaVida from './components/TabuleiroDaVida.vue'
import ControlesTabuleiro from './components/ControlesTabuleiro.vue'

export default {
  name: 'App',

  components: {
    FormGerarTabuleiro,
    TabuleiroDaVida,
    ControlesTabuleiro,
  },

  props: {
    pausado: {
      type: Boolean,
      default: true
    },
    segundosTimer: {
      type: Number,
      default: 0
    }
  },

  methods: {
    gerarTabuleiro() {
      console.log('gerarTabuleiro')
    },
    playPauseClick() {
      console.log('playPauseClick')
    },
    resetClick() {
      console.log('resetClick')
    },
    selecionarLoaf() {
      console.log('selecionarLoaf')
    },
    selecionarPulsar() {
      console.log('selecionarPulsar')
    },
    selecionarGlider() {
      console.log('selecionarGlider')
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app-page {
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;
}

.app-conteudo {
  max-width: 700px;
  width: 100%;
  margin: auto;
}
</style>

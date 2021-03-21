<template>
  <div class="app-page">

    <h1>Conway's Game of Life</h1>

    <div class="app-conteudo">

      <FormGerarTabuleiro
        @gerar-click="gerarTabuleiro"
        class="app-mb-5 app-mx-auto"
      />

      <div class="app-conteudo-tabuleiro">
        <Tabuleiro
          :tabuleiro="tabuleiro"
          :larguraTabuleiro="500"
          @cell-click="cellClick"
          class="app-mx-auto"
        />

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
  </div>
</template>

<script>
import FormGerarTabuleiro from './components/FormGerarTabuleiro.vue'
import Tabuleiro from './components/Tabuleiro.vue'
import ControlesTabuleiro from './components/ControlesTabuleiro.vue'

export default {
  name: 'App',

  components: {
    FormGerarTabuleiro,
    Tabuleiro,
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
  
  data() {
    return {
      tabuleiro: null
    }
  },

  created() {
    this.iniciarTabuleiro(12, 12)
  },

  methods: {
    gerarTabuleiro(linhas, colunas) {
      console.log('gerarTabuleiro', linhas, colunas)
      this.iniciarTabuleiro(linhas, colunas)
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
    cellClick(coordenadas) {
      console.log('cellClick', coordenadas)
      this.tabuleiro[coordenadas.x][coordenadas.y] = !this.tabuleiro[coordenadas.x][coordenadas.y]
    },
    iniciarTabuleiro(nroDeLinhas, nroDecolunas) {
      const tabuleiro = []

      for (let linha = 0; linha < nroDeLinhas; linha++) {
        const novaLinha = []
        for (let coluna = 0; coluna < nroDecolunas; coluna++) {
          novaLinha.push(false)
        }
        tabuleiro.push(novaLinha)
      }

      this.tabuleiro = tabuleiro
    }
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
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 30px;
}

.app-conteudo {
  max-width: 700px;
  width: 100%;
  margin: auto;
  padding-top: 20px;
  padding-bottom: 20px;
}

.app-mb-5 {
  margin-bottom: 30px;
}

.app-my-1 {
  margin-top: 6px;
  margin-bottom: 6px;
}

.app-mx-auto {
  margin-left: auto;
  margin-right: auto;
}

</style>

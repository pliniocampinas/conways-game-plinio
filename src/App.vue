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
          :tabuleiro="linhasTabuleiro"
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
import TabuleiroController from '@/controllers/TabuleiroController'

export default {
  name: 'App',

  components: {
    FormGerarTabuleiro,
    Tabuleiro,
    ControlesTabuleiro,
  },

  data() {
    return {
      linhasTabuleiro: null,
      tabuleiroController: null,
    }
  },

  computed: {
    segundosTimer() {
      return this.tabuleiroController?.segundosTimer || 0
    },
    pausado() {
      return this.tabuleiroController?.pausado
    }
  },

  created() {
    this.tabuleiroController = new TabuleiroController()
    this.tabuleiroController.gerarTabuleiro(25, 25)
    this.linhasTabuleiro = this.tabuleiroController.tabuleiro.linhas
  },

  methods: {
    gerarTabuleiro(linhas, colunas) {
      this.tabuleiroController.gerarTabuleiro(linhas, colunas)
      this.linhasTabuleiro = this.tabuleiroController.tabuleiro.linhas
    },
    playPauseClick() {
      this.tabuleiroController.playPauseClick()
    },
    resetClick() {
      this.tabuleiroController.resetClick()
    },
    selecionarLoaf() {
      this.tabuleiroController.selecionarLoaf()
    },
    selecionarPulsar() {
      this.tabuleiroController.selecionarPulsar()
    },
    selecionarGlider() {
      this.tabuleiroController.selecionarGlider()
    },
    cellClick(coordenadas) {
      this.tabuleiroController.cellClick(coordenadas.x, coordenadas.y)
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

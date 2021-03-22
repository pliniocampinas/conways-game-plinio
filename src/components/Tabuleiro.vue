<template>
  <div class="tabuleiro" :style="dimensoesTabuleiro">
    <TabuleiroLinha
      v-for="(linhas, i) in tabuleiro"
      :altura="pixelsCelula"
      :key="i"
    >
      <TabuleiroCelula
        v-for="(celula, j) in linhas"
        @click="$emit('cell-click', {x: i, y: j})"
        :key="j"
        :pixels="pixelsCelula"
        :estaViva="celula"
      />
    </TabuleiroLinha>
  </div>
</template>

<script>
import TabuleiroLinha from '@/components/TabuleiroLinha.vue'
import TabuleiroCelula from '@/components/TabuleiroCelula.vue'

export default {
  name: 'Tabuleiro',
  
  components: {
    TabuleiroLinha,
    TabuleiroCelula
  },

  props: {
    tabuleiro: {
      type: Array,
      default: () => [[]]
    },
    larguraTabuleiro: {
      type: Number,
      default: 300
    }
  },

  computed: {
    pixelsCelula() {
      if(!this.tabuleiro || this.tabuleiro.length === 0) {
        return 8
      }
      const numeroDeColunas = this.tabuleiro[0].length
      return this.larguraTabuleiro/numeroDeColunas
    },
    dimensoesTabuleiro() {
      return `width: ${this.larguraTabuleiro}px; height: auto;`
    },
  }
}
</script>

<style scoped>
.tabuleiro {
  border: 1px solid black;
  padding: 4px;
}
</style>

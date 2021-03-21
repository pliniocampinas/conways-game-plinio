<template>
  <div class="tabuleiro">
    <TabuleiroLinha
      v-for="(linhas, i) in tabuleiro"
      :altura="pixelsCelula"
      :key="i"
    >
      <TabuleiroCelula
        v-for="(celulas, j) in linhas"
        @click="$emit('cell-click', {x: i, y: j})"
        :key="j"
        :pixels="pixelsCelula"
        :estaViva="true"
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
      console.log('this.larguraTabuleiro/numeroDeColunas', this.larguraTabuleiro/numeroDeColunas)
      return this.larguraTabuleiro/numeroDeColunas
    }
  }
}
</script>

<style scoped>
.tabuleiro {
  border: 1px solid black;
  width: 310px;
  height: 300px;
  box-sizing: border-box;
}
</style>

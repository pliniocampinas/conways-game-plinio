<template>
  <form 
    @submit.prevent="$emit('gerar-click', linhas, colunas)"
    class="form-gerar-tabuleiro"
  >

    <InputNumber 
      label="Linhas" 
      class="app-my-1"
      v-model="linhas"
    />

    <InputNumber 
      label="Colunas" 
      class="app-my-1"
      v-model="colunas"
    />

    <BotaoForm>
      Gerar tabuleiro
    </BotaoForm>

  </form>
</template>

<script>
import InputNumber from '@/components/inputs/InputNumber.vue'
import BotaoForm from '@/components/botoes/BotaoForm.vue'

export default {
  name: 'FormGerarTabuleiro',

  components: {
    InputNumber,
    BotaoForm
  },

  data() {
    return {
      linhas: 12,
      colunas: 12
    }
  },
  
}
</script>

<style scoped>
.form-gerar-tabuleiro {
  width: 180px;
  border: 1px solid black;
  padding: 20px 40px;
}
</style>

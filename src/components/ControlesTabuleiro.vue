<template>
  <div class="controles-tabuleiro">

    <TimerDisplay
      :segundos="segundosTimer"
      class="controles-tabuleiro-item"
    />

    <BotaoReset 
      @click="$emit('reset-click')"
      class="controles-tabuleiro-item"
    />

    <BotaoPlayPause
      :pausado="pausado"
      @click="$emit('play-pause-click')"
      class="controles-tabuleiro-item"
    />

    <Dropdown 
      :textoPrincipal="'Presets'"
      class="controles-tabuleiros-dropdown controles-tabuleiro-item"
    >
      <DropdownItem @click="$emit('selecionar-loaf')"> Loaf </DropdownItem>
      <DropdownItem @click="$emit('selecionar-pulsar')"> Pulsar </DropdownItem>
      <DropdownItem @click="$emit('selecionar-glider')"> Glider </DropdownItem>
    </Dropdown>

    <BotaoForm
      @click="$emit('limpar-click')"
      class="controles-tabuleiro-limpar controles-tabuleiro-item"
    >
      Limpar
    </BotaoForm>

  </div>
</template>

<script>
import TimerDisplay from '@/components/TimerDisplay.vue'
import BotaoPlayPause from '@/components/botoes/BotaoPlayPause.vue'
import BotaoReset from '@/components/botoes/BotaoReset.vue'
import Dropdown from '@/components/botoes/Dropdown.vue'
import DropdownItem from '@/components/botoes/DropdownItem.vue'
import BotaoForm from '@/components/botoes/BotaoForm.vue'

export default {
  name: 'ControlesTabuleiro',

  components: {
    TimerDisplay,
    BotaoPlayPause,
    BotaoReset,
    Dropdown,
    DropdownItem,
    BotaoForm
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
  }
}
</script>

<style scoped>
.controles-tabuleiro {
  padding: 5px 8px;
}

.controles-tabuleiro-item {
  margin: 0px 4px;
}

.controles-tabuleiros-dropdown {
  width: 85px;
}

.controles-tabuleiro-limpar {
  vertical-align: top;
  padding-top: 4px;
  padding-bottom: 4px;
}
</style>

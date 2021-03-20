<template>
  <div class="dropdown">

    <span class="dropdown-botao">
      {{textoPrincipal}}  
      <IconeDropdown/>
    </span>

    <div class="dropdown-conteudo">
      <slot>
        
      </slot>
    </div>
      
  </div>
</template>

<script>
import IconeDropdown from '@/components/icones/IconeDropdown.vue'

export default {
  name: 'BotaoPlayPause',

  components: {
    IconeDropdown
  },

  props: {
    textoPrincipal: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
  vertical-align: top;
}

.dropdown-botao {
  cursor: pointer;
}

.dropdown-conteudo {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 60px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 6px 12px;
  z-index: 1;
}

.dropdown:hover .dropdown-conteudo {
  display: block;
}
</style>

<template>
  <button class="botao-form">

    <slot>
    </slot>

  </button>
</template>

<script>
export default {
  name: 'BotaoForm',
}
</script>

<style scoped>
.botao-form {
  display: inline-block;
  border: none;
  border-bottom: 1px solid black;
  background-color: #fff;
  color: #000;
  cursor: pointer;
  padding: 8px 16px 6px 16px;
}
  .botao-form:hover {
    background-color: #000;
    color: #fff;
    text-decoration: underline;
  }
  .botao-form:focus {
    outline: none;
    text-decoration: underline;
    background-color: #aaa;
  }
</style>

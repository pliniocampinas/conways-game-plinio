<template>
  <label class="input-number">
    {{ label }}
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', Number($event.target.value))"
      type="number"
      class="input-number-input"
    >
  </label>
</template>

<script>

export default {
  name: 'InputNumber',

  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: Number,
      default: 0
    }
  },

  emits: ['update:modelValue'],

  data () {
    return {
    }
  }
}
</script>

<style scoped>
.input-number {
  width: 100%;
  text-align: left;
  display: inline-block;
}

.input-number-input {
  width: 100%;
  margin: 0;
  padding: 0;
  border: none;
  border-bottom: 1px solid black;
}
  .input-number-input:focus {
    outline: 0;
  }
  .input-number-input:hover {
    background-color: #eee;
  }
</style>

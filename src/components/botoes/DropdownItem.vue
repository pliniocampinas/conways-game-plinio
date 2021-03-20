<template>
    <p class="dropdown-item">
      <slot></slot>
    </p>
</template>

<style scoped>
.dropdown-item {
  text-align: left;
  cursor: pointer;
}

.dropdown-item:hover {
  opacity: 0.7;
  text-decoration: underline;
}
</style>
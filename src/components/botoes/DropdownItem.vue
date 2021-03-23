<template>
    <p class="dropdown-item">
      <slot></slot>
    </p>
</template>

<style scoped>
.dropdown-item {
  text-align: left;
  cursor: pointer;
  padding: 2px 6px;
  font-size: 0.8rem;
}
  .dropdown-item:hover {
    background-color: #000;
    color: #fff;
    text-decoration: underline;
  }
</style>
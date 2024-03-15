<script>
export default {
  name: "AppNav",
};
</script>

<template>
  <header class="header">
    <nav class="nav">
      <router-link to="/todo">Todo page</router-link>
      <router-link to="/form">Form page</router-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
  line-height: 1.5;
  max-height: 100vh;
  padding: 0;
}

.nav {
  width: 100%;
  padding: 1rem;
  font-size: 12px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
}

.nav a.router-link-exact-active {
  color: var(--color-text);
}

.nav a.router-link-exact-active:hover {
  background-color: transparent;
}

.nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

.nav a:first-of-type {
  border: 0;
}
</style>

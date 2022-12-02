<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div id="container">
    <header>
      <img src="@/assets/logo-header.jpg" alt="imagen header" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/list">Lista de personajes</RouterLink>
      </nav>
    </header>
    <section>
      <RouterView />
    </section>
    <footer>Geekshubs 2022</footer>
  </div>
</template>

<style scoped lang="scss">
#app {
  padding: 0 !important;
  #container {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    min-height: 100vh;

    header {
      height: 100px;
      background: rgb(61 118 246 / 80%);
      color: white;
      display: flex;
      justify-content: space-between;
      padding: 0.5rem;
      align-items: center;

      a {
        color: white;
        margin: 0 0.5em;
      }

      img {
        width: 135px;
      }
    }

    section {
      flex-grow: 1;
    }

    footer {
      flex: 0;
      height: 100px;
      background: rgb(61 118 246 / 80%);
      color: white;
      display: flex;
      justify-content: center;
      padding: 0.5rem;
      align-items: center;
    }
  }
}
</style>

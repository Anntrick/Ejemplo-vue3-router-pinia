<script setup lang="ts">
import useCharactersStore from "../stores/characters";
import { useRoute } from "vue-router";

const route = useRoute();

const charactersStore = useCharactersStore();

charactersStore.getCharacters();

const char = charactersStore.characters.find(
  (element) => element.id == route.params.id
);
</script>

<template>
  <main class="container">
    <h1>{{ char.name }}</h1>
    <p>
      {{ char }}
    </p>
  </main>
</template>

<style lang="scss" scoped>
.container {
  padding: 2em;

  h1 {
    text-align: center;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
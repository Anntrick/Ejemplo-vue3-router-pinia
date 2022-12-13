<script setup lang="ts">
  import useCharactersStore from "../stores/characters";
  import { useRoute } from "vue-router";

  const route = useRoute();

  const charactersStore = useCharactersStore();

  charactersStore.getCharacters();
  console.log(charactersStore.characters)
  const char = charactersStore.characters.filter(
    (element) => element.id == route.params.id
  );
</script>

<template>
  <main class="container">
    <img :src="char.image" />
    <h1>{{ char.name }}</h1>
    <div class="item-title">
      <h1>{{ char.name }}</h1>
      <span class="status" :class="`status-${char.status}`"></span>
    </div>
    {{ char.url }}
    
    <p>Especie: {{ char.species }}</p>
    <p>Género: {{ char.gender }}</p>
    <p>Origen: {{ char.origin.name }}</p>
    <p>Ubicación actual: {{ char.location.name }}</p>
    <p>Episodios: 
      <ul>
        <li v-for="ep in char.episode" :key="ep">
          Episodio {{ep}}
        </li>
      </ul>
    </p>
    <p>Fecha de creación: {{ char.created }}</p>
    <p><RouterLink :to="`/detail/${char.id}`">Saber más</RouterLink></p>
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
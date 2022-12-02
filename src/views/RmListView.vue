<script setup lang="ts">

    import useCharactersStore from "../stores/characters";
    import CharacterItem from "../components/CharacterItem.vue";

    const charactersStore = useCharactersStore();

    charactersStore.getCharacters();
</script>

<template>
  <main class="container">
    <h1>¡Wiki de Rick y Morty!</h1>
    <p>
      <b>Total:</b> {{ charactersStore.total }}<br />
      <b>Página actual:</b> {{ charactersStore.currPage }}
    </p>
    <div class="list">
        <CharacterItem v-for="character in charactersStore.characters" :key="character.id" :data="character"> </CharacterItem>
    </div>
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
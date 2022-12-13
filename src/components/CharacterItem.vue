<script setup lang="ts">
  const props = defineProps({
    dataid: Number,
  });

  const charactersStore = useCharactersStore();

  const char = charactersStore.characters.filter(char => char.id == props.dataid)
</script>

<template>
  <div class="character-item">
    <!-- {{character}} -->
    <img :src="char.image" />
    <div class="item-title">
      <h1>{{ char.name }}</h1>
      <span class="status" :class="`status-${char.status}`"></span>
    </div>
    <!-- {{ char.url }} -->
    
    <p>Especie: {{ char.species }}</p>
    <p>Género: {{ char.gender }}</p>
    <p>Origen: {{ char.origin.name }}</p>
    <p>Ubicación actual: {{ char.location.name }}</p>
    <!-- <p>Episodios: 
            <ul>
                <li v-for="ep in char.episode" :key="ep">
                    Episodio {{ep}}
                </li>
            </ul>
        </p> -->
    <p>Fecha de creación: {{ char.created }}</p>
    <p><RouterLink :to="`/detail/${char.id}`">Saber más</RouterLink></p>
  </div>
</template>

<style lang="scss" scoped>
.character-item {
  width: 20em;
  margin: 2%;
  border: 1px solid black;
  img {
    width: 100%;
  }

  .item-title {
    padding: 1em;
    display: flex;
    justify-content: center;
    align-content: center;

    h1 {
      text-align: center;
      margin-bottom: 2em;
      margin-right: 0.5em;
    }

    .status {
      margin-top: 0.5em;
      width: 1.5em;
      height: 1.5em;
      border-radius: 2em;
      display: inline-block;
    }

    .status-Alive {
      background-color: green;
    }

    .status-Dead {
      background-color: rgb(57, 57, 57);
    }

    .status-unknown {
      background-color: purple;
    }
  }
}
</style>
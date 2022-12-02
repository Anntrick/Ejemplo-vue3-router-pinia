<script setup lang="ts">
const props = defineProps({
  data: String,
});
</script>

<template>
  <div class="character-item">
    <!-- {{character}} -->
    <img :src="data.image" />
    <div class="item-title">
      <h1>{{ data.name }}</h1>
      <span class="status" :class="`status-${data.status}`"></span>
    </div>
    <!-- {{ data.url }} -->
    
    <p>Especie: {{ data.species }}</p>
    <p>Género: {{ data.gender }}</p>
    <p>Origen: {{ data.origin.name }}</p>
    <p>Ubicación actual: {{ data.location.name }}</p>
    <!-- <p>Episodios: 
            <ul>
                <li v-for="ep in data.episode" :key="ep">
                    Episodio {{ep}}
                </li>
            </ul>
        </p> -->
    <p>Fecha de creación: {{ data.created }}</p>
    <p><RouterLink :to="`/detail/${data.id}`">Saber más</RouterLink></p>
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
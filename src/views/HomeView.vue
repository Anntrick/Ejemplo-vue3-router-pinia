<script setup lang="ts">
</script>

<template>
  <main class="container">
    <h1>¡Wiki de Rick y Morty!</h1>
    <div class="t-parts">
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt</p>
      <img src="@/assets/allpj.png" alt="Todos los pj"/>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  .container {
    padding: 2em;
    text-align: center;

    .t-parts {
      display: flex;
      margin-top: 4em;

      img {
        width: 50%;
      }
    }
  }
</style>
<template>
  <div class="section">
    <router-link :to="'/'">
      <Header />
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
a {
  text-decoration: none;
  color: black;
}
@media (min-width: 730px) {
  .section {
    width: 50rem;
    margin: 0 auto;
  }
}
@media (max-width: 480px) {
  .section {
    width: 100vw;
    margin: 0 2rem;
  }
}
</style>

<template>
  <div>
    <div class="section">
      <Header />
      <UseApi />

      <!-- <Main /> -->
    </div>
  </div>
</template>

<script>
// import Main from "./components/Main.vue";
import Header from "./components/Header.vue";
import UseApi from "./components/UseApi";

export default {
  name: "app",
  components: {
    // Main,
    Header,
    UseApi
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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

<template>
  <div class="wrapper">
    <h1>list project</h1>
    <div>hello world!</div>
    <li>
      <ul>lsit1</ul>
      <ul>list2</ul>
    </li>
  </div>
</template>

<script>
export default {
  name: "Main",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.wrapper {
  background-color: #efefef;
  height: 100%;
}
</style>

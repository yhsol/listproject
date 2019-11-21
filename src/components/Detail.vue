<template>
  <div id="Detail">
    <div class="detaillistBox">
      <div class="detailpostId">
        <span>카테고리: {{ this.detail.category.name }}</span>
        <span>글번호: {{ this.detail.id }}</span>
      </div>
      <div class="detailpostContents">
        <div class="detailpostInfo">
          <span>작성자: {{ this.detail.user.name }}</span>
          <span>|</span>
          <span>작성일: {{ this.detail.created_at }}</span>
        </div>
        <div>
          <div class="detailpostTitle">{{ this.detail.title }}...</div>
          <div class="detailpostContent">{{ this.detail.contents}}...</div>
        </div>
      </div>
    </div>
    <button v-on:click="menuOpen">댓글</button>
    <div class="detailcategoryBox">
      <div v-if="this.toggle == true" class="detailcategoryMenu">
        <li v-for="(reply, index) of replys" v-bind:key="index" class="replyBox">
          <div>{{reply.user.name}}</div>
          <div>{{reply.contents}}</div>
          <div>{{reply.created_at}}</div>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
// import Hello from "./components/Hello";z
import axios from "axios";

export default {
  name: "Detail",
  props: ["id"],
  data: () => {
    return {
      posts: [],
      categorys: [],
      selectCategory: [1],
      adss: [],
      imgs: [],
      image: [],
      postlists: [],
      toggle: false,
      busy: false,
      next: {
        page: 1
      },
      detail: {},
      replys: [],
      propsid: []
    };
  },
  computed: {},
  methods: {
    detailFetch: function() {
      axios
        .get(
          `https://1rcwozojf0.execute-api.ap-northeast-2.amazonaws.com/production/api/view?id=${this.id}`
        )
        .then(res => {
          const results = res.data.info;
          this.detail = results;
          this.postlists = this.postlists.concat(this.detail.reply);
          this.replys = this.replys.concat(this.postlists);
          // var router = this.$router;
          // this.propsid = this.id;
          console.log(res);
          console.log(this.replys);
          console.log(this.detail);
        })
        .catch(err => {
          console.log(err);
        });
    },
    menuOpen: function() {
      this.toggle = !this.toggle;
    }
    // button: function() {
    //   alert("buttons");
    // }
  },
  created() {
    this.detailFetch();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 560px;
}
.id {
  background-color: blue;
}
.detaillistBox {
  background-color: #efefef;
  margin-bottom: 1rem;
  padding-bottom: 2rem;
}
.replyBox {
  background-color: #efefef;
  padding: 1rem 0;
}
.detailreplyBox {
  background-color: #efefef;
  padding-bottom: 2rem;
}
.detailpostContents {
  padding: 0 1rem;
}
.detailpostId {
  display: flex;
  border-bottom: 1px solid black;
  padding: 0.5rem 1rem;
  justify-content: space-between;
}
.detailpostInfo {
  display: flex;
  justify-content: space-around;
  width: 30rem;
}
.detailpostTitle {
  font-weight: bold;
  margin: 1rem 0;
}
.detailpostContent {
}
.detailadsContents {
  padding: 1rem 0;
}
.detailmenu {
  display: flex;
  justify-content: space-between;
}
.detailcategoryItem {
  margin: 0 1rem;
}
.detailadsId {
  padding: 0.5rem 1rem;
}
.detailadsimg {
  width: 10rem;
  height: 10rem;
}
.detailadsSection {
  display: grid;
  grid-template-columns: 1fr 5fr;
}
@media (max-width: 480px) {
  .adsSection {
    display: flex;
    flex-direction: column;
  }
}
.replyList {
  background-color: #efefef;
}
.detailadsInfo {
  padding: 0 2rem;
  margin: 0 auto;
}
</style>

<template>
  <div id="UseApi">
    <!-- <div v-if="hasResult">
      <div v-for="post in posts" v-bind:key="post.id">
        <h1></h1>
        <p></p>
      </div>
    <button v-else v-on:click="searchTerm">글 불러오기</button>
<<<<<<< HEAD
    </div>-->
=======
    </div> -->
>>>>>>> 8d3e6a9ffa08ca3f5e517845e5fd31d8d9667233

    <div class="menu">
      <div>
        <button v-on:click="categoryFetch">필터</button>
        <button v-on:click="adsFetch">get ads data</button>
        <button v-on:click="adsImgFetch">get ads img data</button>
      </div>
      <div>
        <button v-on:click="fetchAscData">오름차순</button>
        <button v-on:click="fetchDescData">내림차순</button>
      </div>
    </div>
<<<<<<< HEAD
    <div class="categoryBox">
=======
    <!-- <div>{{ posts[2].title }}</div> -->
    <!-- <ul v-if="posts && posts.length"> -->
    <div class="categoryBox">
      <!-- <div v-for="category of categorys" v-bind:key="category.id + 100"> -->
>>>>>>> 8d3e6a9ffa08ca3f5e517845e5fd31d8d9667233
      <div v-if="this.toggle == true" class="categoryMenu">
        <button v-on:click="select1Fn" class="categoryItem">apple</button>
        <button v-on:click="select2Fn" class="categoryItem">banana</button>
        <button v-on:click="select3Fn" class="categoryItem">coconut</button>
      </div>
<<<<<<< HEAD
=======
      <!-- </div> -->
>>>>>>> 8d3e6a9ffa08ca3f5e517845e5fd31d8d9667233
    </div>
    <!-- <li v-for="(postlist, index) of postlists" v-bind:key="index + 1000">
      <div>{{ postlist.index }}</div>
      <div v-if="postlist.index % 4 !== 0">
        posts
      </div>
      <div v-if="postlist.index % 4 == 0 && postlist.index !== 0">ads</div>
<<<<<<< HEAD
    </li>-->
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <li v-for="(postlist, index) of postlists" v-bind:key="index">
        <div v-if="index == 0 || index % 4 !== 0">
          <div class="listBox">
            <div class="postId">
              <span>카테고리: {{ postlist.category_id }}</span>
              <span>글번호: {{ postlist.id }}</span>
            </div>
            <div class="postContents">
              <div class="postInfo">
                <span>작성자: {{ postlist.user_id }}</span>
                <span>|</span>
                <span>작성일: {{ postlist.created_at }}</span>
              </div>
              <div>
                <div class="postTitle">{{ postlist.title.substr(0, 50) }}...</div>
                <div class="postContent">{{ postlist.contents.substr(0, 100) }}...</div>
=======
    </li> -->
    <div
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="10"
    >
      <li v-for="(post, index) of postlists" v-bind:key="index">
        <div v-if="index == 0 || index % 4 !== 0">
          <div class="listBox">
            <div class="postId">
              <span>카테고리: {{ post.category_id }}</span>
              <span>글번호: {{ post.id }}</span>
            </div>
            <div class="postContents">
              <div class="postInfo">
                <span>작성자: {{ post.user_id }}</span>
                <span>|</span>
                <span>작성일: {{ post.created_at }}</span>
              </div>
              <div>
                <div class="postTitle">{{ post.title.substr(0, 50) }}...</div>
                <div class="postContent">
                  {{ post.contents.substr(0, 100) }}...
                </div>
>>>>>>> 8d3e6a9ffa08ca3f5e517845e5fd31d8d9667233
              </div>
            </div>
          </div>
        </div>
        <div v-if="index % 4 == 0 && index !== 0">
          <li v-for="ads of adss" v-bind:key="ads.id + 1000">
            <div class="listBox">
              <div class="adsId">
                <span>sponsered: {{ ads.id }}</span>
              </div>
              <div class="adsSection">
                <div class="adsInfo">
                  <img
                    :src="'https://cdn.comento.kr/assignment/' + ads.img"
                    alt="avatar"
                    class="adsimg"
                  />
                </div>
                <div class="adsContents">
                  <div class="postTitle">{{ ads.title.substr(0, 50) }}...</div>
<<<<<<< HEAD
                  <div class="postContent">{{ ads.contents.substr(0, 100) }}...</div>
=======
                  <div class="postContent">
                    {{ ads.contents.substr(0, 100) }}...
                  </div>
>>>>>>> 8d3e6a9ffa08ca3f5e517845e5fd31d8d9667233
                </div>
              </div>
            </div>
          </li>
        </div>
      </li>
    </div>
<<<<<<< HEAD
    <div v-show="busy" class="loading">loading..</div>
  </div>
</template>

<script>
=======
    <!-- <li v-for="ads of adss" v-bind:key="ads.id + 1000">
      <div class="listBox">
        <div>{{ imgs }}</div>
        <div class="postId">
          <span>sponsered: {{ ads.id }}</span>
        </div>
        <div class="postInfo">
          <span>image: {{ ads.img }}</span>
        </div>
        <div>
          <div class="postTitle">{{ ads.title.substr(0, 50) }}...</div>
          <div class="postContent">{{ ads.contents.substr(0, 100) }}...</div>
        </div>
      </div>
    </li> -->
    <div v-show="busy" class="loading">
      loading..
    </div>
  </div>
  <!-- <button v-on:click="button">button</button> -->
</template>

<script>
// import Hello from "./components/Hello";
>>>>>>> 8d3e6a9ffa08ca3f5e517845e5fd31d8d9667233
import axios from "axios";

export default {
  name: "UseApi",
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
      }
    };
  },
  computed: {
    hasResult: function() {
      return this.posts.length && this.adss.length > 0;
    },
    contentResult: function() {
      return this.postlist.indexOf % 4 !== 0;
    },
    adsResults: function() {
      return this.postlist.indexOf % 4 == 0 && this.postlist.indexOf !== 0;
    }
  },
  methods: {
    loadMore: function() {
      this.busy = true;
      this.fetchData();
<<<<<<< HEAD
      this.adsFetch();
=======
>>>>>>> 8d3e6a9ffa08ca3f5e517845e5fd31d8d9667233
    },
    fetchData: function() {
      axios
        .get(
          `https://1rcwozojf0.execute-api.ap-northeast-2.amazonaws.com/production/api/list?page=${this.next.page}&ord=asc&category[]=${this.selectCategory}&limit=10`
        )
        .then(response => {
<<<<<<< HEAD
          const results = response.data.list.data;

          const foo = new Set(results);
          const foolists = [...foo];

          if (
            (results.length >= 10) |
            (results.length < 10 && this.postlists.length >= 10)
          ) {
            this.busy = false;
            this.postlists = this.postlists.concat(foolists);
          }
          // if (!this.postlists.includes(results)) {
          //   console.log(this.postlists.includes(results));
          //   console.log(results);
          //   console.log(this.postlists);
          // }
          console.log(
            this.postlists
              .map(postlist => postlist.id)
              .includes(results.map(result => result.id))
          );
          console.log(this.postlists.map(postlist => postlist.id));
          console.log(results.map(result => result.id));
          if (this.postlists.length > 10) {
            this.next.page = this.next.page + 1;
          }
          // console.log(foolists.map(foolist => foolist.id).includes(100));
          // console.log(this.postlists);
=======
          // this.posts = response.data.list.data.map(post => post.id);
          const results = response.data.list.data;
          this.posts = results.map(post => post);
          if (this.posts.length >= 10) {
            this.busy = false;
          }
          if (this.postlists.length > 10) {
            this.next.page = this.next.page + 1;
          }
          // const foo = new Set(this.postlists);
          this.postlists = this.postlists.concat(this.posts);
          console.log(this.posts);
          console.log(this.postlists);
          console.log(this.postlists.length);
          console.log(this.next.page);
          // console.log(response);
          // console.log(this.postlists.map(postlist => postlist.id));
>>>>>>> 8d3e6a9ffa08ca3f5e517845e5fd31d8d9667233
        })
        .catch(error => {
          console.log(error);
        });
    },
    fetchAscData: function() {
      axios
        .get(
          `https://1rcwozojf0.execute-api.ap-northeast-2.amazonaws.com/production/api/list?page=${this.next.page}&ord=desc&category[]=1&limit=int`
        )
        .then(response => {
<<<<<<< HEAD
=======
          // this.posts = response.data.list.data.map(post => post.id);
>>>>>>> 8d3e6a9ffa08ca3f5e517845e5fd31d8d9667233
          this.posts = response.data.list.data.map(post => post);
          if (this.posts.length > 15) {
            this.next.page = this.next.page + 1;
          }
          console.log(this.next.page);
          console.log(this.posts);
        })
        .catch(error => {
          console.log(error);
        });
    },
    fetchDescData: function() {
      axios
        .get(
          "https://1rcwozojf0.execute-api.ap-northeast-2.amazonaws.com/production/api/list?page=int&ord=desc&category[]=1&limit=10"
        )
        .then(response => {
<<<<<<< HEAD
=======
          // this.posts = response.data.list.data.map(post => post.id);
>>>>>>> 8d3e6a9ffa08ca3f5e517845e5fd31d8d9667233
          this.posts = response.data.list.data.map(post => post);
          console.log(this.posts);
        })
        .catch(error => {
          console.log(error);
        });
    },
    categoryFetch: function() {
      axios
        .get(
          "https://1rcwozojf0.execute-api.ap-northeast-2.amazonaws.com/production/api/category"
        )
        .then(res => {
          this.categorys = res.data.list.map(category => category);
          this.menuOpen();
          console.log(this.categorys);
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    menuOpen: function() {
      this.toggle = !this.toggle;
    },
    select1Fn: function() {
      this.selectCategory = 1;
      console.log(this.selectCategory);
      this.fetchData();
<<<<<<< HEAD
=======
      // console.log(this.categorys);
>>>>>>> 8d3e6a9ffa08ca3f5e517845e5fd31d8d9667233
    },
    select2Fn: function() {
      this.selectCategory = 2;
      console.log(this.selectCategory);
      this.fetchData();
<<<<<<< HEAD
=======
      // console.log(this.categorys);
>>>>>>> 8d3e6a9ffa08ca3f5e517845e5fd31d8d9667233
    },
    select3Fn: function() {
      this.selectCategory = 3;
      console.log(this.selectCategory);
      this.fetchData();
<<<<<<< HEAD
=======
      // console.log(this.categorys);
>>>>>>> 8d3e6a9ffa08ca3f5e517845e5fd31d8d9667233
    },
    adsFetch: function() {
      axios
        .get(
          "https://1rcwozojf0.execute-api.ap-northeast-2.amazonaws.com/production/api/ads?page=int&limit=1"
        )
        .then(res => {
          this.adss = res.data.list.data.map(ads => ads);
          this.imgs = res.data.list.data.map(ads => ads.img);
<<<<<<< HEAD
          // this.postlists = this.postlists.concat(this.adss);
=======
          // this.imgs = res.data.list.data.map(ads => {
          //   axios.get(`https://cdn.comento.kr/assignment/${ads.img}`);
          // });
          // console.log(this.adss);
>>>>>>> 8d3e6a9ffa08ca3f5e517845e5fd31d8d9667233
        })
        .catch(err => {
          console.log(err);
        });
    },
    adsImgFetch: function() {
      axios
        .get(`https://cdn.comento.kr/assignment/${this.imgs[1]}`)
        .then(res => {
<<<<<<< HEAD
=======
          // this.imgs = res.data.list.data.map(img => img);
>>>>>>> 8d3e6a9ffa08ca3f5e517845e5fd31d8d9667233
          this.image = res.data;
          console.log(this.image);
        })
        .catch(err => {
          console.log(err);
        });
    },
    detailFetch: function() {
      axios
        .get(
          "https://1rcwozojf0.execute-api.ap-northeast-2.amazonaws.com/production/api/view?id=1"
        )
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
<<<<<<< HEAD
=======
    // button: function() {
    //   alert("buttons");
    // }
>>>>>>> 8d3e6a9ffa08ca3f5e517845e5fd31d8d9667233
  },
  created() {
    this.adsFetch();
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
li {
  list-style: none;
  margin-bottom: 1.5rem;
}
.id {
  background-color: blue;
}
.listBox {
  background-color: #efefef;
}
.categoryBox {
  background-color: #efefef;
}
.postContents {
  padding: 0 1rem;
}
.postId {
  display: flex;
  border-bottom: 1px solid black;
  padding: 0.5rem 1rem;
  justify-content: space-between;
}
.postInfo {
  display: flex;
  justify-content: space-around;
  width: 20rem;
}
.postTitle {
  font-weight: bold;
}
.postContent {
}
.adsContents {
  padding: 1rem 0;
}
.menu {
  display: flex;
  justify-content: space-between;
}
.categoryMenu {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1rem;
}
.categoryItem {
  margin: 0 1rem;
}
.adsId {
  padding: 0.5rem 1rem;
}
.adsimg {
  width: 10rem;
  height: 10rem;
}
.adsSection {
  display: grid;
  grid-template-columns: 1fr 5fr;
}
@media (max-width: 480px) {
  .adsSection {
    display: flex;
    flex-direction: column;
  }
}

.adsInfo {
  padding: 0 2rem;
  margin: 0 auto;
}
.loading {
  font-size: 20px;
  text-align: center;
}
</style>

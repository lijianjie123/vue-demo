<template>
  <div>
    <div class="search-panel">
      <div class="search-input">
        <span class="search-icon"></span>
        <input type="text" v-model="keyword" placeholder="歌手/歌名/拼音" @keydown.enter="searchHandle">
      </div>
      <a href="javascript:;" @click="searchHandle" class="search-btn">搜索</a>
    </div>

    <div class="search-list" v-show="togglePanel">
      <div class="search-list-title">最近热门</div>
      <mt-cell 
        v-for = "(item ,index) in hotList" :key = "index" :title = "item.keyword"
      ></mt-cell>
    </div>

    <div class="songs-list" v-show="!togglePanel">
      <div class="search-total">
        共有{{total}}条搜索结果
      </div>
      <mt-cell v-for = "(song,index) in songs" :key="index" :title = "song.filename" @click.native = "playAudio(index)"> 
        <img src="../assets/images/download_icon.png" width="20" height="20">
      </mt-cell>
    </div>
  </div>
</template>

<script type="es6">
import { Indicator } from "mint-ui";
import { PLAY_AUDIO } from "../mixins";
// import { mapGetters } from 'vuex'
import { mapGetters } from "vuex";
export default {
  mixins: [PLAY_AUDIO],
  // computed:{
  //   ...mapGetters(['search','audio'])
  // },
  computed: {
    ...mapGetters(["search"])
  },
  data() {
    return {
      keyword: "",
      hotList: [],
      togglePanel: true,
      total: null,
      songs: []
    };
  },
  // created(){
  // 	this.getList()
  // },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getList();
      vm.$store.commit("setHeadNavHide", true);
      console.log("search", vm.search);
      vm.$store.commit("setHeadTitle", vm.search);
      vm.$store.commit("showDetailPlayer", false);
    });
  },
  beforeRouteLeave(to, from, next) {
    next();
    this.$store.commit("setHeadNavHide", false);
  },
  methods: {
    getList() {
      // Indicator.open({
      //   text: '加载中...',
      //   spinnerType: 'snake'
      // });
      this.$http
        .get("/aproxy/api/v3/search/hot?format=json&plat=0&count=30")
        .then(({ data }) => {
          Indicator.close();
          console.log(data);
          this.hotList = data.data.info;
        });
    },
    searchHandle() {
      if (this.keyword) {
        this.$http
          .get(
            `/aproxy/api/v3/search/song?format=json&keyword=${
              this.keyword
            }&page=1&pagesize=30&showtype=1`
          )
          .then(({ data }) => {
            console.log(data);
            this.songs = data.data.info;
            console.log("this.songs", this.songs);
            this.total = data.data.total;
            console.log("this.total", this.total);
            if (this.total > 0) {
              this.togglePanel = false;
            }
          });
      }
    }
  }
};
</script>

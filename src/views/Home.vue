<template>
  <div>
    <!-- 头部标签 -->
    <div class="header">
      <van-tabs
        v-model="active"
        swipeable
        color="#16b13a"
        title-active-color="#16b13a"
        title-inactive-color="black"
        line-width="32.4px"
      >
        <van-tab v-for="(item,index) in tabs" :key="index" :title="item"></van-tab>
      </van-tabs>
    </div>
    <div class="content">
      <!-- 头条 -->
      <div v-if="active==0">
        <div class="home" v-for="(item,index) in headlines" :key="index">
          <div class="img col-30">
            <img :src="item.thumb" width="100.8px" height="75.6px" />
          </div>
          <div class="col title">{{item.title}}</div>
        </div>
      </div>

      <!-- 中超 -->
      <div v-if="active==1">
        <div class="home" v-for="(item,index) in CSL" :key="index">
          <div class="img col-30">
            <img :src="item.thumb" width="100.8px" height="75.6px" />
          </div>
          <div class="col title">{{item.title}}</div>
        </div>
      </div>

      <!-- 闲情 -->
      <div v-if="active==2">
        <div class="home" v-for="(item,index) in leisure" :key="index">
          <div class="img col-30">
            <img :src="item.thumb" width="100.8px" height="75.6px" />
          </div>
          <div class="col title">{{item.title}}</div>
        </div>
      </div>

      <!-- 国际 -->
      <div v-if="active==3">
        <div class="home" v-for="(item,index) in international" :key="index">
          <div class="img col-30">
            <img :src="item.thumb" width="100.8px" height="75.6px" />
          </div>
          <div class="col title">{{item.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import jsonp from "jsonp";
export default {
  name: "home",
  data() {
    return {
      tabs: ["头条", "中超", "闲情", "国际"],
      headlines: [],
      CSL: [],
      depth: [],
      international: [],
      active: "a"
    };
  },
  created() {
    this.getHeadlines();
    this.getCSL();
    this.getLeisure();
    this.getInternational();
  },
  methods: {
    getHeadlines() {
      // // 本地json文件请求
      // this.$http.get("/static/headlines.json").then(res => {
      //   console.log(res);
      //   if (res.status == 200) {
      //     this.headlinesList = res.data.contents;
      //   }
      // });

      // // jsonp方式请求
      // jsonp(
      //   "https://api.dongqiudi.com/app/tabs/iphone/1.json?mark=gif&version=576&from=msite_com",
      //   function(err, data) {
      //     console.log("jsonp请求", data);
      //     // if (res.status == 200) {
      //     //   this.headlinesList = res.data.contents;
      //     // }
      //   }
      // );

      // 通过代理请求
      this.$http
        .get(`/app/tabs/iphone/1.json?mark=gif&version=576&from=msite_com`)
        .then(res => {
          // console.log("头条", res);
          if (res.status == 200) {
            this.headlines = res.data.articles;
          }
        });
    },
    getCSL() {
      this.$http
        .get(`/app/tabs/iphone/56.json?mark=gif&version=576&from=msite_com`)
        .then(res => {
          // console.log("中超",res);
          if (res.status == 200) {
            this.CSL = res.data.articles;
          }
        });
    },
    getLeisure() {
      this.$http
        .get(`/app/tabs/iphone/37.json?mark=gif&version=576&from=msite_com`)
        .then(res => {
          // console.log("闲情",res);
          if (res.status == 200) {
            this.leisure = res.data.articles;
          }
        });
    },
    getInternational() {
      this.$http
        .get(`/app/tabs/iphone/120.json?mark=gif&version=576&from=msite_com`)
        .then(res => {
          // console.log("国际",res);
          if (res.status == 200) {
            this.international = res.data.articles;
          }
        });
    }
  }
};
</script>
<style scoped>
.header {
  top: 100px;
}
.content {
  top: 70px;
  padding: 0.75rem;
  background: #fff;
  position: relative;
}
.home {
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #999;
  display: inline-flex;
}

.img {
  width: 200px;
  height: 76px;
}

.title {
  font-size: 1rem;
  line-height: 1.3rem;
  color: #333;
  margin-bottom: 0.3rem;
}
</style>
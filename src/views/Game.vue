<template>
  <div>
    <div class="header">
      <!-- 头部标签 -->
      <van-tabs
        v-model="active"
        swipeable
        color="#16b13a"
        title-active-color="#16b13a"
        title-inactive-color="black"
      >
        <van-tab v-for="(item,index) in tabs" :key="index" :title="item"></van-tab>
      </van-tabs>
    </div>
    <div class="content">
      <!-- 中超 -->
      <div v-if="active==0">
        <div class="li" v-for="(item,index) in CSL" :key="index">
          <div class="teamA col">
            <a class="logoA">
              <img :src="item.team_A_logo" width="50px" height="50px" />
            </a>
            <p>{{item.team_A_name}}</p>
          </div>
          <div class="col">
            <a>{{item.competition_name}}</a>
            <a>{{item.fs_A}}-{{item.fs_B}}</a>
          </div>
          <div class="teamB col">
            <a class="logoB">
              <img :src="item.team_B_logo " width="50px" height="50px" />
            </a>
            <p>{{item.team_B_name}}</p>
          </div>
        </div>
      </div>

      <!-- 英超 -->
      <div v-if="active==1">
        <div class="li" v-for="(item,index) in PL" :key="index">
          <div class="teamA col">
            <a class="logoA">
              <img :src="item.team_A_logo" width="50px" height="50px" />
            </a>
            <p>{{item.team_A_name}}</p>
          </div>
          <div class="col">
            <a>{{item.competition_name}}</a>
            <a>{{item.fs_A}}-{{item.fs_B}}</a>
          </div>
          <div class="teamB col">
            <a class="logoB">
              <img :src="item.team_B_logo " width="50px" height="50px" />
            </a>
            <p>{{item.team_B_name}}</p>
          </div>
        </div>
      </div>

      <!-- 西甲 -->
      <div v-if="active==2">
        <div class="li" v-for="(item,index) in LaLiga" :key="index">
          <div class="teamA col">
            <a class="logoA">
              <img :src="item.team_A_logo" width="50px" height="50px" />
            </a>
            <p>{{item.team_A_name}}</p>
          </div>
          <div class="col">
            <a>{{item.competition_name}}</a>
            <a>{{item.fs_A}}-{{item.fs_B}}</a>
          </div>
          <div class="teamB col">
            <a class="logoB">
              <img :src="item.team_B_logo " width="50px" height="50px" />
            </a>
            <p>{{item.team_B_name}}</p>
          </div>
        </div>
      </div>

      <!-- 意甲 -->
      <div v-if="active==3">
        <div class="li" v-for="(item,index) in SerieA" :key="index">
          <div class="teamA col">
            <a class="logoA">
              <img :src="item.team_A_logo" width="50px" height="50px" />
            </a>
            <p>{{item.team_A_name}}</p>
          </div>
          <div class="col">
            <a>{{item.competition_name}}</a>
            <a>{{item.fs_A}}-{{item.fs_B}}</a>
          </div>
          <div class="teamB col">
            <a class="logoB">
              <img :src="item.team_B_logo " width="50px" height="50px" />
            </a>
            <p>{{item.team_B_name}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      tabs: ["中超", "英超", "西甲", "意甲"],
      CSL: [],
      PL: [],
      LaLiga: [],
      SerieA: [],
      active: "a"
    };
  },
  created() {
    this.getPage();
    this.getPage1();
    this.getPage2();
    this.getPage3();
  },
  methods: {
    getPage() {
      this.$http
        .get(
          `/data/tab/league/new/43?start=2019-10-2616:00:00&version=576&init=1&from=msite_com`
        )
        .then(res => {
          console.log(res);
          if (res.status == 200) {
            this.CSL = res.data.list;
          }
        });
    },
    getPage1() {
      this.$http
        .get(
          `/data/tab/league/new/4?start=2019-10-2616:00:00&version=576&init=1&from=msite_com`
        )
        .then(res => {
          console.log(res);
          if (res.status == 200) {
            this.PL = res.data.list;
          }
        });
    },
    getPage2() {
      this.$http
        .get(
          `/data/tab/league/new/3?start=2019-10-2616:00:00&version=576&init=1&from=msite_com`
        )
        .then(res => {
          console.log(res);
          if (res.status == 200) {
            this.LaLiga = res.data.list;
          }
        });
    },
    getPage3() {
      this.$http
        .get(
          `/data/tab/league/new/9?start=2019-10-2616:00:00&version=576&init=1&from=msite_com`
        )
        .then(res => {
          console.log(res);
          if (res.status == 200) {
            this.SerieA = res.data.list;
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
  top: 80px;
  padding: 0.75rem;
  background: #fff;
  position: relative;
}
.li {
  background-color: #fff;
  padding: 15px;
  border-bottom: 1px solid #999;
  padding: 15px;
  display: inline-flex;
  width: 100%;
  height: 100px;
}
</style>
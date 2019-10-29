<template>
  <div>
    <div class="header">
      <!-- tab标签页 -->
      <van-tabs
        v-model="active"
        swipeable
        color="#16b13a"
        title-active-color="#16b13a"
        title-inactive-color="black"
      >
        <van-tab v-for="item in tabs" :key="item.index" :title="item"></van-tab>
      </van-tabs>
      <van-tabs
        background="black"
        v-model="active2"
        swipeable
        color="orange"
        title-active-color="white"
        title-inactive-color="#ddd"
      >
        <van-tab v-for="item in tabs2" :key="item.index" :title="item"></van-tab>
      </van-tabs>
    </div>
    <div class="content">
      <!-- ------------------------------------------------------------ -->
      <div v-if="active==0&active2==0">
        <h3>中超积分榜</h3>
        <table>
          <tr>
            <th></th>
            <th>球队</th>
            <th>场</th>
            <th>胜</th>
            <th>平</th>
            <th>负</th>
            <th>进/失</th>
            <th>积分</th>
          </tr>
          <tr v-for="(item,index) in CSL" :key="index">
            <td>{{item.rank}}</td>
            <td>
              <img :src="item.team_logo" width="20px" height="20px" />
              {{item.team_name}}
            </td>
            <td>{{item.matches_total}}</td>
            <td>{{item.matches_won}}</td>
            <td>{{item.matches_draw}}</td>
            <td>{{item.matches_lost}}</td>
            <td>{{item.goals_pro}}/{{item.goals_against}}</td>
            <td>{{item.points}}</td>
          </tr>
        </table>
      </div>

      <div v-if="active==0&active2==1">
        <h3>中超射手榜</h3>
        <table>
          <tr>
            <th>排名</th>
            <th>球员</th>
            <th>球队</th>
            <th>进球数（点球数）</th>
          </tr>
          <tr v-for="(item,index) in CSL_Goals" :key="index">
            <td>{{item.rank}}</td>
            <td>{{item.person_name}}</td>
            <td>
              <img :src="item.team_logo" width="20px" height="20px" />
              {{item.team_name}}
            </td>
            <td>{{item.count}}</td>
          </tr>
        </table>
      </div>

      <div v-if="active==0&active2==2">
        <h3>中超助攻榜</h3>
        <table>
          <tr>
            <th>排名</th>
            <th>球员</th>
            <th>球队</th>
            <th>助攻数</th>
          </tr>
          <tr v-for="(item,index) in CSL_Assists" :key="index">
            <td>{{item.rank}}</td>
            <td>{{item.person_name}}</td>
            <td>
              <img :src="item.team_logo" width="20px" height="20px" />
              {{item.team_name}}
            </td>
            <td>{{item.count}}</td>
          </tr>
        </table>
      </div>

      <!-- ------------------------------------------------------------ -->
      <div v-if="active==1&active2==0">
        <h3>英超积分榜</h3>
        <table>
          <tr>
            <th></th>
            <th>球队</th>
            <th>场</th>
            <th>胜</th>
            <th>平</th>
            <th>负</th>
            <th>进/失</th>
            <th>积分</th>
          </tr>
          <tr v-for="item in PL" :key="item.index">
            <td>{{item.rank}}</td>
            <td>
              <img :src="item.team_logo" width="20px" height="20px" />
              {{item.team_name}}
            </td>
            <td>{{item.matches_total}}</td>
            <td>{{item.matches_won}}</td>
            <td>{{item.matches_draw}}</td>
            <td>{{item.matches_lost}}</td>
            <td>{{item.goals_pro}}/{{item.goals_against}}</td>
            <td>{{item.points}}</td>
          </tr>
        </table>
      </div>

      <div v-if="active==1&active2==1">
        <h3>英超射手榜</h3>
        <table>
          <tr>
            <th>排名</th>
            <th>球员</th>
            <th>球队</th>
            <th>进球数（点球数）</th>
          </tr>
          <tr v-for="item in PL_Goals" :key="item.index">
            <td>{{item.rank}}</td>
            <td>{{item.person_name}}</td>
            <td>
              <img :src="item.team_logo" width="20px" height="20px" />
              {{item.team_name}}
            </td>
            <td>{{item.count}}</td>
          </tr>
        </table>
      </div>

      <div v-if="active==1&active2==2">
        <h3>英超助攻榜</h3>
        <table>
          <tr>
            <th>排名</th>
            <th>球员</th>
            <th>球队</th>
            <th>助攻数</th>
          </tr>
          <tr v-for="(item,index) in PL_Assists" :key="index">
            <td>{{item.rank}}</td>
            <td>{{item.person_name}}</td>
            <td>
              <img :src="item.team_logo" width="20px" height="20px" />
              {{item.team_name}}
            </td>
            <td>{{item.count}}</td>
          </tr>
        </table>
      </div>

      <!-- ------------------------------------------------------------ -->
      <div v-if="active==2&active2==0">
        <h3>西甲积分榜</h3>
        <table>
          <tr>
            <th></th>
            <th>球队</th>
            <th>场</th>
            <th>胜</th>
            <th>平</th>
            <th>负</th>
            <th>进/失</th>
            <th>积分</th>
          </tr>
          <tr v-for="item in LaLiga" :key="item.index">
            <td>{{item.rank}}</td>
            <td>
              <img :src="item.team_logo" width="20px" height="20px" />
              {{item.team_name}}
            </td>
            <td>{{item.matches_total}}</td>
            <td>{{item.matches_won}}</td>
            <td>{{item.matches_draw}}</td>
            <td>{{item.matches_lost}}</td>
            <td>{{item.goals_pro}}/{{item.goals_against}}</td>
            <td>{{item.points}}</td>
          </tr>
        </table>
      </div>

      <div v-if="active==2&active2==1">
        <h3>西甲射手榜</h3>
        <table>
          <tr>
            <th>排名</th>
            <th>球员</th>
            <th>球队</th>
            <th>进球数（点球数）</th>
          </tr>
          <tr v-for="item in LaLiga_Goals" :key="item.index">
            <td>{{item.rank}}</td>
            <td>{{item.person_name}}</td>
            <td>
              <img :src="item.team_logo" width="20px" height="20px" />
              {{item.team_name}}
            </td>
            <td>{{item.count}}</td>
          </tr>
        </table>
      </div>

      <div v-if="active==2&active2==2">
        <h3>西甲助攻榜</h3>
        <table>
          <tr>
            <th>排名</th>
            <th>球员</th>
            <th>球队</th>
            <th>助攻数</th>
          </tr>
          <tr v-for="(item,index) in LaLiga_Assists" :key="index">
            <td>{{item.rank}}</td>
            <td>{{item.person_name}}</td>
            <td>
              <img :src="item.team_logo" width="20px" height="20px" />
              {{item.team_name}}
            </td>
            <td>{{item.count}}</td>
          </tr>
        </table>
      </div>

      <!-- --------------------------------------------------------------------- -->
      <div v-if="active==3&active2==0">
        <h3>意甲积分榜</h3>
        <table>
          <tr>
            <th></th>
            <th>球队</th>
            <th>场</th>
            <th>胜</th>
            <th>平</th>
            <th>负</th>
            <th>进/失</th>
            <th>积分</th>
          </tr>
          <tr v-for="item in SerieA" :key="item.index">
            <td>{{item.rank}}</td>
            <td>
              <img :src="item.team_logo" width="20px" height="20px" />
              {{item.team_name}}
            </td>
            <td>{{item.matches_total}}</td>
            <td>{{item.matches_won}}</td>
            <td>{{item.matches_draw}}</td>
            <td>{{item.matches_lost}}</td>
            <td>{{item.goals_pro}}/{{item.goals_against}}</td>
            <td>{{item.points}}</td>
          </tr>
        </table>
      </div>

      <div v-if="active==3&active2==1">
        <h3>意甲射手榜</h3>
        <table>
          <tr>
            <th>排名</th>
            <th>球员</th>
            <th>球队</th>
            <th>进球数（点球数）</th>
          </tr>
          <tr v-for="item in SerieA_Goals" :key="item.index">
            <td>{{item.rank}}</td>
            <td>{{item.person_name}}</td>
            <td>
              <img :src="item.team_logo" width="20px" height="20px" />
              {{item.team_name}}
            </td>
            <td>{{item.count}}</td>
          </tr>
        </table>
      </div>

      <div v-if="active==3&active2==2">
        <h3>意甲助攻榜</h3>
        <table>
          <tr>
            <th>排名</th>
            <th>球员</th>
            <th>球队</th>
            <th>助攻数</th>
          </tr>
          <tr v-for="(item,index) in SerieA_Assists" :key="index">
            <td>{{item.rank}}</td>
            <td>{{item.person_name}}</td>
            <td>
              <img :src="item.team_logo" width="20px" height="20px" />
              {{item.team_name}}
            </td>
            <td>{{item.count}}</td>
          </tr>
        </table>
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
      tabs2: ["积分榜", "射手榜", "助攻榜"],
      CSL: [],
      CSL_Goals: [],
      CSL_Assists: [],
      PL: [],
      PL_Goals: [],
      PL_Assists: [],
      LaLiga: [],
      LaLiga_Goals: [],
      LaLiga_Assists: [],
      SerieA: [],
      SerieA_Goals: [],
      SerieA_Assists: [],
      active: "a",
      active2: "b"
    };
  },
  created() {
    this.getCSL();
    this.getCSL_Goals();
    this.getCSL_Assists();
    this.getPL();
    this.getPL_Goals();
    this.getPL_Assists();
    this.getLaLiga();
    this.getLaLiga_Goals();
    this.getLaLiga_Assists();
    this.getSerieA();
    this.getSerieA_Goals();
    this.getSerieA_Assists();
  },
  methods: {
    getCSL() {
      this.$http
        .get(
          `/soccer/biz/data/standing?season_id=14225&app=dqd&version=714&platform=ios&from=msite_com`
        )
        .then(res => {
          // console.log("中超积分榜", res);
          if (res.status == 200) {
            this.CSL = res.data.content.rounds[0].content.data;
          }
        });
    },
    getCSL_Goals() {
      this.$http
        .get(
          `/data/v1/person_ranking/0?type=goals&version=0&refer=person_ranking&season_id=14225&from=msite_com`
        )
        .then(res => {
          // console.log("中超射手榜", res);
          if (res.status == 200) {
            this.CSL_Goals = res.data.content.data;
          }
        });
    },
    getCSL_Assists() {
      this.$http
        .get(
          `/data/v1/person_ranking/0?type=assists&version=0&refer=person_ranking&season_id=14225&from=msite_com`
        )
        .then(res => {
          // console.log("中超助攻榜", res);
          if (res.status == 200) {
            this.CSL_Assists = res.data.content.data;
          }
        });
    },

    // -------------------------------------------------------------------------
    getPL() {
      this.$http
        .get(
          `/soccer/biz/data/standing?season_id=14931&app=dqd&version=714&platform=ios&from=msite_com`
        )
        .then(res => {
          // console.log("英超积分榜", res);
          if (res.status == 200) {
            this.PL = res.data.content.rounds[0].content.data;
          }
        });
    },
    getPL_Goals() {
      this.$http
        .get(
          `/data/v1/person_ranking/0?type=goals&version=0&refer=person_ranking&season_id=14931&from=msite_com`
        )
        .then(res => {
          // console.log("英超射手榜", res);
          if (res.status == 200) {
            this.PL_Goals = res.data.content.data;
          }
        });
    },
    getPL_Assists() {
      this.$http
        .get(
          `/data/v1/person_ranking/0?type=assists&version=0&refer=person_ranking&season_id=14931&from=msite_com`
        )
        .then(res => {
          // console.log("英超助攻榜", res);
          if (res.status == 200) {
            this.PL_Assists = res.data.content.data;
          }
        });
    },
    // ------------------------------------------------------------------
    getLaLiga() {
      this.$http
        .get(
          `/soccer/biz/data/standing?season_id=15013&app=dqd&version=714&platform=ios&from=msite_com`
        )
        .then(res => {
          // console.log("西甲积分榜", res);
          if (res.status == 200) {
            this.LaLiga = res.data.content.rounds[0].content.data;
          }
        });
    },
    getLaLiga_Goals() {
      this.$http
        .get(
          `/data/v1/person_ranking/0?type=goals&version=0&refer=person_ranking&season_id=15013&from=msite_com`
        )
        .then(res => {
          // console.log("西甲射手榜", res);
          if (res.status == 200) {
            this.LaLiga_Goals = res.data.content.data;
          }
        });
    },
    getLaLiga_Assists() {
      this.$http
        .get(
          `/data/v1/person_ranking/0?type=assists&version=0&refer=person_ranking&season_id=15013&from=msite_com`
        )
        .then(res => {
          // console.log("西甲助攻榜", res);
          if (res.status == 200) {
            this.LaLiga_Assists = res.data.content.data;
          }
        });
    },
    // -------------------------------------------------------------------------------
    getSerieA() {
      this.$http
        .get(
          `/soccer/biz/data/standing?season_id=15385&app=dqd&version=714&platform=ios&from=msite_com`
        )
        .then(res => {
          // console.log("意甲积分榜", res);
          if (res.status == 200) {
            this.SerieA = res.data.content.rounds[0].content.data;
          }
        });
    },
    getSerieA_Goals() {
      this.$http
        .get(
          `/data/v1/person_ranking/0?type=goals&version=0&refer=person_ranking&season_id=15385&from=msite_com`
        )
        .then(res => {
          // console.log("意甲射手榜", res);
          if (res.status == 200) {
            this.SerieA_Goals = res.data.content.data;
          }
        });
    },
    getSerieA_Assists() {
      this.$http
        .get(
          `/data/v1/person_ranking/0?type=assists&version=0&refer=person_ranking&season_id=15385&from=msite_com`
        )
        .then(res => {
          // console.log("意甲助攻榜", res);
          if (res.status == 200) {
            this.SerieA_Assists = res.data.content.data;
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
  top: 128px;
  padding: 0.75rem;
  background: #fff;
  position: relative;
}
h3 {
  color: red;
}
table {
  width: 100%;
  background-color: #fff;
  text-align: left;
  color: black;
  height: 30px;
  font-size: 0.75rem;
  line-height: 30px;
  font-weight: 400;
  padding: 3px 0;
  white-space: nowrap;
  box-sizing: border-box;
}
</style>
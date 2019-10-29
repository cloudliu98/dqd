<template>
  <div id="app">
    <div class="img">
      <a href="https://m.dongqiudi.com/guide?type=openApp&click_from=head">
        <img src="./assets/app.jpg" height="56px" width="414px" />
      </a>
    </div>
    <div class="row header tac">
      <a href="#/" class="col-30">
        <img src="./assets/logo.png" height="22" alt />
      </a>
      <router-link to="/" class="tabs col">首页</router-link>
      <router-link to="/live" class="tabs col">直播</router-link>
      <router-link to="/game" class="tabs col">比赛</router-link>
      <router-link to="/data" class="tabs col">数据</router-link>
    </div>
    <keep-alive>
      <router-view v-if="$route.meta.keep" />
    </keep-alive>
    <router-view v-if="!$route.meta.keep" />
  </div>
</template>

<style lang="less">

.tabs {
  color: #fff;
  text-decoration: none;
}

.tabs:hover {
  color: rgba(255, 255, 0, 1);
}

.header {
  padding: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 56px;
  height: 45px;
  background-color: #16b13a;
  width: 100%;
}

// --------------------------------------------------------------

// 重置
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  color: #111;
}

// 共用功能
.tac {
  text-align: center;
}

.tar {
  text-align: right;
}

.tal {
  text-align: left;
}

// 栅格系统
.row {
  display: flex;
}

.col {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.col-10 {
  flex-basis: 10%;
  width: 10%;
  max-width: 10%;
  // 占宽度10%
}
.col-20 {
  flex-basis: 20%;
  width: 20%;
  max-width: 20%;
}
.col-25 {
  flex-basis: 25%;
  width: 25%;
  max-width: 25%;
}
.col-30 {
  flex-basis: 30%;
  width: 30%;
  max-width: 30%;
  margin-top: 12px;
}
.col-33 {
  flex-basis: 33.33%;
  width: 33.33%;
  max-width: 33.33%;
}
.col-40 {
  flex-basis: 40%;
  width: 40%;
  max-width: 40%;
}
.col-50 {
  flex-basis: 50%;
  width: 50%;
  max-width: 50%;
}
.col-60 {
  flex-basis: 60%;
  width: 60%;
  max-width: 60%;
}
.col-66,
.col-67 {
  flex-basis: 66.67%;
  width: 66.67%;
  max-width: 66.67%;
}
.col-70 {
  flex-basis: 70%;
  width: 70%;
  max-width: 70%;
}
.col-80 {
  flex-basis: 80%;
  width: 80%;
  max-width: 80%;
}
.col-90 {
  flex-basis: 90%;
  width: 90%;
  max-width: 90%;
}
</style>
<template>
  <div class="app-main">
    <h1>main</h1>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "app-main",
  data() {
    return {
      desc: "这里是右侧主界面"
    };
  }
};
</script>

<style scoped lang="stylus">
.main-app {
  padding: 5px;
}
.app-main{
    position:absolute;
    top:50px;
    left:230px;
    right:0px;
    overflow-y:auto;
    background-color:green;
}
</style>
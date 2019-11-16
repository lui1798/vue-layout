<template>
  <div class="left-sidebar">
    <el-menu
      mode="vertical"
      unique-opened
      @open="handleOpen"
      @close="handleClose"
      background-color
      :collapse="isCollapse"
    >
      <sidebar-item
        v-for="router of routers"
        :key="router.path"
        :item="router"
        :base-path="router.path"
      ></sidebar-item>
    </el-menu>
    <div>
      <router-link to="/profile/">profile</router-link>
    </div>
    <div>
      <router-link to="/person/">person</router-link>
    </div>
  </div>
</template>
<script>
</script>
<style lang="stylus" scoped>
.left-sidebar {
  position: fixed;
  top: 256px;
  width: 200px;
  height: 100%;
  min-height: 500px;
}
.left-sidebar{
    position:absolute;
    width:230px;
    top:50px;
    left:0px;
    right:0px;
    overflow-y:auto;
    background-color:#545c64;
}
</style>
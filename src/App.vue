<template>
  <div id="app">
    <div class="header">
      <router-link exact active-class="active" to="/">资源市场</router-link>
      <router-link active-class="active" to="/workbench">工作台</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "app",
  components: {
  }
};
</script>

<style lang="less">
#app{
  .header{
    margin:0 10px;
    width:800px;
    margin:0 auto;
    display: flex;
    justify-content: space-around;
    .active{
      color: aqua;
    }

  }
}
</style>

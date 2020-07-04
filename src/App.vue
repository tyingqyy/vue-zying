<template>
  <div id="app">
    <div class="header">
      <router-link to="/">资源市场</router-link>
      <router-link to="/workbench">工作台</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "app",
};
</script>

<style lang="less" scoped>
#app{
  color: #2c3e50;
  .header{
    margin:10px auto;
    width:800px;
    display: flex;
    justify-content: space-around;
    a.router-link-exact-active{
      color: #409EFF;
    }
    a{
      color: #2c3e50;
      font-weight: bold
    }
  }
}
</style>

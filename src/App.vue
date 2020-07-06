<template>
  <div id="app">
    <div class="header">
      <router-link to="/">资源市场</router-link>
      <router-link to="/workbench">工作台</router-link>
    </div>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>

export default {
  name: "app",
};
</script>

<style lang="less">
body{
  margin:0;
  padding:0;
}
#app{
  color: #2c3e50;
  main{
    height:calc(100vh - 44px);
  }
  .header{
    margin:0 auto;
    padding:10px 0;
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

<template>
  <div class="resource-share">
    <div class="resource-head">
      <div class="sreach-card">
        <el-input placeholder="请输入内容" size="mini" v-model="input" clearable></el-input>
        <el-button type="primary" size="mini" icon="el-icon-search"></el-button>
        <div class="sreach-text">
          <el-button type="primary" size="mini">高级搜索</el-button>
        </div>
      </div>
      <div class="resource-date">
        <div class="block">
          <span class="demonstration resource-date-title">有效期至</span>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
        </div>
      </div>
    </div>
    <div class="resource-type-sreach">
        
    </div>
  </div>
</template>

<script>
export default {
  name: "resource-share",
  data() {
    return {
      input: "",
      value1: ""
    };
  }
};
</script>

<style lang="less" scoped>
.resource-share {
  background: #ccc;
  .resource-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .resource-date {
    padding-right: 20px;
    .resource-date-title {
      margin-right: 10px;
    }
  }
}
.sreach-card {
  padding: 10px;
  margin: 10px;
  width: 300px;
  display: flex;
  align-items: center;
  .sreach-text {
    margin-left: 10px;
  }
}
</style>
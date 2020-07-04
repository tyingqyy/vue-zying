<template>
  <div class="resource-main-card">
    <div class="card-image">
      <img src alt />
    </div>
    <div class="card-content">
      <div class="card-content-top">
        <h3>XXXXX</h3>
        <span>空闲</span>
        <span>到期日期2020-10-20</span>
        （
        <span>剩余145天</span>）
      </div>
      <div class="card-content-moddle">
        <p>描述：描述XXXXXXX描述描述XXXXXXX描述描述XXXXXXX描述描述XXXXXXX描述描述XXXXXXX描述描述XXXXXXX描述描述XXXXXXX描述</p>
      </div>
      <div class="card-content-bottom">
        <div class="card-content-bottom-code">
          <span>XXX型号：XXXXXX</span>
          <span>XX号：XXXXX</span>
          <span>XX编码：XXXXXXXXX</span>
        </div>
        <div class="card-content-bottom-code">
          <span>XXX型号：XXXXXX</span>
          <span>XX号：XXXXX</span>
        </div>
      </div>
    </div>
    <div class="card-button">
      <div class="button">
        <el-button  @click="isDrawer" size="mini">加入购物车</el-button>
      </div>
      <div class="button">
        <el-button type="primary" size="mini">主要按钮</el-button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    data(){
        return {
            
        }
    },
    componets:{
        // DrawerShoppingCart
    },
    methods:{
        
    }
};
</script>

<style lang="less" scpoed>
.resource-main-card {
  display: flex;
  justify-items: center;
  padding: 10px 0;
  margin: 0 20px;
  border-bottom: 1px solid #ccc;
  .card-image {
    width: 100px;
    margin-right: 20px;
    img {
      width: 90px;
      height: 90px;
    }
  }
  .card-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    .card-content-top {
      display: flex;
      justify-items: center;
      line-height: 26px;
      h3 {
        width: 340px;
        height: 26px;
        margin: 0px;
      }
      span:first-of-type {
        background: #409eff;
        color: #fff;
        padding: 0 10px;
        border-radius: 4px;
        margin-right: 10px;
      }
      span:last-of-type {
        color: #409eff;
      }
    }
    // .card-content-moddle {

    // }
    .card-content-bottom {
      .card-content-bottom-code {
        span {
          display: inline-block;
        }
        span:first-of-type {
          width: 300px;
        }
        span:nth-of-type(2) {
          width: 300px;
        }
      }
    }
  }
  .card-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 104px;
    padding: 0 20px;
    .button {
      margin: 10px;
    }
  }
}
</style>
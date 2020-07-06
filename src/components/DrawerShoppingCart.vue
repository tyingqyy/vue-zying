<template>
  <div class="common-drawer">
    <el-drawer :visible.sync="drawer" :before-close="handleClose">
      <span slot="title">
        购物车
        <i>（0）</i>
      </span>
      <div class="shopping-cart">
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              <i class="el-icon-office-building"></i>夏娜阿道夫
            </div>
          </el-col>
        </el-row>
        <div class="shopping-cart-content">
          <el-row>
            <el-col :span="8">
              <div class="grid-content bg-purple">手机打开房间</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple-light">到付款时间的弗兰克的</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple-light">
                <el-button type="primary" icon="el-icon-delete" size="mini"></el-button>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "DrawerShoppingCart",
  data() {
    return {
      direction: "rtl"
    };
  },
  props: {
    drawer: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isOpen() {
      return this.drawer;
    }
  },
  methods: {
    handleClose() {
      this.$emit("update:drawer", false);
    }
  }
};
</script>

<style lang='less' scoped>
.shopping-car {
  padding: 10px 20px;
  .shopping-cart-content {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
}
</style>
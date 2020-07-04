<template>
  <div class="sreach-type">
    <div class="type-name">{{objData.typeName}}</div>
    <div :class="isshow?'type-list':'type-list-hide'">
      <el-checkbox-group v-model="checkboxGroup" size="mini">
        <div class="type-list-item">
          <el-checkbox-button
            v-for="city in objData.typeList"
            :label="city"
            :key="city.id"
          >{{city.name}}</el-checkbox-button>
        </div>
      </el-checkbox-group>
      <div class="type-more">
        <el-button
          size="mini"
          :icon="isshow?'el-icon-more':'el-icon-circle-close'"
          @click="isShow()"
        ></el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isshow: true,
      dataSreach: "",
      date: "",
      checkboxGroup: []
    };
  },
  props: {
    objData: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    isShow() {
      this.isshow = !this.isshow;
    }
  }
};
</script>

<style lang="less" scoped>
.sreach-type {
  display: flex;
  justify-items: center;
  padding: 0 20px 10px;
  background: #fff;
  .type-name {
    font-size: 14px;
    color: #c0c4cc;
    align-self: center;
    width: 80px;
  }
  .type-list-hide {
    flex: 1;
    height: 28px;
    display: flex;
    justify-items: center;
    position: relative;
    padding-right: 54px;
    overflow: visible;
    // background: #f8f8f8;
    padding: 10px;
    .type-more {
      position: absolute;
      top: 10px;
      right: 10px;
    }
    .type-list-item {
      border-radius: 4px;
    }
  }
  .type-list {
    flex: 1;
    height: 28px;
    display: flex;
    justify-items: center;
    position: relative;
    padding-right: 44px;
    overflow: hidden;
    .type-more {
      position: absolute;
      top: 0;
      right: 0px;
    }
  }
}
</style>
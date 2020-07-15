<template>
  <div class="resource">
    <div class="resource-share">
      <div class="resource-sreach">
        <div class="resource-head">
          <div class="sreach-head-input">
            <el-input
              placeholder="请输入内容"
              size="mini"
              v-model="dataSreach"
              clearable
            ></el-input>
            <el-button
              type="primary"
              size="mini"
              icon="el-icon-search"
            ></el-button>
            <div class="sreach-text">
              <el-button type="primary" size="mini" @click="isDialog"
                >高级搜索
              </el-button>
            </div>
          </div>
          <div class="resource-date">
            <div class="block">
              <span class="demonstration resource-date-title">有效期至</span>
              <el-date-picker
                v-model="date"
                type="date"
                placeholder="选择日期"
                size="mini"
              ></el-date-picker>
            </div>
          </div>
        </div>
        <sreach-type :objData="objData"></sreach-type>
      </div>
      <div class="resource-main">
        <div class="resource-main-scroll">
          <resource-main-card
            v-for="item in resources"
            :key="item.id"
            :card="item"
            @addToCart="addToCart"
            @primaryClick="resourceCardPrimaryClick"
          ></resource-main-card>
        </div>
      </div>
      <div class="resource-pagination">
        <pagination></pagination>
      </div>
    </div>
    <sreach-dialog :dialogVisible.sync="dialogVisible"></sreach-dialog>
    <drawer-shopping-cart
      :goods="carts"
      :drawer.sync="drawer"
    ></drawer-shopping-cart>
  </div>
</template>

<script>
import SreachType from "@/components/SreachType";
import ResourceMainCard from "@/components/ResourceMainCard";
import Pagination from "@/components/Pagination";
import SreachDialog from "@/components/SreachDialog";
import DrawerShoppingCart from "@/components/DrawerShoppingCart";
import { actionTypes as cartActions } from "../store/cart";
import { actions as resourceActions } from "../store/resource";

export default {
  name: "resource-share",
  data() {
    return {
      drawer: false,
      dialogVisible: false,
      isshow: true,
      dataSreach: "",
      date: "",
      params: {
        content: "",
        date: ""
      },
      checkboxGroup: [],
      objData: {
        typeName: "类型",
        typeList: [
          {
            id: 1,
            name: "全部",
            count: 1024
          },
          {
            id: 2,
            name: "更多内容",
            count: 1240
          },
          {
            id: 3,
            name: "更多内容",
            count: 1240
          },
          {
            id: 4,
            name: "全部",
            count: 1024
          },
          {
            id: 5,
            name: "更多内容",
            count: 1240
          },
          {
            id: 6,
            name: "更多内容",
            count: 1240
          },
          {
            id: 7,
            name: "全部",
            count: 1024
          },
          {
            id: 8,
            name: "更多内容",
            count: 1240
          },
          {
            id: 9,
            name: "更多内容",
            count: 1240
          },
          {
            id: 10,
            name: "全部",
            count: 1024
          },
          {
            id: 11,
            name: "更多内容",
            count: 1240
          },
          {
            id: 12,
            name: "更多内容",
            count: 1240
          },
          {
            id: 13,
            name: "全部",
            count: 1024
          },
          {
            id: 14,
            name: "更多内容",
            count: 1240
          },
          {
            id: 15,
            name: "更多内容",
            count: 1240
          },
          {
            id: 16,
            name: "全部",
            count: 1024
          },
          {
            id: 17,
            name: "更多内容",
            count: 1240
          },
          {
            id: 18,
            name: "更多内容",
            count: 1240
          }
        ]
      }
    };
  },
  components: {
    SreachType,
    ResourceMainCard,
    Pagination,
    SreachDialog,
    DrawerShoppingCart
  },
  computed: {
    carts() {
      return this.$store.state.cart.carts;
    },
    resources() {
      return this.$store.state.resource.list;
    }
  },
  methods: {
    isDialog() {
      this.dialogVisible = true;
    },
    addToCart(cart) {
      this.$store.commit(cartActions.ADD_TO_CART, cart);
      this.drawer = true;
    },
    resourceCardPrimaryClick(data) {
      console.log(data);
    }
  },
  mounted() {
    this.$store.dispatch(resourceActions.FETCH_LIST);
    // const arr = [1,2,3,4,4,5,6,7];
    // const [first, ...rest] = arr;
  }
};
</script>

<style lang="less" scoped>
.resource {
  background-color: #f8f8f8;
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;

  &-share {
    height: 100%;
    display: flex;
    flex-direction: column;

    &-pagination {
      flex: 0 0 auto;
    }
  }

  .resource-sreach {
    flex: 0 0 auto;

    .resource-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #fff;
      padding: 10px;

      .sreach-head-input {
        margin: 10px;
        width: 300px;
        display: flex;
        align-items: center;

        .sreach-text {
          margin-left: 10px;
        }
      }

      .resource-date {
        padding-right: 20px;

        .resource-date-title {
          margin-right: 10px;
          font-size: 14px;
        }
      }
    }
  }

  .resource-main {
    margin: 10px 0 0;
    background: #fff;
    flex: 1 1 auto;
    overflow-y: auto;

    .shopping-Cart {
      display: flex;
      justify-content: flex-end;
      margin: 0 10px;
      padding: 10px 300px 10px;
      border-top: 1px solid #ccc;
      justify-items: center;
    }
  }
}
</style>

<template>
  <div class="common-drawer">
    <el-drawer
      title="购物车"
      :visible.sync="drawer"
      :before-close="handleClose"
    >
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
export default {
    name:"DrawerShoppingCart",
     data() {
      return {
        direction: 'rtl',
      };
    },
    props:{
        drawer:{
            type:Boolean,
            default:false
        }
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(()=> {
            done();
            this.$emit('update:drawer',false)
          })
          .catch(()=> {});
      }
    }
};
</script>

<style>
</style>
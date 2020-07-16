<template>
  <div class="sreaach-dialog">
    <el-dialog title="收货地址" :visible.sync="dialogVisible">
      <el-form :model="form" size="mini" ref="form" label-position="left" label-width="80px">
        <el-form-item label="名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-input v-model="form.region"></el-input>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input v-model="form.type"></el-input>
        </el-form-item>
        <div class="form-inline">
          <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域" style="width:220px">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动形式">
            <el-input v-model="form.type" prefix-icon="el-icon-user-solid" style="width:220px"></el-input>
          </el-form-item>
        </div>
        <el-form-item label="类型">
          <sreach-type :objData="objData"></sreach-type>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="$emit('update:dialogVisible',false)">取 消</el-button>
        <el-button type="primary" @click="handleSubmit" >确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import SreachType from "./SreachType";
export default {
  data() {
    return {
      form: {
        name: '',
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
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
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  components:{
      SreachType
  },
  methods: {
    handleSubmit() {
      this.$emit("update:dialogVisible", false);
      this.$emit('handleSubmit', this.form);
    }
  }
};
</script>

<style lang="less" scoped>
.form-inline {
  display: flex;
  justify-items: center;
  justify-content: space-between;
}
</style>
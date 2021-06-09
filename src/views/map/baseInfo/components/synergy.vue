<template>
  <el-dialog
    title="协同提醒详情"
    :visible.sync="dialogVisible"
    :modal="false"
    width="30%"
    :before-close="handleClose"
  >
    <div class="content">
      <div class="title">{{ rowInfo.date }}{{ rowInfo.name }}</div>
      <p class="time">发布时间：{{ rowInfo.time }}</p>
      <div class="info">
        市里2021年3月10日~15日
        文创检查，需做好明月山北路沿线亮灯保障市里2021年3月10日~15日
        文创检查，需做好明月山北路沿线亮灯保障市里2021年3月10日~15日
        文创检查，需做好明月山北路沿线亮灯保障市里2021年3月10日~15日
        文创检查，需做好明月山北路沿线亮灯保障
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "synergy",
  props: {
    rowInfo: { type: Object, default: () => {} },
    visible: { type: Boolean }
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  watch: {
    visible(val) {
      this.dialogVisible = val;
    }
  },
  mounted() {},
  methods: {
    handleClose(done) {
      this.dialogVisible = false;
      this.$emit("update:visible", this.dialogVisible);
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  margin: 20px 50px;
 
  .title {
    font-size: 28px;
    line-height: 45px;
    text-align: center;
  }
  .time {
    font-size: 12px;
    line-height: 45px;
    text-align: center;
  }
}
/deep/.el-dialog{
    height: 800px;
    overflow-y: scroll;
}
</style>

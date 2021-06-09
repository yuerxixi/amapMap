<template>
  <el-dialog
    title="一键开关"
    :modal="false"
    width="30%"
    center
    :visible.sync="dialogVisible"
    :before-close="handleClose"
  >
    <el-radio v-model="lightRadio" label="1">开灯</el-radio>
    <el-radio v-model="lightRadio" label="2">关灯</el-radio>
    <el-form :model="form">
      <el-form-item label="授权密码：">
        <el-input
          v-model="form.password"
          placeholder="请输入授权密码"
          clearable
          autocomplete="off"
        ></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="nextStep">下发指令</el-button>
      <el-button @click="handleClose">取消指令</el-button>
    </div>
    <!-- 新建协同弹框 -->
    <el-dialog
      :modal="false"
      width="30%"
      title="提醒"
      :visible.sync="innerVisible"
      center
      append-to-body
    >
      <p>您正在执行全城一把闸刀开关，确认是否执行</p>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirmBtn">确认</el-button>
        <el-button @click="handleClose">取消</el-button>
      </div>
    </el-dialog>
  </el-dialog>
</template>

<script>
export default {
  name: "lightSwitch",
  props: {
    visible: { type: Boolean }
  },
  data() {
    return {
      dialogVisible: false,
      innerVisible: false,
      lightRadio: "",
      form: {
        password: ""
      },
      formLabelWidth: "120px"
    };
  },
  watch: {
    visible(val) {
      this.dialogVisible = val;
    }
  },
  mounted() {},
  methods: {
    //   下发指令
    nextStep() {
      if (this.lightRadio === "") {
        this.$message.error("请选择开关灯");
      } else if (this.form.password === "") {
        this.$message.error("请输入授权密码");
      } else {
        this.dialogVisible = false;
        this.innerVisible = true;
      }
    },
    confirmBtn() {
      alert("确认");
      this.handleClose();
    },
    handleClose(done) {
      this.lightRadio = "";
      this.form.password = "";
      this.dialogVisible = false;
      this.innerVisible = false;
      this.$emit("update:visible", this.dialogVisible);
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/.el-dialog__body {
  text-align: center;
}
/deep/.el-form-item {
  display: flex;
  justify-content: center;
}
/deep/.el-form {
  margin-top: 40px;
}
/deep/.el-form-item__content {
  width: 50%;
}
</style>

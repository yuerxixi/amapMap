<template>
  <el-dialog
    title="当班人员"
    :modal="false"
    width="40%"
    center
    :visible.sync="dialogVisible"
    :before-close="handleClose"
  >
    <div class="fixRight">
      <el-button type="primary" @click="innerVisible = true">新建</el-button>
    </div>
    <el-table
      :data="tableData"
      border
      :header-cell-style="{ textAlign: 'center' }"
      :cell-style="{ textAlign: 'center' }"
      style="width: 100%"
    >
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="telephone" label="地址"> </el-table-column>
    </el-table>
    <el-pagination
      background
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="pageSize"
      layout="total, prev, pager, next"
      :total="total"
    >
    </el-pagination>
    <!-- 新增弹框 -->
    <el-dialog
      :modal="false"
      width="40%"
      title="新增"
      :visible.sync="innerVisible"
      :show-close="false"
      append-to-body
    >
      <div class="back" @click="backBtn">
        <el-button>返回</el-button>
      </div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="日期" prop="date">
          <el-date-picker v-model="ruleForm.date" type="date" placeholder="选择日期" :picker-options="pickerOptions">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name" clearable></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="telephone">
          <el-input v-model="ruleForm.telephone" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >保存</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </el-dialog>
</template>

<script>
import yichun from '@/api/api'
import { validatePhone,validateName } from '@/utils/validate'
export default {
  name: "personInfo",
  props: {
    visible: { type: Boolean }
  },
  data() {
    return {
      dialogVisible: false,
      innerVisible: false,
      pageSize: 10,
      total: 14,
      currentPage: 1,
      tableData: [
        {
          date: "2021/05/25",
          name: "张三",
          telephone: "18895555555"
        },
        {
          date: "2021/05/26",
          name: "李四",
          telephone: "18895555555"
        },
        {
          date: "2021/05/25",
          name: "张三",
          telephone: "18895555555"
        },
        {
          date: "2021/05/26",
          name: "李四",
          telephone: "18895555555"
        },
        {
          date: "2021/05/25",
          name: "张三",
          telephone: "18895555555"
        },
        {
          date: "2021/05/26",
          name: "李四",
          telephone: "18895555555"
        },
        {
          date: "2021/05/25",
          name: "张三",
          telephone: "18895555555"
        },
        {
          date: "2021/05/26",
          name: "李四",
          telephone: "18895555555"
        },
        {
          date: "2021/05/25",
          name: "张三",
          telephone: "18895555555"
        },
        {
          date: "2021/05/26",
          name: "李四",
          telephone: "18895555555"
        }
      ],
      ruleForm: {
        name: "",
        telephone: "",
        date: ""
      },
      rules: {
        name: [
          { required: true,validator: validateName, trigger: "blur" }
        ],
        telephone: [
          { required: true,validator: validatePhone, trigger: "blur" }
        ],date: [
          { required: true, message: "请选择日期", trigger: "blur" }
        ]
      },pickerOptions: {
        disabledDate(v) {
          return v.getTime() < new Date().getTime() - 86400000;
        }
      },
    };
  },
  watch: {
    visible(val) {
      this.dialogVisible = val;
    }
  },
  created(){
    this.init();
  },
  mounted() {},
  methods: {
    init(){
      //  yichun.equipmentForList(params).then((res) => {
      //   if (res.code == 200) {
      //     if (res.data.total) {
      //       this.tableData = res.data.listData;
      //       this.totalNum = res.data.total;
      //       this.listLoading = false;
      //     } else {
      //       this.tableData = [];
      //       this.totalNum = 0;
      //       this.listLoading = false;
      //     }
      //   } else {
      //     this.$message({
      //       message: res.msg,
      //     });
      //   }
      // });
    },
    backBtn() {
      this.innerVisible = false;
      this.ruleForm.name = "";
      this.ruleForm.telephone = "";
      this.ruleForm.date = "";
    },
    submitForm(formName) {
      let that=this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(validatePhone(that.ruleForm.telephone))
          that.backBtn();
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      console.log("2");
      this.$refs[formName].resetFields();
    },
    handleCurrentChange(val) {
      console.log(val);
    },
    handleClose(done) {
      this.dialogVisible = false;
      this.$emit("update:visible", this.dialogVisible);
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/.el-table__row td,
/deep/.has-gutter th {
  padding: 10px;
}
/deep/.el-dialog__body {
  padding: 50px 60px 10px;
}
/deep/.el-pagination {
  position: absolute;
  bottom: 15px;
  right: 60px;
}
/deep/.el-dialog {
  height: 820px;
  // overflow-y: scroll;
  margin-top: 8.5vh !important;
}
.fixRight /deep/.el-button {
  position: absolute;
  right: 60px;
  top: 70px;
  width: 120px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  // margin-bottom: 20px;
  span {
    font-size: 14px;
  }
}
.back /deep/.el-button {
  position: absolute;
  right: 60px;
  top: 20px;
  width: 90px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 14px;
  }
}
// /deep/.el-input__inner{
//   width: 360px;
// }
</style>

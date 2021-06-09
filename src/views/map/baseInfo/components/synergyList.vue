<template>
  <div>
    <el-dialog
      title="协同提醒"
      :visible.sync="dialogVisible"
      :modal="false"
      width="40%"
      :before-close="handleClose"
      center
    >
      <!-- <p class="title">协同提醒</p> -->
      <div class="fixRight">
        <el-button type="primary" @click="innerVisible = true"
          >新建协同</el-button
        >
      </div>
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        :header-cell-style="{ textAlign: 'center' }"
        :cell-style="{ textAlign: 'center' }"
      >
        <el-table-column type="index" width="50"> </el-table-column>
        <el-table-column prop="title" label="部门"> </el-table-column>
        <el-table-column prop="inform" label="标题+时间" min-width="140">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)" type="text"
              >编辑</el-button
            >
            <el-button size="mini" type="text" @click="handleDelete(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
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
      <!-- 新增协同弹框 -->
      <el-dialog
        :modal="false"
        width="40%"
        title="新增协同提醒"
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
          <el-form-item label="部门" prop="department">
            <el-input v-model="ruleForm.department" clearable></el-input>
          </el-form-item>
          <el-form-item label="标题+时间" prop="titleTime">
            <el-input v-model="ruleForm.titleTime" clearable></el-input>
          </el-form-item>
          <el-form-item label="内容" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc" clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >发布</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "synergyList",
  props: {
    visible: { type: Boolean }
  },
  data() {
    return {
      dialogVisible: false,
      innerVisible: false,
      tableData: [
        {
          title: "供电局",
          inform: "2021-4-13 12:00:23"
        },
        {
          title: "供电局",
          inform: "2021-4-13 12:00:23"
        },
        {
          title: "供电局",
          inform: "2021-4-13 12:00:23"
        },
        {
          title: "供电局",
          inform: "2021-4-13 12:00:23"
        },
        {
          title: "供电局",
          inform: "2021-4-13 12:00:23"
        },
        {
          title: "供电局",
          inform: "2021-4-13 12:00:23"
        },
        {
          title: "供电局",
          inform: "2021-4-13 12:00:23"
        },
        {
          title: "供电局",
          inform: "2021-4-13 12:00:23"
        },
        {
          title: "供电局",
          inform: "2021-4-13 12:00:23"
        },
        {
          title: "供电局",
          inform: "2021-4-13 12:00:23"
        }
      ],
      pageSize: 10,
      total: 14,
      currentPage: 1,
      ruleForm: {
        department: "",
        titleTime: "",
        desc: ""
      },
      rules: {
        department: [
          { required: true, message: "请输入部门", trigger: "blur" },
          { min: 1, max: 10, message: "长度在 1 到 10 个字符", trigger: "blur" }
        ],
        titleTime: [
          { required: true, message: "请输入标题+时间", trigger: "blur" },
          { min: 1, max: 30, message: "长度在 1 到 30 个字符", trigger: "blur" }
        ],
        desc: [
          { required: true, message: "请填写内容", trigger: "blur" },
          {
            min: 1,
            max: 200,
            message: "长度在 1 到 200 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  watch: {
    visible(val) {
      this.dialogVisible = val;
    }
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {},
    handleEdit(data) {
      this.innerVisible=true;
    },
    handleDelete(data) {
       this.$confirm('此操作将永久删除, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    backBtn() {
      this.innerVisible = false;
      this.ruleForm.department = "";
      this.ruleForm.titleTime = "";
      this.ruleForm.desc = "";
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.backBtn();
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
    //新建协同
    // addSynergy() {},
    //   查看
    // checkRow(scope) {
    //   this.handleClose();
    //   this.$emit("checkDetail", scope);
    // },
    handleClose(done) {
      this.dialogVisible = false;
      this.$emit("update:visible", this.dialogVisible);
    },
    // 切换分页
    // handleSizeChange(val) {
    //   console.log(val);
    //   // this.pageSize=val
    // },
    handleCurrentChange(val) {
      // console.log(val)
    }
  }
};
</script>

<style lang="scss" scoped>
// .title {
//   text-align: center;
//   margin-bottom: 0px;
//   font-size: 30px;
//   font-weight: 700;
// }

/deep/.el-dialog__body {
  padding: 20px 60px 60px;
}
/deep/.el-pagination {
  position: absolute;
  bottom: 15px;
  right: 60px;
}
/deep/.el-button span {
  padding: 10px;
}

/deep/.el-dialog {
  height: 880px;
  // overflow-y: scroll;
  margin-top: 8.5vh !important;
}
// /deep/.el-input__inner {
//   width: 200px;
// }
/deep/.el-pagination__total {
  padding: 0 20px;
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
/deep/.el-table {
  margin-top: 30px;
}
/deep/.el-table td,
/deep/.el-table th {
  padding: 10px 0;
}
</style>

<template>
  <el-dialog
    :title="title"
    :modal="false"
    width="30%"
    center
    :visible.sync="dialogVisible"
    :before-close="handleClose"
  >
    <div id="lightUpCharts"></div>
  </el-dialog>
</template>

<script>
import echarts from "echarts";
export default {
  name: "lightUp",
  props: {
    visible: { type: Boolean },
    title: { type: String }
  },
  data() {
    return {
      dialogVisible: false,
      color:'rgb(246, 192, 41)',
      dblbData: []
    };
  },
  watch: {
    visible(val) {
      this.dialogVisible = val;
      this.title==='亮灯率'?this.color='rgb(246, 192, 41)':this.color='rgb(0, 146, 198)'
      if (val) {
        this.$nextTick(function() {
          this.initChart();
        });
      }
    }
  },
  mounted() {},
  methods: {
    initChart() {
      var chartDom = document.getElementById("lightUpCharts");
      var myChart = echarts.init(chartDom);
      const dblbData = this.dblbData;
      var option;

      option = {
        color: [this.color],
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line"
          }
        ]
      };

      option && myChart.setOption(option);

      window.onresize = function() {
        myChart.resize();
      };
    },
    handleClose(done) {
      this.dialogVisible = false;
      this.$emit("update:visible", this.dialogVisible);
    }
  }
};
</script>

<style lang="scss" scoped>
#lightUpCharts {
  width: 100%;
  height: 400px;
  // padding-top: 25px;
}
</style>

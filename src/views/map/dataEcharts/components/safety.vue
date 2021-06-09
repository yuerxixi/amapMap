<template>
  <el-dialog
    :title="title"
    :modal="false"
    width="30%"
    center
    :visible.sync="dialogVisible"
    :before-close="handleClose"
  >
    <div id="safetyCharts"></div>
  </el-dialog>
</template>

<script>
import echarts from "echarts";
export default {
  name: "safety",
  props: {
    visible: { type: Boolean },
    title: { type: String }
  },
  data() {
    return {
      dialogVisible: false,
      color:'#009dd5',
      dblbData: []
    };
  },
  watch: {
    visible(val) {
      this.dialogVisible = val;
      this.title==='漏电监测'?this.color='#009dd5':this.color='rgb(76, 188, 184)'
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
      var chartDom = document.getElementById("safetyCharts");
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
#safetyCharts {
  width: 100%;
  height: 400px;
  // padding-top: 25px;
}
</style>

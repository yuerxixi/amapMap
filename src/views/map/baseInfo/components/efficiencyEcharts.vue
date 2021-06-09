<template>
  <el-dialog
    title="本月市民报修"
    :modal="false"
    width="30%"
    center
    :visible.sync="dialogVisible"
    :before-close="handleClose"
  >
    <div id="mainCharts"></div>
  </el-dialog>
</template>

<script>
import echarts from "echarts";
export default {
  name: "efficiencyEacharts",
  props: {
    visible: { type: Boolean },
    title: { type: String }
  },
  data() {
    return {
      dialogVisible: false,
      dblbData: []
    };
  },
  watch: {
    visible(val) {
      this.dialogVisible = val;
      if (val) {
        this.$nextTick(function() {
          this.initChart();
        });
        //   console.log(document.getElementsByTagName('div'))
        console.log(document.getElementById("mainCharts"));
      }
      //   val?:''
    }
  },
  mounted() {},
  methods: {
    initChart() {
      var chartDom = document.getElementById("mainCharts");
      var myChart = echarts.init(chartDom);
      const dblbData = this.dblbData;
      var option;

      option = {
          color:['#0096ff'],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
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
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            barWidth: "50%"
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
#mainCharts {
  width: 100%;
  height: 400px;
  // padding-top: 25px;
}
</style>

<template>
  <el-dialog
    :modal="false"
    width="30%"
    center
    :visible.sync="dialogVisible"
    :before-close="handleClose"
  >
    <div id="safetyTotalCharts"></div>
  </el-dialog>
</template>

<script>
import echarts from "echarts";
export default {
  name: "safetyTotal",
  props: {
    visible: { type: Boolean }
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
      }
    }
  },
  mounted() {},
  methods: {
    initChart() {
      var chartDom = document.getElementById("safetyTotalCharts");
      var myChart = echarts.init(chartDom);
      const dblbData = this.dblbData;
      var option;

      option = {
          color:['#009dd5','#f7b400','#f75d00',],
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["已布防点", "本月触发告警", "本月出发自动启闭"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "已布防点",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "本月触发告警",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "本月出发自动启闭",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410]
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
#safetyTotalCharts {
  width: 100%;
  height: 400px;
  // padding-top: 25px;
}
</style>

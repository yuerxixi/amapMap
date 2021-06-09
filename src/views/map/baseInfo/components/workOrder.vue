<template>
  <el-dialog
    :title="title"
    :modal="false"
    width="30%"
    center
    :visible.sync="dialogVisible"
    :before-close="handleClose"
  >
    <div id="workOderCharts"></div>
  </el-dialog>
</template>

<script>
import echarts from "echarts";
export default {
  name: "workOder",
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
        console.log(document.getElementById("workOderCharts"));
      }
      //   val?:''
    }
  },
  mounted() {},
  methods: {
    initChart() {
      var chartDom = document.getElementById("workOderCharts");
      var myChart = echarts.init(chartDom);
      const dblbData = this.dblbData;
      var option;

      option = {
        color:['#0096ff','rgb(145,207,117)','rgb(214,178,0)'],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },

        legend: {
          data: ["今日新增维修", "今日完成维修", "今日超期维修"]
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ],
            axisPointer: {
              type: "shadow"
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: "{value} ml"
            }
          }
        ],
        series: [
          {
            name: "今日新增维修",
            type: "bar",
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3
            ]
          },
          {
            name: "今日完成维修",
            type: "bar",
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ]
          },{
            name: "今日超期维修",
            type: "bar",
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ]
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
#workOderCharts {
  width: 100%;
  height: 400px;
  // padding-top: 25px;
}
</style>

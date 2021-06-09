<template>
  <div class="wrap">
    <ul>
      <li>
        <img src="@/assets/image/shape@2x.png" alt="" />
        <div class="title" @click="passConfirm('personInfo')">
          <div class="triangle"></div>
          <div class="name oper">
            当班信息
            <div class="activeLine"></div>
          </div>
        </div>
        <div class="content">
          <!-- 轮播 -->
          <div class="swiper-container-info">
            <div class="swiper-wrapper">
              <li
                v-for="(item, index) in swiperDataList"
                :key="index"
                class="swiper-slide swiper-slide-active"
              >
                <ul class="swiperUl">
                  <li>
                    <img src="@/assets/image/user@2x.png" alt="" />
                    <div class="des">
                      <p>当班人员</p>
                      <p>{{ item.name }}</p>
                    </div>
                  </li>
                  <li>
                    <img src="@/assets/image/tel@2x.png" alt="" />
                    <div class="des">
                      <p>当班人员号码</p>
                      <p>{{ item.telephone }}</p>
                    </div>
                  </li>
                </ul>
              </li>
            </div>
          </div>
        </div>

        <div class="title" @click="passConfirm('synergy')">
          <div class="triangle"></div>
          <div class="name oper">
            协同提醒
            <div class="activeLine"></div>
          </div>
        </div>
        <div class="list">
          <div class="swiper-container-remind">
            <div class="swiper-wrapper remindUl">
              <li
                v-for="(item, index) in remindList"
                :key="index"
                class="swiper-slide swiper-slide-active"
                @click="showDetail(item)"
              >
                <div class="name">{{ item.name }}</div>
                <div class="date">
                  {{ item.date }} <span>{{ item.project }}</span>
                </div>
                <div class="time">{{ item.time }}</div>
              </li>
            </div>
          </div>
        </div>
      </li>
      <li>
        <img src="@/assets/image/shape@2x.png" alt="" />
        <div class="title">
          <div class="triangle"></div>
          <div class="name">
            亮灯计划
            <div class="activeLine"></div>
          </div>
        </div>
        <div class="lightPlan">
          <div class="left">
            <!-- 轮播 -->
            <div class="swiper-container-lightPlan">
              <div class="swiper-wrapper">
                <div
                  v-for="(item, index) in lightList"
                  :key="index"
                  class="swiperPlan swiper-slide swiper-slide-active"
                >
                  <img src="@/assets/image/lampPost@2x.png" alt="" />
                  <p>路灯</p>
                  <div class="dsc">
                    <div class="data">
                      <p>昨日 {{ item.time }}</p>
                      <div class="light on">
                        开<span>{{ item.on }}</span>
                      </div>
                      <div class="light">
                        关<span>{{ item.no }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="handle">
              <!-- <p>昨日 18：00-06：09</p> -->
              <div
                :class="{ switch: true, on: switchVal === true }"
                @click="switchBtn"
              >
                <p :class="{ on: switchVal === true }">一键开关</p>
                <!-- <div :class="{ on: switchVal === true }"></div> -->
              </div>
              <!-- <el-switch v-model="switchVal" active-text="按月付费">
                </el-switch> -->
            </div>
          </div>
          <div class="right">
            <div class="chooseInfo">
              <ul>
                <li
                  :class="{ active: chooseInfo === 1 }"
                  @click="chooseInfo = 1"
                >
                  朝暮信息
                </li>
                <li
                  :class="{ active: chooseInfo === 2 }"
                  @click="chooseInfo = 2"
                >
                  天气信息
                </li>
              </ul>
              <div
                :class="{
                  line: true,
                  switch2: chooseInfo === 2,
                  switch1: chooseInfo === 1
                }"
              ></div>
            </div>
            <div class="info" v-show="chooseInfo === 1">
              <div>
                <img src="" alt="" />
                <span>经纬度朝暮</span>
              </div>
              <p>06:15-18:15</p>
            </div>
            <div class="info " v-show="chooseInfo === 2">
              <div>
                <span class="weather">预计未来3小时天气</span>
              </div>
              <div class="weatherStatus">恶劣</div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <img src="@/assets/image/shape@2x.png" alt="" />
        <div class="title">
          <div class="triangle"></div>
          <div class="name">
            效能检测
            <div class="activeLine"></div>
          </div>
        </div>
        <div class="efficiency">
          <div class="classify" @click="showDialog.workOderVisible = true">
            <p>今日工单</p>
            <ul>
              <li>
                <div class="name">
                  今日新增维修
                </div>
                <div class="num">
                  321
                </div>
              </li>
              <li>
                <div class="name">
                  今日完成维修
                </div>
                <div class="num">
                  12505
                </div>
              </li>
              <li>
                <div class="name">
                  今日超期维修
                </div>
                <div class="num">
                  20
                </div>
              </li>
            </ul>
          </div>
          <div class="count" @click="showDialog.efficiencyVisible = true">
            <p>本月市民报修</p>
            <div>32132</div>
          </div>
        </div>
        <div class="title">
          <!-- <div class="triangle"></div> -->
          <div class="name">
            当前异常占比
            <div class="activeLine"></div>
          </div>
        </div>
        <div id="barCharts"></div>
      </li>
    </ul>
    <el-dialog
      title="授权密码"
      :visible.sync="showDialog.passwordDialogVisible"
      width="30%"
      center
      :modal="false"
      :before-close="handleClose"
    >
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
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="passBtn">确 定</el-button>
        <el-button @click="handleClose">取 消</el-button>
      </span>
    </el-dialog>
    <person-info :visible.sync="showDialog.personInfoVisible"></person-info>
    <synergy-detail
      :visible.sync="showDialog.synergyDetailVisible"
      :row-info="rowInfo"
    ></synergy-detail>
    <synergy-list :visible.sync="showDialog.synergyListVisible"></synergy-list>
    <light-switch :visible.sync="showDialog.lightSwitchVisible"></light-switch>
    <work-order :visible.sync="showDialog.workOderVisible"></work-order>
    <efficiency-echarts
      :visible.sync="showDialog.efficiencyVisible"
    ></efficiency-echarts>
    <div
      class="mask"
      v-show="
        showDialog.passwordDialogVisible ||
          showDialog.personInfoVisible ||
          showDialog.synergyDetailVisible ||
          showDialog.synergyListVisible ||
          showDialog.lightSwitchVisible ||
          showDialog.workOderVisible ||
          showDialog.efficiencyVisible
      "
    ></div>
  </div>
</template>

<script>
import echarts from "echarts";
import PersonInfo from "./components/personInfo";
import SynergyDetail from "./components/synergy";
import SynergyList from "./components/synergyList";
import LightSwitch from "./components/lightSwitch";
import WorkOrder from "./components/workOrder";
import EfficiencyEcharts from "./components/efficiencyEcharts";
// synergyList
export default {
  name: "baseInfo",
  components: {
    PersonInfo,
    SynergyDetail,
    SynergyList,
    LightSwitch,
    WorkOrder,
    EfficiencyEcharts
  },
  data() {
    return {
      form: {
        password: ""
      },
      enter: "",
      swiperDataList: [
        {
          name: "张三",
          telephone: "18895555555"
        },
        {
          name: "李四",
          telephone: "18895555555"
        }
      ],
      swiperAutoPlay: {
        infoAutoplay: true,
        remindAutoplay: true,
        rightplanAutoplay: true
      },
      remindList: [
        {
          name: "供电局",
          date: "2021年3月10日~15日",
          project: "文创检查",
          time: "2021-02-05 12：00"
        },
        {
          name: "内部",
          date: "2021年3月10日~15日",
          project: "节日保障",
          time: "2021-02-05 12：00"
        },
        {
          name: "供电局2",
          date: "2021年3月10日~15日",
          project: "文创检查",
          time: "2021-02-05 12：00"
        },
        {
          name: "内部2",
          date: "2021年3月10日~15日",
          project: "节日保障",
          time: "2021-02-05 12：00"
        }
      ],
      lightList: [
        {
          time: "18:00~06:09",
          on: "18:00",
          no: "05:00"
        },
        {
          time: "17:00~06:09",
          on: "18:00",
          no: "05:00"
        }
      ],
      switchVal: false,
      chooseInfo: 1,
      dblbData: [
        { value: "24", name: "单灯异常" },
        { value: "24", name: "线路异常" },
        { value: "16", name: "控制设备异常" },
        { value: "24", name: "杆体缺陷" },
        { value: "16", name: "箱柜缺陷" }
      ],
      showDialog: {
        passwordDialogVisible: false, //授权密码
        personInfoVisible: false, //当班信息
        synergyDetailVisible: false, //协同详情
        synergyListVisible: false, //协同提醒
        lightSwitchVisible: false, //一键开关
        workOderVisible: false, //今日工单
        efficiencyVisible: false //本月市民报修
      },
      rowInfo: {}
    };
  },
  mounted() {
    setTimeout(function() {}, 500);
    this.initChart();
    let that = this;
    this.$nextTick(() => {
      that.mySwiperInfo = new Swiper(".swiper-container-info", {
        initialSlide: 0,
        slidesPerGroup: 1,
        direction: "vertical",
        loop: true,
        observer: true,
        observeParents: true,
        freeMode: false,
        autoplay: that.swiperAutoPlay.infoAutoplay ? 2000 : false,
        autoplayDisableOnInteraction: false
      });
      that.mySwiperRemind = new Swiper(".swiper-container-remind", {
        initialSlide: 0,
        slidesPerGroup: 1,
        slidesPerView: 2,
        direction: "vertical",
        loop: true,
        observer: true,
        observeParents: true,
        freeMode: false,
        autoplay: that.swiperAutoPlay.remindAutoplay ? 2000 : false,
        autoplayDisableOnInteraction: false
      });
      that.mySwiperRightPlan = new Swiper(".swiper-container-lightPlan", {
        initialSlide: 0,
        slidesPerGroup: 1,
        // slidesPerView: 1,
        // direction: "vertical",
        loop: true,
        observer: true,
        observeParents: true,
        freeMode: false,
        autoplay: that.swiperAutoPlay.rightplanAutoplay ? 2000 : false,
        autoplayDisableOnInteraction: false
      });
    });
    // swiper-container-lightPlan
    //鼠标覆盖停止自动切换
    document.getElementsByClassName(
      "swiper-container-info"
    )[0].onmouseover = function() {
      that.mySwiperInfo.stopAutoplay();
    };
    document.getElementsByClassName(
      "swiper-container-remind"
    )[0].onmouseover = function() {
      that.mySwiperRemind.stopAutoplay();
    };
    document.getElementsByClassName(
      "swiper-container-lightPlan"
    )[0].onmouseover = function() {
      that.mySwiperRightPlan.stopAutoplay();
    };
    //鼠标离开开始自动切换
    document.getElementsByClassName(
      "swiper-container-info"
    )[0].onmouseout = function() {
      that.mySwiperInfo.startAutoplay();
    };
    document.getElementsByClassName(
      "swiper-container-remind"
    )[0].onmouseout = function() {
      that.mySwiperRemind.startAutoplay();
    };
    document.getElementsByClassName(
      "swiper-container-lightPlan"
    )[0].onmouseout = function() {
      that.mySwiperRightPlan.startAutoplay();
    };
  },

  methods: {
    initChart() {
      var chartDom = document.getElementById("barCharts");
      var myChart = echarts.init(chartDom);
      const dblbData = this.dblbData;
      var option;

      option = {
        // title: {
        //   text: "某站点用户访问来源",
        //   subtext: "纯属虚构",
        //   left: "center"
        // },
        color: ["#B36823", "#14886C", "#D6B200", "#286899", "#0F95AD"],
        tooltip: {
          trigger: "item",
          formatter: "{b} : {c}%"
        },
        legend: {
          orient: "vertical",
          right: "4%",
          top: "20%",
          textStyle: {
            rich: {
              title: {
                fontSize: "16px",
                width: 70,
                color: "#71BCFF"
              },
              bili: {
                color: "#FFFFFF",
                fontSize: "16px"
              }
            }
          },
          icon: "circle",
          itemWidth: 9,
          itemHeight: 9,
          itemGap: 10,
          formatter: function(name) {
            // let total = 0
            let value = 0;
            dblbData.forEach(item => {
              // total += item.value
              if (name === item.name) {
                value = item.value;
              }
            });
            return ` {title|${name}}    {bili|${value}%}`;
          }
        },
        series: [
          {
            type: "pie",
            radius: "65%",
            center: ["20%", "55%"],
            data: this.dblbData,
            label: {
              normal: {
                show: false
              }
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };

      option && myChart.setOption(option);
      // myChart.dispatchAction({ type: "highlight", dataIndex: 0 }); // dataIndex属性伟data传入的索引值
      // myChart.dispatchAction({
      //   type: "showTip",
      //   seriesIndex: 0,
      //   position: [120, 220],
      //   dataIndex: 0
      // }); // 点击生成detip工具条位置
      myChart.on("mouseover", e => {
        if (e.dataIndex !== 0) {
          // 当鼠标移除的时候 使默认的索引值去除默认选中
          myChart.dispatchAction({ type: "downplay", dataIndex: 0 });
        }
      });
      window.onresize = function() {
        myChart.resize();
      };
    },
    // 一键开断
    switchBtn() {
      // this.switchVal = !this.switchVal;
      this.showDialog.lightSwitchVisible = true;
    },

    // 协同提醒详情
    showDetail(data) {
      console.log(data)
      this.rowInfo = data;
      this.showDialog.synergyDetailVisible = true;
    },
    // 当班信息、协同提醒
    passConfirm(data) {
      this.showDialog.passwordDialogVisible = true;
      this.enter = data;
    },
    passBtn() {
      // 请求密码确认接口
      this.handleClose();
      if (this.enter === "synergy") {
        this.showDialog.synergyListVisible = true;
      } else {
        this.showDialog.personInfoVisible = true;
      }
    },
    handleClose() {
      this.showDialog.passwordDialogVisible = false;
      this.form.password = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 700px;
  height: 100%;
  //   background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 90px;
  left: -733px;
  transition: left 2s ease 20s;
  left: 0;
  padding-left: 20px;
  z-index: 1200;
  > ul {
    > li {
      position: relative;
      //   left: 20px;
      height: 327px;
      background: rgba(24, 67, 117, 0.7);
      border: 2px solid #0f455c;
      // opacity: 0.7;
      margin-bottom: 20px;
      &:nth-child(2) {
        height: 218px;
      }
      &:nth-child(3) {
        height: 377px;
      }
      > img {
        position: absolute;
        display: inline-block;
        width: 673px;
        height: 49px;
        z-index: 1000;
      }
      .title {
        
        width: 100%;
        height: 49px;
        position: relative;
        top: 7px;
        z-index: 1001;
        // margin-top: 7px;
        .triangle {
          width: 0;
          height: 0;
          border-top: 14px solid #00aeff;
          border-left: 14px solid transparent;
          border-right: 14px solid transparent;
          transform: rotate(135deg);
        }
        .name {
          position: absolute;
          top: 8px;
          left: 29px;
          width: calc(100% - 30px);
          padding-bottom: 10px;
          font-size: 20px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #dff2ff;
          border-bottom: 1px solid #17487a;
          .activeLine {
            width: 64px;
            height: 2px;
            background: #00aeff;
            position: absolute;
            bottom: -2px;
            left: 0px;
          }
        }
        .oper{
          cursor: pointer;
        }
      }
      .content {
        position: relative;
        height: 100px;
        width: 100%;
        overflow: hidden;
        .swiperUl {
          margin: 21px 0 0 21px;
          display: flex;
          > li {
            display: flex;
            align-items: center;
            margin-left: 68px;
            > img {
              width: 97px;
              height: 79px;
            }
            .des {
              margin-left: 27px;
              p {
                font-size: 18px;
                color: #71bcff;
                &:nth-child(2) {
                  font-size: 24px;
                  color: #ffffff;
                  margin-top: 20px;
                }
              }
            }
          }
        }
      }
      .list {
        position: relative;
        top: 20px;
        left: 29px;
        width: calc(100% - 61px);
        box-sizing: border-box;
        //   width: 100%;
        height: 91px;
        background: rgba(1, 19, 33, 0.45);
        .swiper-container-remind {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }
        .remindUl {
          width: 100%;
          height: 91px;
          position: absolute;
          top: 0;
          border: 1px solid rgba(3, 54, 71, 0.71);
          li {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 23px;
            box-sizing: border-box;
            height: 46px !important;
            border-bottom: 1px solid rgba(3, 54, 71, 0.71);

            div {
              font-size: 18px;
              color: #dbeaee;
            }
          }
        }
      }
      //   亮灯计划
      .lightPlan {
        width: calc(100%-24px);
        margin: 15px auto;
        height: 140px;
        background: rgba(2, 26, 38, 0.45);
        border: 1px solid rgba(3, 54, 71, 0.71);
        display: flex;
        .left {
          position: relative;
          display: flex;
          align-items: center;
          width: 384px;
          height: 100%;
          border-right: 1px solid rgba(3, 54, 71, 0.71);
          .swiper-container-lightPlan {
            width: 290px;
            height: 100%;
            overflow: hidden;
          }
          .swiperPlan {
            width: 290px;
            height: 100%;
            display: flex;
            img {
              width: 138px;
              height: 130px;
            }
            > p {
              position: absolute;
              bottom: 0;
              left: 52px;
              font-size: 16px;
              color: #71bcff;
            }
            .dsc {
              display: inline-block;
              display: flex;
              height: 130px;
              p {
                font-size: 16px;
                color: #71bcff;
                line-height: 27px;
              }
              .data {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                // height: 110px;
                margin-top: 5px;
                .light {
                  font-size: 24px;
                  font-weight: bold;
                  color: #6d88a3;
                  span {
                    margin-left: 17px;
                    font-weight: 400;
                  }
                }
                .on {
                  color: #e3b000;
                }
              }
            }
          }
          .handle {
            position: absolute;
            right: 10px;
            top: 20px;
            height: 130px;
            // width: 100%;
            > p {
              position: absolute;
              top: 0px;
              right: 0px;
              font-size: 16px;
              color: #71bcff;
            }
            .switch {
              position: absolute;
              top: 40px;
              right: 0px;
              width: 96px;
              height: 32px;
              cursor: pointer;
              background: linear-gradient(90deg, #0096ff, #0367c5);
              border-radius: 15px;

              margin-left: 20px;
              p {
                width: 100%;
                font-size: 12px;
                color: #ffffff;
                line-height: 36px;
                position: absolute;
                text-align: center;
                // right: 4px;
                &.on {
                  left: 4px;
                }
              }
              div {
                width: 26px;
                height: 26px;
                background: #ffffff;
                border-radius: 13px;
                margin-left: 1px;
                position: absolute;
                z-index: 1000;
                top: 3px;
                left: 0px;
                transition: left 0.3s;
                &.on {
                  left: 64px;
                }
              }
              &.on {
                background: rgb(220, 223, 230);
              }
            }
          }
        }
        .right {
          .chooseInfo {
            position: relative;
            height: 38px;
            width: 288px;
            border-bottom: 1px solid rgba(3, 54, 71, 0.71);
            ul {
              display: flex;
              align-items: center;
              height: 100%;
              li {
                font-size: 16px;
               cursor: pointer;
                color: #a5d5ff;
                margin: 0 auto;
                &.active {
                  color: #e3b000;
                }
              }
            }
            .line {
              position: absolute;
              left: 31px;
              bottom: -1px;
              width: 98px;
              height: 2px;
              background: #e3b000;
              &.switch2 {
                transition: left 0.3s;
                left: 170px;
              }
              &.switch1 {
                transition: left 0.3s;
                left: 22px;
              }
            }
          }
          .info {
            div {
              margin-top: 18px;
              padding-left: 40px;
              font-size: 16px;
              color: #71bcff;
            }
            p {
              margin-top: 18px;
              padding-left: 40px;
              font-size: 18px;
              color: #dbeaee;
            }
            .weather {
              color: white;
            }
            .weatherStatus {
              margin-top: 13px;
              margin-left: 40px;
              padding: 0;
              width: 76px;
              height: 30px;
              // background: rgba(110, 23, 3, 0);
              border: 1px solid #ff3000;
              border-radius: 17px;
              color: #ff3000;
              line-height: 35px;
              text-align: center;
            }
          }
        }
      }
      //   效能检测
      .efficiency {
        display: flex;
        justify-self: space-between;
        width: calc(100%-24px);
        margin: 15px auto 0;
        .classify {
          cursor: pointer;
          width: 414px;
          height: 113px;
          background: rgba(2, 26, 38, 0.45);
          border: 1px solid rgba(10, 65, 122, 0.71);
          p {
            font-size: 16px;
            color: #ffffff;
            margin: 11px 13px 9px;
          }
          ul {
            display: flex;
            justify-content: space-between;
            margin: 0 13px;
            li {
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              .name {
                font-size: 16px;
                color: #71bcff;
                margin: 0 0 9px 0;
              }
              .num {
                font-size: 24px;
                font-weight: 700;
                color: #0096ff;
              }
            }
          }
        }
        .count {
          cursor: pointer;
          width: 239px;
          height: 113px;
          background: rgba(2, 26, 38, 0.45);
          border: 1px solid rgba(10, 65, 122, 0.71);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          p {
            font-size: 18px;
            color: #71bcff;
            text-align: center;
          }
          div {
            width: 110px;
            height: 36px;
            text-align: center;
            background: rgba(137, 167, 217, 0);
            border: 1px solid #14568d;
            border-radius: 20px;
            font-size: 18px;
            color: #ffffff;
            line-height: 36px;
            margin: 14px auto 0;
          }
        }
      }
      #barCharts {
        width: 100%;
        height: 135px;
        // padding-top: 25px;
      }
    }
  }
}
.mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: #000;
  z-index: 1100;
}
.swiper-container-info {
  width: 100%;
  height: 100%;
  overflow: hidden;
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

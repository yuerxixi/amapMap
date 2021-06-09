<template>
  <div class="wrap">
    <ul>
      <li>
        <img src="@/assets/image/shape@2x.png" alt="" />
        <div class="title">
          <div class="triangle"></div>
          <div class="name">
            资产现状
            <div class="activeLine"></div>
          </div>
        </div>
        <div class="asset">
          <div class="assetNum">
            <ul>
              <li>
                <img src="@/assets/image/pole@2x.png" alt="" />
                <div>
                  <div class="name">
                    路灯
                  </div>
                  <div class="num">
                    32198
                  </div>
                </div>
              </li>
              <li>
                <img src="@/assets/image/electric@2x.png" alt="" />
                <div>
                  <div class="name">
                    配电柜
                  </div>
                  <div class="num">
                    3567
                  </div>
                </div>
              </li>
              <li>
                <img src="@/assets/image/transformer@2x.png" alt="" />
                <div>
                  <div class="name">
                    变压器
                  </div>
                  <div class="num">
                    321
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- 轮播 -->
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <li
                v-for="(item, index) in dataList"
                :key="index"
                class="swiper-slide swiper-slide-active"
              >
                <img :src="item.image" alt="" />
                <div>
                  <p class="assetTitle">
                    {{ item.name }}
                  </p>
                  <p class="total">
                    {{ item.total }}
                  </p>
                </div>
              </li>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
      </li>
      <li>
        <img src="@/assets/image/shape@2x.png" alt="" />
        <div class="title">
          <div class="triangle"></div>
          <div class="name">
            亮灯体征
            <div class="activeLine"></div>
          </div>
        </div>
        <div class="sign">
          <div class="left">
            <ul>
              <li
                @click="(showDialog.lightUpVisible = true), (title = '亮灯率')"
              >
                <p>亮灯率</p>
                <div class="line">
                  <el-progress
                    type="circle"
                    :percentage="25"
                    :color="onlightColor"
                    :stroke-width="12"
                  ></el-progress>
                  <!-- <div class="innder">
                    <div class="outter"></div>
                  </div> -->
                </div>
              </li>
              <li
                @click="
                  (showDialog.lightUpVisible = true), (title = '回路闭合率')
                "
              >
                <p>回路闭合率</p>
                <div class="line rateColor">
                  <el-progress
                    type="circle"
                    :percentage="95"
                    :color="rateColor"
                    :stroke-width="12"
                  ></el-progress>
                  <!-- <div class="innder">
                    <div class="outter"></div>
                  </div> -->
                </div>
              </li>
            </ul>
          </div>
          <div class="right">
            <ul>
              <li
                @click="
                  (showDialog.lightTotalVisible = true),
                    (title = '单灯终端在线统计')
                "
              >
                <div>
                  <span>单灯终端在线统计</span>
                  <span class="sum"><span class="num">123</span>/4146</span>
                </div>
                <el-progress
                  :percentage="40"
                  :color="customColor1"
                  :format="format"
                  :show-text="false"
                ></el-progress>
                <!-- <div class="step">
                  <div class="count"></div>
                </div> -->
                <span class="rate">40%</span>
              </li>
              <li
                class="control"
                @click="
                  (showDialog.lightTotalVisible = true),
                    (title = '集中控制在线统计')
                "
              >
                <div>
                  <span>集中控制在线统计</span>
                  <span class="sum"><span class="num">567</span>/4161</span>
                </div>
                <el-progress
                  :percentage="40"
                  :format="format"
                  :color="customColor2"
                  :show-text="false"
                ></el-progress>
                <!-- <div class="step">
                  <div class="count control"></div>
                </div> -->
                <span class="rate control">92%</span>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <img src="@/assets/image/shape@2x.png" alt="" />
        <div class="title">
          <div class="triangle"></div>
          <div class="name">
            安全卫士
            <div class="activeLine"></div>
          </div>
        </div>
        <div class="safety">
          <div class="left">
            <ul>
              <li
                @click="(showDialog.safetyVisible = true), (title = '漏电监测')"
              >
                <img src="@/assets/image/leakage@2x.png" alt="" />
                <div class="dsc">
                  <p>漏电监测</p>
                  <p class="num">3219856</p>
                </div>
              </li>
              <li
                @click="(showDialog.safetyVisible = true), (title = '在线率')"
              >
                <img src="@/assets/image/online@2x.png" alt="" />
                <div class="dsc">
                  <p>在线率</p>
                  <p class="num">95%</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="right">
            <ul @click="showDialog.safetyTotalVisible = true">
              <li>
                <p>已布防点</p>
                <span class="dot">190</span><span class="smallFont">处</span>
              </li>
              <li>
                <p>本月触发告警</p>
                <span class="warning">200</span
                ><span class="smallFont">次</span>
              </li>
              <li>
                <p>本月触发自动启闭</p>
                <span class="switch">150</span><span class="smallFont">次</span>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
    <light-up
      :visible.sync="showDialog.lightUpVisible"
      :title="title"
    ></light-up>
    <light-total
      :visible.sync="showDialog.lightTotalVisible"
      :title="title"
    ></light-total>
    <safety :visible.sync="showDialog.safetyVisible" :title="title"></safety>
    <safety-total :visible.sync="showDialog.safetyTotalVisible"></safety-total>
    <div class="mask" v-show="showDialog.lightUpVisible||showDialog.lightTotalVisible||showDialog.safetyVisible||showDialog.safetyTotalVisible"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import LightUp from "./components/lightUp";
import LightTotal from "./components/lightTotal";
import safety from "./components/safety";
import safetyTotal from "./components/safetyTotal";
export default {
  name: "dataEcharts",
  components: { LightUp, LightTotal, safety, safetyTotal },
  data() {
    return {
      serviceList: 0,
      customColor1: "#009DD5",
      customColor2: "#4CBCB8",
      onlightColor: "#F6C029",
      rateColor: "#0092C6",
      dataList: [
        {
          image: require("@/assets/image/camera@2x.png"),
          name: "摄像头",
          total: "5601"
        },
        {
          image: require("@/assets/image/ad@2x.png"),
          name: "广告屏",
          total: "5601"
        },
        {
          image: require("@/assets/image/music@2x.png"),
          name: "IP音柱",
          total: "5601"
        },
        {
          image: require("@/assets/image/telephone@2x.png"),
          name: "一键呼叫",
          total: "5601"
        },
        {
          image: require("@/assets/image/recharge@2x.png"),
          name: "充电桩",
          total: "5601"
        },
        {
          image: require("@/assets/image/weather@2x.png"),
          name: "气象环境",
          total: "5601"
        },
        {
          image: require("@/assets/image/signal@2x.png"),
          name: "5G平台",
          total: "5601"
        },
        {
          image: require("@/assets/image/ap@2x.png"),
          name: "AP",
          total: "5601"
        }
      ],
      showDialog: {
        lightUpVisible: false,
        lightTotalVisible: false,
        safetyVisible: false,
        safetyTotalVisible: false
      },
      title: ""
    };
  },
  created() {
    this.init();
  },
  mounted() {
    this.$nextTick(() => {
      this.mySwiper = new Swiper(".swiper-container", {
        initialSlide: 0,
        slidesPerGroup: 1,
        slidesPerView: 4,
        spaceBetween: 22,
        loop: true,
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        observer: true,
        observeParents: true,
        freeMode: false,
        autoplay: 2000,
        autoplayDisableOnInteraction: false
      });
    });
  },
  methods: {
    init() {
      this.serviceList = 8;
    },
    format(percentage) {
      return percentage === 100 ? "满" : `${percentage}%`;
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 700px;
  position: absolute;
  top: 90px;
  right: 20px;
  // margin-right: -733px;
  // animation: mymove 2s ease forwards;
  z-index: 1200;
  @keyframes mymove {
        0% {margin-right:-733px}
        100% {margin-right: 20px;}
      }
  > ul {
    > li {
      position: relative;
      height: 280px;
      background: rgba(24, 67, 117, 0.7);
      border: 2px solid #0f455c;
      // opacity: 0.7;
      margin-bottom: 20px;
      &:nth-child(2) {
        height: 298px;
      }
      &:nth-child(3) {
        height: 347px;
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
      }
      // 资产现状
      .asset {
        margin: 25px 34px 25px 14px;
        .assetNum {
          margin-bottom: 15px;
          ul {
            display: flex;
            justify-content: space-between;
            li {
              display: flex;
              justify-content: start;
              img {
                width: 96px;
                height: 93px;
                display: inline-block;
              }
              .name {
                font-size: 18px;
                color: #71bcff;
                margin-bottom: 21px;
              }
              .num {
                font-size: 30px;
                color: #ffffff;
              }
            }
          }
        }
      }
      // 亮灯体征
      .sign {
        display: flex;
        width: 100%;
        height: 187px;
        .left {
          width: 306px;
          background: rgba(4, 27, 49, 0.45);
          height: 100%;
          margin: 28px 0 0 14px;
          ul {
            display: flex;

            li {
              cursor: pointer;
              margin-top: 18px;
              text-align: center;
              width: 50%;
              font-size: 16px;
              color: #ffffff;
              .line {
                width: 110px;
                height: 110px;
                // background: #19424e;
                border-radius: 50%;
                border: 1px solid #19424e;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 20px auto;
              }
            }
          }
        }
        .right {
          margin: 28px 0 0 14px;
          width: 350px;
          height: 187px;
          background: rgba(4, 27, 49, 0.45);
          ul {
            li {
              cursor: pointer;
              margin: 28px 0 0 12px;
              position: relative;
              > div {
                width: 293px;
                display: flex;
                justify-content: space-between;
                span {
                  font-size: 20px;
                  color: #ffffff;
                }
                .sum {
                  font-size: 20px;
                  color: #ffffff;
                  .num {
                    color: #009dd5;
                  }
                }
              }
              .step {
                margin-top: 12px;
                width: 293px;
                height: 14px;
                background: rgba(22, 66, 84, 0);
                border: 1px solid #0c4355;
                position: relative;
                .count {
                  width: 141px;
                  height: 7px;
                  background: #009dd5;
                  position: absolute;
                  top: 4px;
                }
                .control {
                  width: 244px;
                  background: #4cbcb8;
                }
              }
              .rate {
                position: absolute;
                right: 6px;
                bottom: 2px;
                font-size: 16px;
                color: #009dd5;
              }
              .control {
                color: #4cbcb8;
              }
            }
          }
        }
      }
      // 安全卫士
      .safety {
        display: flex;
        margin: 24px 0 0 14px;
        .left {
          width: 320px;
          height: 232px;
          background: rgba(4, 27, 49, 0.45);
          ul {
            li {
              cursor: pointer;
              display: flex;
              padding: 11px 0 6px 16px;
              box-sizing: border-box;
              img {
                width: 84px;
                height: 84px;
              }
              .dsc {
                margin-left: 35px;
                p {
                  font-size: 18px;
                  color: #71bcff;
                  margin-top: 8px;
                  &.num {
                    margin-top: 15px;
                    font-size: 30px;
                    color: #ffffff;
                  }
                }
              }
            }
          }
        }
        .right {
          margin-left: 12px;
          width: 339px;
          height: 232px;
          background: rgba(4, 27, 49, 0.45);
          ul {
            display: flex;
            flex-wrap: wrap;
            li {
              cursor: pointer;
              width: 50%;
              box-sizing: border-box;
              padding: 20px 29px;
              &:last-child {
                width: 100%;
              }
              p {
                font-size: 16px;
                color: #71bcff;
                margin-bottom: 18px;
              }
              span {
                font-size: 30px;
                font-weight: 700;
              }
              .dot {
                color: #009dd5;
              }
              .warning {
                color: #f7b400;
              }
              .switch {
                color: #f75d00;
              }
              .smallFont {
                color: #71bcff;
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
}
 
.swiper-container {
  height: 72px;
  // width: calc(100% - 40px);
  width: 100%;
  position: relative;
  padding: 0 32px;
  box-sizing: border-box;
  .swiper-wrapper {
    .swiper-slide {
      // width: 25%!important;
      box-sizing: border-box;
      // width: 100%;
      // height: 100%;
      // background: linear-gradient(0deg, #09233c, #004577);
      border: 2px solid;
      border-image: linear-gradient(90deg, #0c2339, #12aaff, #0c2235) 2 2;
      // text-align: center;
      // line-height: 64px;
      display: flex;
      box-sizing: border-box;
      padding: 7px 0 0 17px;
      img {
        width: 16px;
        height: 16px;
        margin: 5px 0 0;
      }
      > div {
        margin-left: 7px;
        .assetTitle {
          font-size: 14px;
          color: #71bcff;
          margin-bottom: 8px;
        }
        .total {
          font-size: 24px;
          color: #d8edff;
        }
      }
    }
  }
  .swiper-button-prev {
    position: absolute;
    left: 0px;
    top: 80%;
    width: 34px;
    height: 34px;
    background: url("../../../assets/image/prev@2x.png") no-repeat;
    background-size: 70% 70%;
  }
  .swiper-button-next {
    position: absolute;
    right: -6px;
    top: 80%;
    width: 34px;
    height: 34px;
    background: url("../../../assets/image/next@2x.png") no-repeat;
    background-size: 70% 70%;
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

/deep/.el-progress-bar__outer {
  margin-top: 12px;
  width: 280px !important;
  height: 14px !important;
  background: rgba(22, 66, 84, 0);
  border: 1px solid #0c4355;
  position: relative;
  border-radius: 0;
}
/deep/.el-progress-bar__inner {
  // width: 138px!important;
  height: 7px !important;
  background: #009dd5;
  position: absolute;
  top: 4px;
  border-radius: 0;
}
/deep/.el-progress-bar .el-progress__text {
  position: absolute;
  right: -40px;
  bottom: 2px;
  font-size: 14px !important;
}
// 环形
/deep/.el-progress-circle {
  width: 92px !important;
  height: 92px !important;
}
/deep/.el-progress__text {
  color: #f6c029;
  font-size: 24px !important;
}
.rateColor /deep/.el-progress__text {
  color: #0092c6;
  font-size: 24px !important;
}
</style>

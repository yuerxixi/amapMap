<template>
  <div id="wrap">
    <div class="left"></div>
    <div class="left right"></div>
    <amap-header></amap-header>
    <div id="app">
      <div class="center">
        <ul class="identification">
          <li>
            <img src="@/assets/image/icon1@2x.png" alt="" />
            <span>路灯</span>
          </li>
          <li>
            <img src="@/assets/image/icon2@2x.png" alt="" />
            <span>配电柜</span>
          </li>
        </ul>
        <div class="switchPage">
          <ul>
            <li
              v-for="(item, index) in switchPage"
              :key="index"
              :class="{ active: index === activeIndex }"
              @click="switchMap(index)"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="select">
          <ul v-show="activeIndex === 0">
            <li>
              <span>配电柜</span>
              <div>
                <!-- <el-popover placement="right" width="40" trigger="click">
                  <el-checkbox
                    :indeterminate="selectIs.onLinenotAll"
                    v-model="selectValAll.onLineAll"
                    @change="handleCheckAllChange"
                    >全选</el-checkbox
                  >
                  <el-checkbox-group
                    v-model="selectVal.onLineStatus"
                    @change="handleCheckedCitiesChange"
                  >
                    <el-checkbox
                      v-for="item in onLineOptions"
                      :key="item"
                      :label="item"
                      >{{ item }}</el-checkbox
                    >
                  </el-checkbox-group>
                  <div class="selectItem" slot="reference">
                    在线状态 <i class="el-icon-arrow-right"></i>
                  </div>
                </el-popover> -->
                <el-popover placement="right" width="40" trigger="click">
                  <el-checkbox
                    :indeterminate="selectIs.abnormalnotAll"
                    v-model="selectValAll.abnormalAll"
                    @change="checkAllChange(2)"
                    >全选</el-checkbox
                  >
                  <el-checkbox-group
                    v-model="selectVal.abnormalStatus"
                    @change="handleCheckedCitiesChange(2)"
                  >
                    <el-checkbox
                      v-for="item in abnormalOptions"
                      :key="item"
                      :label="item"
                      >{{ item }}</el-checkbox
                    >
                  </el-checkbox-group>
                  <div class="selectItem" slot="reference">
                    异常状态<i class="el-icon-arrow-right"></i>
                  </div>
                </el-popover>
                <!-- <el-popover placement="right" width="40" trigger="click">
                   <el-checkbox :indeterminate="selectIs.enablenotAll" v-model="selectValAll.enableAll" @change="handleCheckAllChange">全选</el-checkbox>
                  <el-checkbox-group
                    v-model="selectVal.enableStatus"
                    @change="handleCheckedCitiesChange"
                  >
                    <el-checkbox
                      v-for="item in enableOptions"
                      :key="item"
                      :label="item"
                      >{{ item }}</el-checkbox
                    >
                  </el-checkbox-group>
                  <div class="selectItem" slot="reference">
                    启用状态 <i class="el-icon-arrow-right"></i>
                  </div>
                </el-popover> -->
              </div>
            </li>
            <li>
              <span>路灯</span>
              <div>
                <!-- <el-popover placement="right" width="40" trigger="click">
                   <el-checkbox :indeterminate="selectIs.lightUpnotAll" v-model="selectValAll.lightUpAll" @change="handleCheckAllChange">全选</el-checkbox>
                  <el-checkbox-group
                    v-model="selectVal.lightUpStatus"
                    @change="handleCheckedCitiesChange"
                  >
                    <el-checkbox
                      v-for="item in lightUpOptions"
                      :key="item"
                      :label="item"
                      >{{ item }}</el-checkbox
                    >
                  </el-checkbox-group>
                  <div class="selectItem" slot="reference">
                    亮灯状态 <i class="el-icon-arrow-right"></i>
                  </div>
                </el-popover> -->
                <el-popover placement="right" width="40" trigger="click">
                  <el-checkbox
                    :indeterminate="selectIs.lightAbnormanotlAll"
                    v-model="selectValAll.lightAbnormalAll"
                    @change="checkAllChange(5)"
                    >全选</el-checkbox
                  >
                  <el-checkbox-group
                    v-model="selectVal.lightAbnormalStatus"
                    @change="handleCheckedCitiesChange(5)"
                  >
                    <el-checkbox
                      v-for="item in lightAbnormalOptions"
                      :key="item"
                      :label="item"
                      >{{ item }}</el-checkbox
                    >
                  </el-checkbox-group>
                  <div class="selectItem" slot="reference">
                    异常状态 <i class="el-icon-arrow-right"></i>
                  </div>
                </el-popover>
                <!-- <el-popover placement="right" width="40" trigger="click">
                   <el-checkbox :indeterminate="selectIs.lightEnablenotAll" v-model="selectValAll.lightEnableAll" @change="handleCheckAllChange">全选</el-checkbox>
                  <el-checkbox-group
                    v-model="selectVal.lightEnableStatus"
                    @change="handleCheckedCitiesChange"
                  >
                    <el-checkbox
                      v-for="item in lightEnableOptions"
                      :key="item"
                      :label="item"
                      >{{ item }}</el-checkbox
                    >
                  </el-checkbox-group>
                  <div class="selectItem" slot="reference">
                    启用状态 <i class="el-icon-arrow-right"></i>
                  </div>
                </el-popover> -->
              </div>
            </li>
          </ul>
          <!-- <ul v-show="activeIndex === 1">
            <li>
              <span>智慧路灯</span>
              <div>
                <el-popover placement="right" width="40" trigger="click">
                   <el-checkbox :indeterminate="selectIs.mountnotAll" v-model="selectValAll.mountAll" @change="handleCheckAllChange">全选</el-checkbox>
                  <el-checkbox-group
                    v-model="selectVal.mountStatus"
                    @change="handleCheckedCitiesChange"
                  >
                    <el-checkbox
                      v-for="item in mountOptions"
                      :key="item"
                      :label="item"
                      >{{ item }}</el-checkbox
                    >
                  </el-checkbox-group>
                  <div class="selectItem" slot="reference">
                    挂载类型 <i class="el-icon-arrow-right"></i>
                  </div>
                </el-popover>
              </div>
            </li>
            <li>
              <div>
                <el-popover placement="right" width="40" trigger="click">
                   <el-checkbox :indeterminate="selectIs.lightnotAll" v-model="selectValAll.lightAll" @change="handleCheckAllChange">全选</el-checkbox>
                  <el-checkbox-group
                    v-model="selectVal.lightStatus"
                    @change="handleCheckedCitiesChange"
                  >
                    <el-checkbox
                      v-for="item in lightOptions"
                      :key="item"
                      :label="item"
                      >{{ item }}</el-checkbox
                    >
                  </el-checkbox-group>
                  <div class="selectItem" slot="reference">在线状态 <i class="el-icon-arrow-right"></i></div>
                </el-popover>
              </div>
            </li>
          </ul> -->
        </div>
      </div>
    </div>
    <amap-baseInfo></amap-baseInfo>
    <amap-dataEcharts></amap-dataEcharts>
    <el-dialog
      :visible.sync="dialogVisible"
      width="60%"
      center
      :before-close="handleClose"
    >
      <div class="content">
        <div class="info">
          <p>杆件信息</p>
          <ul>
            <li>灯杆编号：{{ infoData.num }}</li>
            <li>安装位置：{{ infoData.location }}</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import AMap from "AMap";
import AmapHeader from "./header/index";
import AmapBaseInfo from "./baseInfo/index";
import AmapDataEcharts from "./dataEcharts/index";
export default {
  name: "App",
  components: { AmapHeader, AmapBaseInfo, AmapDataEcharts },
  data() {
    return {
      icons: [
        require("@/assets/image/light-on@2x.png"),
        require("@/assets/image/light-on-abnormal@2x.png"),
        require("@/assets/image/light-no@2x.png"),
        require("@/assets/image/light-no-abnormal@2x.png"),
        require("@/assets/image/switchBox-on@2x.png"),
        require("@/assets/image/switchBox-no@2x.png"),
        require("@/assets/image/switchBox-no-fault@2x.png")
      ],
      position: [116.473179, 39.993169],
      switchPage: ["亮灯监控", "智慧路灯"],
      activeIndex: 0,
      selectVal: {
        onLineStatus: [],
        abnormalStatus: [],
        enableStatus: [],
        lightUpStatus: [],
        lightAbnormalStatus: [],
        lightEnableStatus: [],
        mountStatus: [],
        lightStatus: []
      },
      selectValAll: {
        onLineAll: false,
        abnormalAll: false,
        enableAll: false,
        lightUpAll: false,
        lightAbnormalAll: false,
        lightEnableAll: false,
        mountAll: false,
        lightAll: false
      },
      selectIs: {
        onLinenotAll: true,
        abnormalnotAll: true,
        enablenotAll: true,
        lightUpnotAll: true,
        lightAbnormalnotAll: true,
        lightEnablenotAll: true,
        mountnotAll: true,
        lightnotAll: true
      },
      onLineOptions: ["在线", "离线"],
      abnormalOptions: ["正常", "异常"],
      enableOptions: ["启用", "其他"],
      lightUpOptions: ["全亮", "未全亮"],
      lightAbnormalOptions: ["全正常", "有异常"],
      lightEnableOptions: ["全启用", "其它"],
      mountOptions: [
        "摄像头",
        "AP",
        "充电桩",
        "5G平台",
        "IP音柱",
        "一键呼叫",
        "LED显示屏",
        "气象环境"
      ],
      lightOptions: ["无离线", "有离线"],
      dialogVisible: false,
      infoData: {},
      nowZoom: 18,
      map: "",
      cluster:'',
      positionData: []
    };
  },
  created() {
    this.MapInit();
    this.getMapData();
  },
  methods: {
    getMapData() {
      // 接口
      this.positionData = [
        {
          lg: 114.424775,
          ag: 27.822925,
          name: "设备1",
          tyep: 2,
          status: "0",
          infoData: { num: 1244, location: "xxx街道" }
        },
        {
          lg: 114.427939,
          ag: 27.830184,
          name: "设备2",
          tyep: 2,
          status: "1",
          infoData: { num: 1244, location: "xxx街道" }
        },
         {
          lg: 114.424705,
          ag: 27.822925,
          name: "设备1",
          tyep: 2,
          status: "0",
          infoData: { num: 1244, location: "xxx街道" }
        },
        {
          lg: 114.427999,
          ag: 27.830184,
          name: "设备2",
          tyep: 2,
          status: "1",
          infoData: { num: 1244, location: "xxx街道" }
        },
         {
          lg: 114.454775,
          ag: 27.822925,
          name: "设备1",
          tyep: 2,
          status: "0",
          infoData: { num: 1244, location: "xxx街道" }
        },
        {
          lg: 114.429939,
          ag: 27.830184,
          name: "设备2",
          tyep: 2,
          status: "1",
          infoData: { num: 1244, location: "xxx街道" }
        },
        {
          lg: 114.428,
          ag: 27.830164,
          name: "设备2",
          tyep: 2,
          status: "3",
          infoData: { num: 1244, location: "xxx街道" }
        },
        {
          lg: 114.428041,
          ag: 27.830096,
          name: "设备2",
          tyep: 2,
          status: "3",
          infoData: { num: 1244, location: "xxx街道" }
        },
        {
          lg: 114.444775,
          ag: 27.822965,
          name: "设备1",
          tyep: 2,
          status: "1",
          infoData: { num: 1244, location: "xxx街道" }
        },
        { lg: 114.411996, ag: 27.81445, status: "3", name: "设备2", type: 1 }
      ];
      this.addMarker();
    },
    MapInit: function() {
      let that = this;
      that.map = new AMap.Map("app", {
        resizeEnable: true,
        rotateEnable: true,
        pitchEnable: true,
        zoom: 18,
        zooms: [0, 18],
        pitch: 55,
        viewMode: "3D",
        showBuildingBlock: true,
        // expandZoomRange: true,
        center: [114.423564, 27.820856],
        mapStyle: "amap://styles/0cc1ace24dbbbd3b4192945bbadea73d",
        scrollWheel: true
      });

      AMap.plugin(["AMap.ControlBar"], function() {
        // 添加 3D 罗盘控制
        that.map.addControl(new AMap.ControlBar());
      });  
      // that.getCity();    
    },
    // 点标记
    addMarker() {
      let that = this;
       var markers = [];
        //监听zoom
      that.map.on("zoomchange", mapZoom);
      function mapZoom() {
        this.nowZoom = that.map.getZoom();
        console.log(this.nowZoom);
      }
      that.positionData.forEach(item => {
        // 创建一个 Icon
        var startIcon = new AMap.Icon({
          size: new AMap.Size(40, 50),
          image: this.icons[item.status],
          imageSize: new AMap.Size(40, 50)
        });
        var marker = new AMap.Marker({
          position: new AMap.LngLat(item.lg, item.ag),
          // content: `<div><img style="width:100px;height:60px"  src="${
          //   this.icons[item.status]
          // }"></img></div>`,
          // offset: new AMap.Pixel(-15, -15),
          icon: startIcon
        });
        //点聚合
        if(this.nowZoom<=12){
          if(item.status!==1){
            markers.push(marker); 
          }
        }else{
          markers.push(marker); 
        }
            
        var count = markers.length;
        var _renderClusterMarker = function(context) {
          var factor = Math.pow(context.count / count, 1 / 18);
          var div = document.createElement("div");
          var Hue = 180 - factor * 180;
          var bgColor = "hsla(" + Hue + ",100%,50%,0.7)";
          var fontColor = "hsla(" + Hue + ",100%,20%,1)";
          var borderColor = "hsla(" + Hue + ",100%,40%,1)";
          var shadowColor = "hsla(" + Hue + ",100%,50%,1)";
          div.style.backgroundColor = bgColor;
          var size = Math.round(
            30 + Math.pow(context.count / count, 1 / 5) * 20
          );
          div.style.width = div.style.height = size + "px";
          div.style.border = "solid 1px " + borderColor;
          div.style.borderRadius = size / 2 + "px";
          div.style.boxShadow = "0 0 1px " + shadowColor;
          div.innerHTML = context.count;
          div.style.lineHeight = size + "px";
          div.style.color = fontColor;
          div.style.fontSize = "14px";
          div.style.textAlign = "center";
          context.marker.setOffset(new AMap.Pixel(-size / 2, -size / 2));
          context.marker.setContent(div);
        };
        
         if (that.cluster) {
          that.cluster.setMap(null);
          
        }        
        that.map.plugin(["AMap.MarkerClusterer"], function() {
          that.cluster = new AMap.MarkerClusterer(that.map, markers, {
            gridSize: 20,
            zIndex: 2,
            // renderClusterMarker: _renderClusterMarker
          });
        });
        // 将创建的点标记添加到已有的地图实例：
        that.map.add(marker);
        //点标记点击事件
        // marker.on("click", e => {
        //   if (item.type === 1) {
        //     that.markerWindow(e, map, item);
        //   } else {
        //     that.infoData = item.infoData;
        //     that.dialogVisible = true;
        //   }
        // });
      });
     
    },
    // 点击出现弹框信息
    markerWindow(e, map, item) {
      let that = this;
      that.baseInfo = item;
      var content = `<div class="infoShow">          
          <p class="name">设备名称：${item.name}</p>
          <p class="address">设备编号：13254</p>
          <p class="address">设备UID：21230.144777</p>
        </div>`;
      let infoWindow = new AMap.InfoWindow({
        // 是否自动调整窗体到视野内（当信息窗体超出视野范围时，通过该属性设置是否自动平移地图，使信息窗体完全显示）
        autoMove: true,
        // 是否自定义窗体。设为true时，信息窗体外框及内容完全按照content所设的值添加（默认为false，即在系统默认的信息窗体外框中显示content内容）
        isCustom: false,
        anchor: "bottom-center",
        content: content,
        // 弹出位置偏移量，可根据图标大小修改
        offset: new AMap.Pixel(0, -10),
        // 控制是否在鼠标点击地图后关闭信息窗体，默认false，鼠标点击地图后不关闭信息窗体
        closeWhenClickMap: true
      });
      // 这里重点了
      infoWindow.open(map, e.lnglat);
    },
    // 行政区域描边
    getCity(){
      let that=this
      //行政区划查询
      var opts = {
        subdistrict: 1, //返回下一级行政区
        showbiz: false //最后一级返回街道信息
      };
      let district = new AMap.DistrictSearch(opts); //注意：需要使用插件同步下发功能才能这样直接使用
      //说明  district 参数对象是由 第四步引用插件是创建
      district.setLevel("province"); //行政区级别
      district.setExtensions("all");
      //行政区查询
      //按照adcode进行查询可以保证数据返回的唯一性
      let cityCode = "0795"; //注意这个参数必须是字符串,要不然显示不出来的
      district.search(cityCode, function(status, result) {
        if (status === "complete") {
          // 绘制区域
          getData(result.districtList[0]);
        }
      });
      /**
       * 参数说明
       * data- 数据要由官方同步获取,以免后边绘制地图参数发生变化,实例中由步奏					    														5中获取到的result参数中传来
       */
      let polygons = []; //绘制区域面积图的数组
      function getData(data) {
        var bounds = data.boundaries;
        if (bounds) {
          for (var i = 0, l = bounds.length; i < l; i++) {
            var polygon = new AMap.Polygon({
              map: that.map,
              strokeWeight: 1,
              strokeColor: "#0091ea",
              fillColor: "#80d8ff",
              fillOpacity: 0.2,
              path: bounds[i]
            });
            polygons.push(polygon);
          }
          that.map.setFitView(); //地图自适应
        }
      }
    },
    switchMap(index) {
      this.map.clearMap();
      this.positionData = [
        {
          lg: 114.424775,
          ag: 27.822925,
          name: "设备1",
          tyep: 2,
          status: "5",
          infoData: { num: 1244, location: "xxx街道" }
        },
        {
          lg: 114.444775,
          ag: 27.822965,
          name: "设备1",
          tyep: 2,
          status: "6",
          infoData: { num: 1244, location: "xxx街道" }
        },
        { lg: 114.411996, ag: 27.81445, status: "4", name: "设备2", type: 1 }
      ];
      this.addMarker();
      this.activeIndex = index;
    },
    handleClose(done) {
      this.dialogVisible = false;
    },
    checkAllChange(index) {
      if (index === 2) {
        this.selectVal.abnormalStatus = this.selectValAll.abnormalAll
          ? this.abnormalOptions
          : [];
        this.selectIs.abnormalnotAll = false;
        console.log(this.selectVal.abnormalStatus);
      } else if (index === 5) {
        this.selectVal.lightAbnormalStatus = this.selectValAll.lightAbnormalAll
          ? this.lightAbnormalOptions
          : [];
        this.selectIs.lightAbnormalnotAll = false;
        console.log(this.selectVal.lightAbnormalStatus);
      }

      this.map.clearMap();
      this.positionData = [
        {
          lg: 114.424775,
          ag: 27.822925,
          name: "设备1",
          tyep: 2,
          status: "5",
          infoData: { num: 1244, location: "xxx街道" }
        }
      ];
      this.addMarker();
    },
    handleCheckedCitiesChange(index) {
      if (index === 2) {
        let checkedCount = this.selectVal.abnormalStatus.length;
        this.selectValAll.abnormalAll =
          checkedCount === this.abnormalOptions.length;
        this.selectIs.abnormalnotAll =
          checkedCount > 0 && checkedCount < this.abnormalOptions.length;
      } else if (index === 5) {
        let checkedCount = this.selectVal.lightAbnormalStatus.length;
        this.selectValAll.lightAbnormalAll =
          checkedCount === this.lightAbnormalOptions.length;
        this.selectIs.lightAbnormalnotAll =
          checkedCount > 0 && checkedCount < this.lightAbnormalOptions.length;
      }
      this.map.clearMap();
      this.positionData = [
        {
          lg: 114.426775,
          ag: 27.822925,
          name: "设备1",
          tyep: 2,
          status: "3",
          infoData: { num: 1244, location: "xxx街道" }
        }
      ];
      this.addMarker();
    }
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 1080px;
}
</style>

<style lang="scss" scoped>
#wrap {
  width: 100%;
  height: 100%;
  .left {
    position: absolute;
    top: 60px;
    z-index: 998;
    width: 720px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .right {
    right: 0;
  }
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    // height: calc(100% - 70px);
    .test {
      position: absolute;
      z-index: 999;
      width: 2880px;
      background-color: white;
    }
    .center {
      // z-index: 9999;
      // position: absolute;
      // left: 720px;
      // top: 0;

      .identification {
        z-index: 1000;
        position: absolute;
        top: 227px;
        left: 733px;
        li {
          display: flex;
          align-items: center;
          margin-bottom: 40px;
          img {
            width: 69px;
            height: 76px;
          }
          span {
            font-size: 18px;
            width: 60px;
            color: #ffffff;
            margin-left: 14px;
          }
        }
      }
      .switchPage {
        z-index: 1000;
        position: absolute;
        top: 139px;
        left: 50%;
        transform: translateX(-50%);
        width: 350px;
        height: 53px;
        border: 1px solid #0367b5;
        ul {
          display: flex;
          li {
            width: 161px;
            height: 41px;
            margin: 5px;
            color: #71bcff;
            border: 1px solid transparent;
            text-align: center;
            line-height: 41px;
            cursor: pointer;
            &.active {
              color: white;
              background: linear-gradient(90deg, #0096ff, #0367c5);
              border: 1px solid #0367b5;
            }
          }
        }
      }
      .select {
        z-index: 1000;
        position: absolute;
        top: 139px;
        right: 751px;
        ul {
          display: flex;
          justify-content: start;
        }
        li {
          display: flex;
          margin-left: 27px;
          span {
            color: white;
            font-size: 16px;
            margin-right: 15px;
          }
          > div {
            display: flex;
            flex-direction: column;
            border: 1px solid #2765a6;
            > span {
              margin: 0;
              width: 145px;
            }
            .selectItem {
              cursor: pointer;
              position: relative;
              z-index: 1001;
              top: 0;
              padding-left: 20px;
              width: 100%;
              box-sizing: border-box;
              height: 56px;
              line-height: 56px;
              color: white;
              font-size: 18px;
              background: #0b2a49;
              i {
                position: absolute;
                right: 5px;
                top: 50%;
                transform: translateY(-50%);
              }
            }
            .el-select {
              // margin-top: 12px;
              border-radius: 0;
            }
          }
        }
      }
    }
  }
}
.center {
  /deep/.el-select {
    width: 152px;
    // height: 52px;
  }
  /deep/.el-input__inner {
    background: #0b2a49;
    // opacity: 0.7;
    border: 0;
    color: white;
  }
  /deep/.el-input__inner::-webkit-input-placeholder {
    color: white;
  }
  /deep/.el-input__inner::-moz-input-placeholder {
    color: white;
  }
  /deep/.el-input__inner::-ms-input-placeholder {
    color: white;
  }
  /deep/.el-input__prefix,
  /deep/.el-input__suffix,
  /deep/.el-select__caret {
    color: white !important;
  }
  /deep/.el-checkbox {
    width: 100%;
    display: block;
    margin: 0 auto;
    margin-bottom: 16px;
  }
}
/deep/.el-checkbox {
  width: 100%;
}
</style>

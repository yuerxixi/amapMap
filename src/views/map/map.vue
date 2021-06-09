<template>
  <div class="map">
    <div id="container" class="map" tabindex="0"></div>
  </div>
</template>
<script>
import AMap from "AMap";
export default {
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
      
    };
  },
  mounted() {
    this.getMap();
  },
  methods: {
    getMap() {
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
          lg: 114.444775,
          ag: 27.822965,
          name: "设备1",
          tyep: 2,
          status: "1",
          infoData: { num: 1244, location: "xxx街道" }
        },
        { lg: 114.411996, ag: 27.81445, status: "3", name: "设备2", type: 1 }
      ];
      var cluster,
        markers = [];
      var map = new AMap.Map("container", {
        resizeEnable: true,
        rotateEnable: true,
        pitchEnable: true,
        zoom: 18,
        zooms: [11.8, 18],
        pitch: 55,
        viewMode: "3D",
        showBuildingBlock: true,
        // expandZoomRange: true,
        center: [114.423564, 27.820856],
        mapStyle: "amap://styles/0cc1ace24dbbbd3b4192945bbadea73d",
        scrollWheel: true
      });
      this.positionData.map((data) => {
        // 海量生成marker点
        var marker = new AMap.Marker({
          position: new AMap.LngLat(data.lg, data.ag),
          title: data.name,
          content: `<div><img style="width:100px;height:60px"  src="${this.icons[data.status]}"></img></div>`,
          offset: new AMap.Pixel(-15, -15),
        });

        

      var  content = `<div style="width:200px;height:50px;">${data.name},${data.lg},${data.ag}<div>
                         详情</div></div>`;
        content.replace(/undefined/g, "");

        // 窗体信息
        let infoWindow = new AMap.InfoWindow({
          content: content, //使用默认信息窗体框样式，显示信息内容
          offset: new AMap.Pixel(0, -15),
        });
        //监听marker的点击事件
        AMap.event.addListener(marker, "click", function (e) {
          infoWindow.open(
            map,
            // 窗口信息的位置
            marker.getPosition(data.lg, data.ag)
          );
        });
        markers.push(marker);

        //添加监听事件，当前缩放级别
        AMap.event.addListener(map, "zoomend", function () {
          var zoom = map.getZoom();
          // 关闭信息窗体
          map.clearInfoWindow(infoWindow);
        });
      });
      //使用renderClusterMarker属性实现聚合点的完全自定义绘制
      var count = markers.length;
      var _renderClusterMarker = function (context) {
        var factor = Math.pow(context.count / count, 1 / 18);
        var div = document.createElement("div");
        var Hue = 180 - factor * 180;
        var bgColor = "hsla(" + Hue + ",100%,50%,0.7)";
        var fontColor = "hsla(" + Hue + ",100%,20%,1)";
        var borderColor = "hsla(" + Hue + ",100%,40%,1)";
        var shadowColor = "hsla(" + Hue + ",100%,50%,1)";
        div.style.backgroundColor = bgColor;
        var size = Math.round(30 + Math.pow(context.count / count, 1 / 5) * 20);
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
      if (cluster) {
        cluster.setMap(null);
      }
      // 点聚合样式
      map.plugin(["AMap.MarkerClusterer"],function() {
      cluster = new AMap.MarkerClusterer(map, markers, {
        gridSize: 80,
      });
      })
    },
  },
};
</script>
<style lang="scss" scope>
.map {
  width: 100%;
  height: 100%;
  #container {
    width: 100%;
    height: 100%;
  }
}
</style>
<template>
  <div class="bg">
    <img src="../../../assets/image/top@2x.png" alt="" />
    <div class="center">
      <div class="line">
        <div
          v-for="(item, index) in lineNum"
          :key="index"
          :class="{ activeLine: item === activeIndex }"
        ></div>
      </div>
      <div class="title">
        宜春中心城区城市照明智慧监控管理平台
      </div>
      <div class="line">
        <div
          v-for="(item, index) in lineNum"
          :key="index"
          :class="{ activeLine: item === activeIndex }"
        ></div>
        
      </div>
    </div>
    <div class="time">
      <span>{{ date }}</span
      ><span>{{ time }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      date: "",
      time: "",
      lineNum: 12,
      activeIndex:1
    };
  },
  created() {
    this.clockUpdate();
  },
  methods: {
    clockUpdate() {
      setInterval(() => {
        this.updateTime();
        if(this.activeIndex<this.lineNum){
            this.activeIndex+=1
        }else{
            this.activeIndex=1;
        }
      }, 1000);
    },
    updateTime() {
      var cd = new Date();
      this.time =
        this.zeroPadding(cd.getHours(), 2) +
        ":" +
        this.zeroPadding(cd.getMinutes(), 2) +
        ":" +
        this.zeroPadding(cd.getSeconds(), 2);
      this.date =
        this.zeroPadding(cd.getFullYear(), 4) +
        "-" +
        this.zeroPadding(cd.getMonth() + 1, 2) +
        "-" +
        this.zeroPadding(cd.getDate(), 2);
    },
    zeroPadding(num, digit) {
      var zero = "";
      for (var i = 0; i < digit; i++) {
        zero += "0";
      }
      return (zero + num).slice(-digit);
    }
  }
};
</script>

<style lang="scss" scoped>
.bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1200;
  width: 2880px;
  height: 97px;
  
  img {
    width: 2880px;
    height: 97px;
    display: inline-block;
  }
  .center {
    // position: absolute;
    // top: 32px;
    height: 100%;
    display: flex;
    justify-content: center;
    margin:-70px 0 0 ;
    .line {
      height: 3px;
      div {
        display: inline-block;
        width: 32px;
        height: 3px;
        background: #00bcfb;
        opacity: 0.5;
        margin-left: 3px;        
      }
      .activeLine {
        animation: line 0.5s ease normal running;
        opacity: 1;
      }
      @keyframes line {
        0% {opacity: 0.5;}
        75% {opacity: 0.7;}
        100% {opacity: 1;}
      }
    }
    .title {
      font-family: YXBT;
      font-size: 42px;
      font-weight: bold;
      color: #dff2ff;
      // text-shadow: 0px 3px 1px rgba(0, 0, 0, 0.67);
      margin: -10px 139px 0;
    }
  }
  .time {
    position: absolute;
    right: 25px;
    top: 0px;
    
    span {
      display: inline-block;      
      font-family: YXBT;
      line-height: 85px;
      font-size: 24px;
      font-weight: bold;
      color: #4d91d6;
      margin-left: 47px;
      &:last-child{
        width: 120px;
      }
    }
  }
}
</style>

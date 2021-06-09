<template>
  <div class="login">
    <div class="login-bg">
      <h1 class="login-title">
        老人数据管理工具
      </h1>
      <div class="login-btn">
        <span @click="loginOnClick" >
        8888
        </span>
      </div>
    </div>
  </div>
</template>
<script>
  import { yiyang} from '@/api/api';
  import md5 from 'js-md5';
  import { Toast } from 'mand-mobile'
export default {
  name: 'Login',
  data () {
    return {
      userData: null,
      user: {
        phone: '',
        password: ''
      }
    }
  },
  mounted () {
    //Toast.succeed('您需要先登录哦！', 1500)
  },
  methods: {
    loginOnClick () {
      this.loginAjax()
    },
    loginAjax () {
      sessionStorage.setItem('user', "4242442")
      this.$router.push({ path: '/baiduMap' })
      let params={
        userName:this.user.phone,
        password:md5(this.user.password)
      }
      yiyang.login(params).then((res)=>{
        if(res.code==200){
          let tmpUser = JSON.stringify(res.data)
          // 登录信息存到本地
          sessionStorage.setItem('user', tmpUser)
          this.$router.push({ path: '/chooseElderType' })

        }else{

        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

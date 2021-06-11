/**
 * Created by zhengshufa on 2018/7/31.
 */
 import axios from 'axios'
 import qs from 'qs'
 import router from '../router/index'
 // const http = axios.create({
 //   baseURL: process.env.NODE_ENV === "production" ? "http://127.0.0.1:8080" : "http://192.168.32.119:8080"
 // })
 axios.defaults.baseURL = process.env.NODE_ENV === "production" ? "http://127.0.0.1:8080" : "http://192.168.32.119:8080"
 
 axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
 axios.defaults.withCredentials=true;
 const config = {
   headers:{'Content-Type':'multipart/form-data'}
 };
 
 let base = '';
 
 //设置请求头
 axios.interceptors.request.use(function (config) {
     //判断如果登录了就把token配置到axios的协议中
     let token = sessionStorage.getItem("token")
     if (token) {
         config.headers['token'] = token
     }
     return config;
 }, function (error) {
     return Promise.reject(error)
 })
 // 登录
 export function loginpass(params) {
   return axios.post(`api/user/login`,(params)).then(
     (res) => {
       return res.data
     }
 )
 }
 // 获取当班人员信息
 export function personGetInfo(params) {
   return axios.get(`api/person/getInfo`,(params)).then(
     res => res.data
 )
 }
 // 获取分页查询当班人员信息
 export function personQueryPage(params) {
   return axios.get(`api/person/queryPage?limit=${params.limit}&page=${params.page}`,(params)).then(
     res => res.data
 )
 }
 // 当班人员删除
 export function personDel(params) {
   return axios.post(`api/person/delete`,(params)).then(
     res => res.data
 )
 }
 // 新增人员信息
 export function personAdd(params) {
   return axios.post(`api/person/add`,(params)).then(
     res => res.data
 )
 }
 // 获取协同信息
 export function remindInfo(params) {
   return axios.get(`api/remind/getInfo`,(params)).then(
     res => res.data
 )
 }
 // 获取分页查询协同信息
 export function remindQueryPage(params) {
   return axios.get(`api/remind/queryPage?limit=${params.limit}&page=${params.page}`,(params)).then(
     res => res.data
 )
 }
 // 新增协同信息
 export function remindAdd(params) {
   return axios.post(`api/remind/add`,(params)).then(
     res => res.data
 )
 }
 
 // 编辑协同信息
 export function remindUpdate(params) {
   return axios.post(`api/remind/update`,(params)).then(
     res => res.data
 )
 }
 // 删除协同信息
 export function remindDel(params) {
   return axios.post(`api/remind/delete`,(params)).then(
     res => res.data
 )
 }
 
 // 亮灯计划-开灯
 export function lightTurnOn(params) {
   return axios.get(`api/light/turnOn`,(params)).then(
     res => res.data
 )
 }
 // 亮灯计划-关灯
 export function lightTurnOff(params) {
   return axios.get(`api/light/turnOff`,(params)).then(
     res => res.data
 )
 }
 // 亮灯计划-朝暮信息
 export function lightMorningNight(params) {
   return axios.get(`api/light/getMorningNight`,(params)).then(
     res => res.data
 )
 }
 // 亮灯计划-天气
 export function lightWeather(params) {
   return axios.get(`api/light/getWeather`,(params)).then(
     res => res.data
 )
 }
 // 亮灯计划-今天昨天开关灯时间
 export function lightTime(params) {
   return axios.get(`api/light/getLightTime`,(params)).then(
     res => res.data
 )
 }
 
 // 效能监测-今日新增、处理、完成工单
 export function effectOrder(params) {
   return axios.get(`api/effect/getTodayOrder`,(params)).then(
     res => res.data
 )
 }
 // 效能监测-本月市民报修
 export function effectCitizenRepair(params) {
   return axios.get(`api/effect/getCitizenRepair`,(params)).then(
     res => res.data
 )
 }
 // 效能监测-异常占比
 export function effectAbnormalProportion(params) {
   return axios.get(`api/effect/getAbnormalProportion`,(params)).then(
     res => res.data
 )
 }
 // 资产现状 
 export function assetsDeviceNumber(params) {
   return axios.get(`api/assets/getDeviceNumber`,(params)).then(
     res => res.data
 )
 }
 // 亮灯体征 
 export function signLight(params) {
   return axios.get(`api/sign/getLightSign`,(params)).then(
     res => res.data
 )
 }
 // 安全卫士
 export function safeInfo(params) {
   return axios.get(`api/safe/getSafeInfo`,(params)).then(
     res => res.data
 )
 }
 // 地图灯杆
 export function mapPole(params) {
   return axios.get(`api/map/getPole`,(params)).then(
     res => res.data
 )
 }
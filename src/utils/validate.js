/** 正则验证规则 */

/* 合法uri */
export function validateURL (textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母 */
export function validateLowerCase (str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母 */
export function validateUpperCase (str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母 */
export function validatAlphabets (str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

export function getTime () {
  let now = new Date()
  let year = now.getFullYear() // 年
  let month = now.getMonth() + 1 // 月
  let day = now.getDate() // 日

  let hh = now.getHours() // 时
  let mm = now.getMinutes() // 分
  let ss = now.getSeconds()

  let time = {
    date1: `${year}年${month}月${day}日`,
    date2: `${year}/${month}/${day}`,
    date3: `${year}年${month}月${day}日/${hh}:${mm}:${ss}`,
    date4: `${hh}:${mm}:${ss}`
  }
  return time
}
/* 是否手机号码或者固话*/
export function validatePhoneTwo(rule, value, callback) {
  const reg = /^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$/
  if (value === '' || value === undefined || value == null) {
    callback()
  } else {
    if ((!reg.test(value)) && value !== '') {
      callback(new Error('请输入正确的电话号码或者固话号码'))
    } else {
      callback()
    }
  }
}
/* 是否手机号码*/
export function validatePhone(rule, value, callback) {
  const reg = /^[1][3,4,5,7,8][0-9]{9}$/
  if (value === '' || value === undefined || value == null) {
    callback(new Error('请输入手机号码'))
  } else {
    if ((!reg.test(value)) && value !== '') {
      callback(new Error('请输入正确的手机号码'))
    } else {
      callback()
    }
  }
}
/* 姓名*/
export function validateName(rule, value, callback) {
  const reg = /^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{2,20})$/
  if (value === '' || value === undefined || value == null) {
    callback(new Error('请输入姓名'))
  } else {
    if ((!reg.test(value)) && value !== '') {
      callback(new Error('请输入正确的姓名'))
    } else {
      callback()
    }
  }
}
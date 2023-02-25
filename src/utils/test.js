// 该文件定义验证手机格式/邮箱格式/url格式等等

/**
 * 验证电子邮箱格式
 * @param value
 * @returns {boolean}
 */

function email(value) {
  return /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(
    value
  )
}

/**
 * 验证手机格式
 * @param value
 * @returns {boolean}
 */
function mobile(value) {
  return /^1[3-9]\d{9}$/.test(value)
}

/**
 * 是否短信验证码
 * @param value
 * @param len
 * @returns {boolean}
 */
function code(value, len = 6) {
  return new RegExp(`^\\d{${len}}$`).test(value)
}

/**
 * 是否固定电话
 * @param value
 * @returns {boolean}
 */
function landline(value) {
  let reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/
  return reg.test(value)
}

/**
 * 验证URL格式
 * @param value
 * @returns {boolean}
 */
function url(value) {
  return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/.test(value)
}

/**
 * 验证日期格式
 * @param value
 * @returns {boolean}
 */
function date(value) {
  return !/Invalid|NaN/.test(new Date(value).toString())
}

/**
 * 验证ISO类型的日期格式
 * @param value
 * @returns {boolean}
 */
function dateISO(value) {
  return /^\d{4}[/-](0?[1-9]|1[012])[/-](0?[1-9]|[12][0-9]|3[01])$/.test(value)
}

/**
 * 验证整数
 * @param value
 * @returns {boolean}
 */
function digits(value) {
  return /^\d+$/.test(value)
}

/**
 * 验证身份证号码
 * @param value
 * @returns {boolean}
 */
function idCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
    value
  )
}

/**
 * 是否车牌号
 * @param value
 * @returns {boolean}
 */
function carNo(value) {
  // 新能源车牌
  const xreg =
    /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/
  // 旧车牌
  const creg =
    /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/
  if (value.length === 7) {
    return creg.test(value)
  } else if (value.length === 8) {
    return xreg.test(value)
  } else {
    return false
  }
}

/**
 * 金额,只允许2位小数
 * @param value
 * @returns {boolean}
 */
function amount(value) {
  //金额，只允许保留两位小数
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value)
}

/**
 * 中文
 * @param value
 * @returns {boolean}
 */
function chinese(value) {
  let reg = /^[\u4e00-\u9fa5]+$/gi
  return reg.test(value)
}

/**
 * 验证十进制数字
 * @param value
 * @returns {boolean}
 */
function number(value) {
  return /^[+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value)
}

/**
 * 只能输入字母
 * @param value
 * @returns {boolean}
 */
function letter(value) {
  return /^[a-zA-Z]*$/.test(value)
}

/**
 * 只能是字母或者数字
 * @param value
 * @returns {boolean}
 */
function enOrNum(value) {
  //英文或者数字
  let reg = /^[0-9a-zA-Z]*$/g
  return reg.test(value)
}

/**
 * 验证是否包含某个值
 * @param value
 * @param param
 * @returns {boolean}
 */
function contains(value, param) {
  return value.indexOf(param) >= 0
}

/**
 * 验证一个值范围[min, max]
 * @param value
 * @param param
 * @returns {boolean|boolean}
 */
function range(value, param) {
  return value >= param[0] && value <= param[1]
}

/**
 * 验证一个长度范围[min, max]
 * @param value
 * @param param
 * @returns {boolean|boolean}
 */
function rangeLength(value, param) {
  return value.length >= param[0] && value.length <= param[1]
}

/**
 * 判断是否为空
 * @param value
 * @returns {boolean}
 */
function empty(value) {
  switch (typeof value) {
    case 'undefined':
      return true
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0)
        return true
      break
    case 'boolean':
      if (!value) return true
      break
    case 'number':
      if (0 === value || isNaN(value)) return true
      break
    case 'object':
      if (null === value || value.length === 0) return true
      for (let i in value) {
        return false
      }
      return true
  }
  return false
}

/**
 * 是否json字符串
 * @param value
 * @returns {boolean}
 */
function jsonString(value) {
  if (typeof value == 'string') {
    try {
      let obj = JSON.parse(value)
      if (typeof obj == 'object' && obj) {
        return true
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  }
  return false
}

/**
 * 是否数组
 * @param value
 * @returns {arg is any[]|boolean}
 */
function array(value) {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(value)
  } else {
    return Object.prototype.toString.call(value) === '[object Array]'
  }
}

/**
 * 是否对象
 * @param value
 * @returns {boolean}
 */
function object(value) {
  return Object.prototype.toString.call(value) === '[object Object]'
}

export {
  email,
  mobile,
  url,
  date,
  dateISO,
  digits,
  idCard,
  carNo,
  amount,
  chinese,
  number,
  letter,
  enOrNum,
  contains,
  range,
  rangeLength,
  empty,
  jsonString,
  landline,
  object,
  array,
  code
}


// base64按6个字节分割， 2^6  最多也就64个字符
const _codelist = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

function strToBase64 (str) {
  // 空字符串 直接返回 空字符串
  if (!str) return ''
  // 这里偷个懒把utf16多个字节的字符 转为utf8 (不标准！！！)
  str = encodeURIComponent(str)
  let bin = ''
  let i = 0
  while (i < str.length) {
    // 获取ascii码
    let code = str.charCodeAt(i)
    // 转为二进制 并且补0到 8位
    code = code.toString(2).padStart(8, '0')
    bin += code
    i++
  }
  return binaryToBase64(bin)
}

function binaryToBase64 (bin, codelist = _codelist) {
  if (typeof bin !== 'string') return ''
  let result = ''
  let i = 0
  binArr = []
  while (i < bin.length) {
    // 获取每6个bit的二进制
    let s = bin.substr(i, 6)
    // 转为10进制
    s = parseInt(s, 2)
    // 从对应字符列表取值
    result += codelist[s]
    i += 6
  }
  let pad = result.length % 4
  while (pad--) {
    result += '='
  }
  return result
}

function base64ToStr (s, codelist = _codelist) {
  if (!s) return ''
  // 去掉末尾的 = 号，最多只会调2次， 比使用replace 要快很多
  while (s[s.length - 1] === '=') {
    s = s.substr(0, s.length - 1)
  }
  let i = 0
  let bin = ''
  while (i < s.length) {
    let code = codelist.indexOf(s[i])
    if (code < 0 || code > 63) {
      throw new Error('base64 字符串有误')
    }
    // 这里的二进制只有6位
    bin += code.toString(2).padStart(6, '0')
    i++
  }
  i = 0
  let result = ''
  while (i < bin.length) {
    // 取8bit
    let code = bin.substr(i, 8)
    // 转为10进制
    code = parseInt(code, 2)
    result += String.fromCharCode(code)
    i += 8
  }
  // 前面偷懒用了encodeURIComponent 这里解码一下
  result = decodeURIComponent(result)
  return result
}
let test = strToBase64('abcd')
console.log(test)

console.log(base64ToStr(test))

let chinese = strToBase64('你好！')
console.log(chinese)

console.log(base64ToStr(chinese))

/**
 * 实现超大型整数的 加减乘除方法 （暂不考虑小数部分）
 */

// 超长整数加法
function add (x, y) {
    x = trimPrefix(x)
    y = trimPrefix(y)
    if (!isNumber(x)) return NaN
    if (!isNumber(y)) return NaN
    if (x === '0') return y
    if (y === '0') return x
    // 结果是否负数flag
    let negative = false
    // 如果都为负数相加 则结果为负
    if (isNegative(x) && isNegative(y)) {
        negative = true
        x = x.substr(1)
        y = y.substr(1)
    } else if (isNegative(x)) {
        // 只有一个数字为负， 直接调用减数方法
        x = x.substr(1)
        return minus(y, x)
    } else if (isNegative(y)) {
        // 同上
        y = y.substr(1)
        return minus(x, y)
    }

    // 从数字末尾开始做加法
    let lastX = x.length - 1
    let lastY = y.length - 1
    let i = lastX > lastY ? lastX : lastY
    let result = ''
    // 高位是否+1
    let decimal = 0
    while (i >= 0) {
        let a = lastX >= 0 ? Number(x.charAt(lastX)) : 0
        let b = lastY >= 0 ? Number(y.charAt(lastY)) : 0
        decimal = a + b + decimal
        // 如果结果大于9 高位需要+1
        if (decimal > 9) {
            result = decimal % 10 + result
            decimal = 1
        } else {
            result = decimal + result
            decimal = 0
        }
        lastX--
        lastY--
        i--
    }
    result = (negative ? '-' : '') + result
    return result
}
// 超长整数减法
function minus(x, y) {
    x = trimPrefix(x)
    y = trimPrefix(y)
    if (!isNumber(x)) return NaN
    if (!isNumber(y)) return NaN
    if (x === '0') return y
    if (y === '0') return x
    // 相等的2个数字相减 结果为0
    if (x === y) return 0
    // 如果都为负数相减 则结果为 |y| - |x|
    if (isNegative(x) && isNegative(y)) {
        x = x.substr(1)
        y = y.substr(1)
        let temp = x
        x = y
        y = temp
    } else if (isNegative(x)) {
        // 只有一个数字为负， 直接调用加数方法
        x = x.substr(1)
        return add(x, y)
    } else if (isNegative(y)) {
        // 同上
        y = y.substr(1)
        return add(x, y)
    }
    // 结果是否负数flag
    let negative = false
    // 长度小于被减数，则肯定是负数
    if (x.length < y.length) {
        negative = true
        // 被减数互换, 结果等于 大数减小数的 负数
        let temp = x
        x = y
        y = temp
        // [x, y] = [y, x] // node.js不太支持
    } else if (x.length === y.length) {
        // 长度相等，从第一位依次比较大小
        let i = 0
        while (i < x.length) {
            if (x.charAt[i] < y.charAt[i]) {
                negative = true
                let temp = x
                x = y
                y = temp
                // [x, y] = [y, x]
                break
            }
            i++
        }
    }
    // 从数字末尾开始做减法
    let lastX = x.length - 1
    let lastY = y.length - 1
    let result = ''
    // 是否从高位借值 flag
    let lease = 0

    let i = lastX > lastY ? lastX : lastY
    while (i >= 0) {
        let a = lastX >= 0 ? Number(x.charAt(lastX)) : 0
        // 去掉除法借的10
        a = a + lease
        let b = lastY >= 0 ? Number(y.charAt(lastY)) : 0
        // 如果被减数 小于减数， 从高位借10
        if (a < b) {
            a = 10 + a
            lease = -1
        } else {
            lease = 0
        }
        result = a - b + result
        lastX--
        lastY--
        i--
    }
    // 去掉首位的0，如果有的话
    result = trimPrefix(result)
    result = (negative ? '-' : '') + result
    return result
}

// 乘法
function multiply(x, y) {
    x = trimPrefix(x)
    y = trimPrefix(y)
    if (!isNumber(x)) return NaN
    if (!isNumber(y)) return NaN
    // 有1个数为零 则结果为0
    if (x === '0' || y === '0') return 0
    // 结果是否负数flag
    let negative = false
    // 2个负数相乘 结果为正
    if (isNegative(x) && isNegative(y)) {
        negative = false
        x = x.substr(1)
        y = y.substr(1)
    } else if (isNegative(x)) {
        negative = true
        x = x.substr(1)
    } else if (isNegative(y)) {
        negative = true
        y = y.substr(1)
    }

    // 从数字末尾开始做乘法
    let lastX = x.length - 1
    let lastY = y.length - 1
    let result = '0'
    // 乘以的基数补0
    let padding = ''
    // 从个位开始 乘以乘数
    while (lastX >= 0) {
        let a = Number(x.charAt(lastX))
        // 如果为0 直接跳过
        if (a !== 0) {
            // 本次乘以结果
            let sum = ''
            // 高位进多少的 缓存值
            let temp = 0
            // 如果等于1 ，则结果直接为被乘数
            if (a === 1) {
                sum = y
                lastY = -1
            }
            while (lastY >= 0) {
                let b = Number(y.charAt(lastY))
                temp = a * b + temp
                if (temp > 9) {
                    sum = temp % 10 + sum
                    temp = Number.parseInt(temp / 10)
                } else {
                    sum = temp + sum
                    temp = 0
                }
                if (lastY === 0 && temp) {
                    sum = temp + sum
                }
                lastY--
            }
            result = add(result, sum + padding)
        }
        
        // 乘数每进以为， 被乘数的值要 * 10
        padding = padding + '0'
        lastX--
        lastY = y.length - 1
    }
    result = (negative ? '-' : '') + result
    return result
}
// 除法
function divide(x, b) {

}

// 去掉首位的空格
function trimPrefix(x) {
    if (typeof x === 'number') {
        x = x + ''
    }
    x = x.trim()
    x = x.split('.')[0]
    let i = 0
    // 如果全为0 直接返回0
    if (/^0*$/.test(x)) {
        return '0'
    }
    // 去掉开头的0
    while (i >= 0) {
        if (x.charAt(i) !== '0') {
            break
        } else {
            i++
        }
    }
    if (i > 0) {
        return x.substr(i)
    }
    return x
}

function isNumber(x) { 
    return /^-?\d+(\.\d+)?$/.test(x)
}
// 是否是负数
function isNegative(x) { 
    return x.charAt(0) === '-'
}


let a = '666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666'
let b = '77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777'
let r = '744444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444443'
console.log(add(a, b) == r)
console.log(add(10241024, 10241024) == (10241024 + 10241024) + '')
console.log(minus(a, b))
console.log(minus(10241024, 1024) == (10241024 - 1024) + '')
console.log(minus(1024, 10241024))
console.log((1024 - 10241024) + '')
console.log(multiply('-1024', 10241024))
console.log(multiply('-1024', '-10241024'))
console.log(multiply(a, b))
console.log((1024 * -10241024) + '')

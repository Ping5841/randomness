import { isPrimitive } from './util'

/**
 * VNode 类
 * 用js对象 来表示一个dom对象
 */
export default class VNode {
    constructor(
        tag, // 标签名
        data, //  attribute、props、class, on 等等
        children, // 子节点
        text, // 该节点中的文本内容
        elm, // 真实dom的引用
    ) {
        this.tag = tag
        this.data = data || {}
        this.children = children
        this.text = text
        this.elm = elm
    }
}
// 快速创建文本节点
export function createTextVNode(text) {
    return new VNode(undefined, undefined, undefined, text)
}

// 创建节点
export function createVNode(tag, data, children) {
    let text
    if (children !== undefined) {
        // 如果children 是纯文本
        if (isPrimitive(children)) {
            text = children
            children = undefined
        } else if (!Array.isArray(children)) {
            // 如果不是数组类型， 转为数组
            children = [children]
        }
    } else if (data !== undefined) {
        //  如果没有传children， 且data 为数组， 则data为children 
        if (Array.isArray(data)) {
            children = data
        } else if (isPrimitive(data)) {
            // 如果data 是纯文本
            text = data
            data = undefined
        }
    }
    if (children !== undefined) {
        // 如果子节点中 有纯文本类型， 直接生成文本节点
        children = children.map(child => {
            if (isPrimitive(child)) {
                return createTextVNode(child)
            }
            return child
        })
    }

    return new VNode(tag, data, children, text, undefined);
}

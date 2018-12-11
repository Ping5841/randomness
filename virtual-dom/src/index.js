/**
 * web端节点操作方法
 */
import nodeOpts from './node-opts'
/**
 * web端节点需要更新的各种属性
 */
import modules from './modules'

import { createPatch } from './patch'
import VNode, { createVNode } from './vnode'


export const h = createVNode
export const patch = createPatch(nodeOpts, modules)

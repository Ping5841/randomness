import nodeOpts from './node-opts'
import { createPatch } from './patch'
import modules from './modules'
import VNode, { createVNode } from './vnode'

export const h = createVNode
export const patch = createPatch(nodeOpts, modules)

/**
 * diff模块
 * 1.首先提供一个工厂方法， 传入nodeOpts 和 modules，分别是 节点操作api 和 要挂载到hook上的模块
 *   这里返回一个 patch方法， 传入新vnode 和旧vnode，进行差异化更新
 * */ 
import VNode from './vnode'
import {
    isDef,
    isUndef,
    isPrimitive
} from './util'
// 所有的生命周期函数类型
const hooks = ['create', 'update', 'remove', 'destroy', 'insert']

const emptyNode = new VNode('', {}, [], undefined, undefined)

// 创建patch的 工厂方法
export function createPatch(nodeOpts, modules) {
    let cbs = {}
    for (let i = 0; i < hooks.length; i++) {
        cbs[hooks[i]] = []
        for (let j = 0; j < modules.length; j++) {
            const hook = modules[j][hooks[i]]
            if (hook !== undefined) {
                cbs[hooks[i]].push(hook)
            }
        }
    }
    // 是否是Vnode
    function isVNode(vnode) {
        return vnode.tag !== undefined
    }
    // 是否一致
    function sameVNode(vnode, other) {
        // 标签名一致， key一致 则认为是可以复用的节点
        return vnode.tag === other.tag && vnode.key === other.key
    }
    function emptyNodeAt(elm) {
        return new VNode(nodeOpts.tagName(elm).toLowerCase(), null, null, undefined, elm);
    }
    // 创建element元素
    function createElm(vnode, insertedVnodeQueue) {
        let data = vnode.data;
        if (data !== undefined) {
            if (data.init) {
                data.init(vnode)
            }
        }
        let children = vnode.children,
            tag = vnode.tag
        if (tag !== undefined) {
            // Parse selector
            const elm = vnode.elm = nodeOpts.createElement(tag)
            for (let i = 0; i < cbs.create.length; ++i) {
                cbs.create[i](emptyNode, vnode)
            }
            if (Array.isArray(children)) {
                for (let i = 0; i < children.length; ++i) {
                    const ch = children[i];
                    if (ch != null) {
                        nodeOpts.appendChild(elm, createElm(ch, insertedVnodeQueue));
                    }
                }
            } else if (isPrimitive(vnode.text)) {
                nodeOpts.appendChild(elm, nodeOpts.createTextNode(vnode.text));
            }
            if (data) {
                if (data.create) {
                    data.create(emptyNode, vnode)
                }
                if (data.insert) {
                    insertedVnodeQueue.push(vnode)
                }
            }
        } else {
            vnode.elm = nodeOpts.createTextNode(vnode.text)
        }
        return vnode.elm;
    }
    // 创建移除element的延迟调用方法， 需要在每个module执行完remove后 再调用
    function createRmCb(childElm, listeners) {
        return function rmCb() {
            if (--listeners === 0) {
                const parent = nodeOpts.parentNode(childElm);
                nodeOpts.removeChild(parent, childElm);
            }
        };
    }
    function addVnodes(parentElm,
        before,
        vnodes,
        startIdx,
        endIdx,
        insertedVnodeQueue) {
        for (; startIdx <= endIdx; ++startIdx) {
            const ch = vnodes[startIdx]
            if (ch != null) {
                nodeOpts.insertBefore(parentElm, createElm(ch, insertedVnodeQueue), before)
            }
        }
    }
    function removeVnodes(
        parentElm,
        vnodes,
        startIdx,
        endIdx) {
        for (; startIdx <= endIdx; ++startIdx) {
            let listeners, rm, ch = vnodes[startIdx]
            if (ch != null) {
                if (isDef(ch.tag)) {
                    // 调用destory hook
                    invokeDestroyHook(ch)
                    // 调用remove hook
                    listeners = cbs.remove.length + 1
                    rm = createRmCb(ch.elm, listeners)
                    for (let i = 0; i < cbs.remove.length; ++i) {
                        cbs.remove[i](ch, rm)
                    }
                    if (ch.data && ch.data.remove) {
                        ch.data.remove(ch, rm);
                    } else {
                        rm();
                    }
                } else { // Text node
                    nodeOpts.removeChild(parentElm, ch.elm);
                }
            }
        }
    }
    function createKeyToOldIdx(children, beginIdx, endIdx) {
        let map = {}
        for (let i = beginIdx; i <= endIdx; ++i) {
            let ch = children[i]
            if (ch != null) {
                let key = ch.key
                if (key !== undefined) map[key] = i
            }
        }
        return map;
    }
    function invokeDestroyHook(vnode) {
        let data = vnode.data;
        if (data !== undefined) {
            if (data.destroy) {
                data.destroy(vnode)
            }
            for (let i = 0; i < cbs.destroy.length; ++i) {
                cbs.destroy[i](vnode)
            }
            if (vnode.children !== undefined) {
                for (let j = 0; j < vnode.children.length; ++j) {
                    let i = vnode.children[j]
                    if (i != null && typeof i !== "string") {
                        invokeDestroyHook(i);
                    }
                }
            }
        }
    }
    // 子节点对比
    function updateChildren(parentElm,
        oldCh,
        newCh,
        insertedVnodeQueue) {
        let oldStartIdx = 0, newStartIdx = 0
        let oldEndIdx = oldCh.length - 1
        let oldStartVnode = oldCh[0]
        let oldEndVnode = oldCh[oldEndIdx]
        let newEndIdx = newCh.length - 1
        let newStartVnode = newCh[0]
        let newEndVnode = newCh[newEndIdx]
        let oldKeyToIdx, idxInOld, elmToMove, before;

        while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
            if (oldStartVnode == null) {
                oldStartVnode = oldCh[++oldStartIdx]
            } else if (oldEndVnode == null) {
                oldEndVnode = oldCh[--oldEndIdx]
            } else if (newStartVnode == null) {
                newStartVnode = newCh[++newStartIdx]
            } else if (newEndVnode == null) {
                newEndVnode = newCh[--newEndIdx]
            } else if (sameVNode(oldStartVnode, newStartVnode)) {
                patchVNode(oldStartVnode, newStartVnode, insertedVnodeQueue);
                oldStartVnode = oldCh[++oldStartIdx]
                newStartVnode = newCh[++newStartIdx]
            } else if (sameVNode(oldEndVnode, newEndVnode)) {
                patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
                oldEndVnode = oldCh[--oldEndIdx]
                newEndVnode = newCh[--newEndIdx]
            } else if (sameVNode(oldStartVnode, newEndVnode)) {
                patchVNode(oldStartVnode, newEndVnode, insertedVnodeQueue);
                nodeOpts.insertBefore(parentElm, oldStartVnode.elm, nodeOpts.nextSibling(oldEndVnode.elm))
                oldStartVnode = oldCh[++oldStartIdx]
                newEndVnode = newCh[--newEndIdx]
            } else if (sameVNode(oldEndVnode, newStartVnode)) {
                patchVNode(oldEndVnode, newStartVnode, insertedVnodeQueue);
                nodeOpts.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)
                oldEndVnode = oldCh[--oldEndIdx]
                newStartVnode = newCh[++newStartIdx]
            } else {
                if (oldKeyToIdx === undefined) {
                    oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
                }
                idxInOld = oldKeyToIdx[newStartVnode.key]
                if (isUndef(idxInOld)) { // New element
                    nodeOpts.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm)
                    newStartVnode = newCh[++newStartIdx];
                } else {
                    elmToMove = oldCh[idxInOld];
                    if (elmToMove.sel !== newStartVnode.sel) {
                        nodeOpts.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm)
                    } else {
                        patchVNode(elmToMove, newStartVnode, insertedVnodeQueue);
                        oldCh[idxInOld] = undefined
                        nodeOpts.insertBefore(parentElm, (elmToMove.elm), oldStartVnode.elm)
                    }
                    newStartVnode = newCh[++newStartIdx];
                }
            }
        }
        if (oldStartIdx <= oldEndIdx || newStartIdx <= newEndIdx) {
            if (oldStartIdx > oldEndIdx) {
                before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
                addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
            } else {
                removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
            }
        }
    }

    // 新旧VNode 对比
    function patchVNode(oldVnode, vnode, insertedVnodeQueue) {
        const elm = vnode.elm = oldVnode.elm
        let oldCh = oldVnode.children
        let ch = vnode.children
        if (oldVnode === vnode) return
        // 如果不是纯文本节点 
        if (isUndef(vnode.text)) {
            // 如果都有children， 执行updateChildren方法
            if (isDef(oldCh) && isDef(ch)) {
                if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue)
            } else if (isDef(ch)) { // 如果只有新Vnode 有children， 执行添加
                // 如果有text， 先添加text
                if (isDef(oldVnode.text)) nodeOpts.setTextContent(elm, '')
                addVnodes(elm, null, ch, 0, ch .length - 1, insertedVnodeQueue)
            } else if (isDef(oldCh)) { // 如果新Vnode没有children， 执行删除
                removeVnodes(elm, oldCh, 0, oldCh.length - 1)
            } else if (isDef(oldVnode.text)) { 
                // 如果新Vnode没有children， 老Vnode有text
                nodeOpts.setTextContent(elm, '')
            }
        } else if (oldVnode.text !== vnode.text) { // 纯文本节点， text不同才需要更新
            // 移除原dom下的 所有children
            if (isDef(oldCh)) {
                removeVnodes(elm, oldCh, 0, oldCh.length - 1)
            }
            nodeOpts.setTextContent(elm, vnode.text)
        }
    }


    return function patch (oldVnode, vnode) {
        // 如果没有传新vnode， 表示删除， 直接卸载
        if (isUndef(vnode)) {
            if (isDef(oldVnode)) invokeDestroyHook(oldVnode)
            return
        }
        // 需要调用hook的缓存数组， 最后统一调用
        let insertedVnodeQueue = []
        // 不是Vnode 则创建为空vnode对象
        if (!isVNode(oldVnode)) {
            oldVnode = emptyNodeAt(oldVnode)
        }
        // 如果是可复用节点， 直接进行patch操作
        if (sameVNode(oldVnode, vnode)) {
            patchVNode(oldVnode, vnode, insertedVnodeQueue);
        } else {
            elm = oldVnode.elm
            parent = nodeOpts.parentNode(elm);
            // 为vnode 创建elm
            createElm(vnode, insertedVnodeQueue);

            if (parent !== null) {
                nodeOpts.insertBefore(parent, vnode.elm, nodeOpts.nextSibling(elm));
                removeVnodes(parent, [oldVnode], 0, 0);
            }
        }

        for (let i = 0; i < insertedVnodeQueue.length; ++i) {
            insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i])
        }
        for (let i = 0; i < cbs.insert.length; ++i) {
            cbs.insert[i]()
        };
        return vnode;
    }
}

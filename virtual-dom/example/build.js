/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./example/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./example/index.js":
/*!**************************!*\
  !*** ./example/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var virtual_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! virtual-dom */ "./src/index.js");

var views = Object(virtual_dom__WEBPACK_IMPORTED_MODULE_0__["h"])('div', 'text', [Object(virtual_dom__WEBPACK_IMPORTED_MODULE_0__["h"])('p', {
  style: 'color: red;'
}, [Object(virtual_dom__WEBPACK_IMPORTED_MODULE_0__["h"])('span', 'this is span')]), Object(virtual_dom__WEBPACK_IMPORTED_MODULE_0__["h"])('p', {
  style: 'color: red;'
}, ['hehhehe'])]);
var vnode = Object(virtual_dom__WEBPACK_IMPORTED_MODULE_0__["patch"])(document.getElementById('app'), views);
var views2 = Object(virtual_dom__WEBPACK_IMPORTED_MODULE_0__["h"])('div', 'text', [Object(virtual_dom__WEBPACK_IMPORTED_MODULE_0__["h"])('p', {
  style: 'color: red;'
}, ['tetst']), Object(virtual_dom__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
  style: 'color: red;'
}, ['hehhehe'])]);
setTimeout(function () {
  Object(virtual_dom__WEBPACK_IMPORTED_MODULE_0__["patch"])(vnode, views2);
}, 2000);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: h, patch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patch", function() { return patch; });
/* harmony import */ var _node_opts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node-opts */ "./src/node-opts.js");
/* harmony import */ var _patch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patch */ "./src/patch.js");
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules */ "./src/modules/index.js");
/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vnode */ "./src/vnode.js");




var h = _vnode__WEBPACK_IMPORTED_MODULE_3__["createVNode"];
var patch = Object(_patch__WEBPACK_IMPORTED_MODULE_1__["createPatch"])(_node_opts__WEBPACK_IMPORTED_MODULE_0__["default"], _modules__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./src/modules/attributes.js":
/*!***********************************!*\
  !*** ./src/modules/attributes.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  create: function create() {
    console.log('create');
  },
  update: function update() {
    console.log('update');
  }
});

/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/modules/attributes.js");

/* harmony default export */ __webpack_exports__["default"] = ([_attributes__WEBPACK_IMPORTED_MODULE_0__["default"]]);

/***/ }),

/***/ "./src/node-opts.js":
/*!**************************!*\
  !*** ./src/node-opts.js ***!
  \**************************/
/*! exports provided: domOpts, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domOpts", function() { return domOpts; });
/**
 * 将dom的操作方法的抽象分离， 可以统一不同平台和浏览器等等的api
 */
function createElement(tagName) {
  return document.createElement(tagName);
}

function createElementNS(namespaceURI, qualifiedName) {
  return document.createElementNS(namespaceURI, qualifiedName);
}

function createTextNode(text) {
  return document.createTextNode(text);
}

function createComment(text) {
  return document.createComment(text);
}

function insertBefore(parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild(node, child) {
  node.removeChild(child);
}

function appendChild(node, child) {
  node.appendChild(child);
}

function parentNode(node) {
  return node.parentNode;
}

function nextSibling(node) {
  return node.nextSibling;
}

function tagName(elm) {
  return elm.tagName;
}

function setTextContent(node, text) {
  node.textContent = text;
}

function getTextContent(node) {
  return node.textContent;
}

function isElement(node) {
  return node.nodeType === 1;
}

function isText(node) {
  return node.nodeType === 3;
}

function isComment(node) {
  return node.nodeType === 8;
}

var domOpts = {
  createElement: createElement,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  getTextContent: getTextContent,
  isElement: isElement,
  isText: isText,
  isComment: isComment
};
/* harmony default export */ __webpack_exports__["default"] = (domOpts);

/***/ }),

/***/ "./src/patch.js":
/*!**********************!*\
  !*** ./src/patch.js ***!
  \**********************/
/*! exports provided: createPatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPatch", function() { return createPatch; });
/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode */ "./src/vnode.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util.js");
/**
 * diff模块
 * 1.首先提供一个工厂方法， 传入nodeOpts 和 modules，分别是 节点操作api 和 要挂载到hook上的模块
 *   这里返回一个 patch方法， 传入新vnode 和旧vnode，进行差异化更新
 * */

 // 所有的生命周期函数类型

var hooks = ['create', 'update', 'remove', 'destroy', 'insert'];
var emptyNode = new _vnode__WEBPACK_IMPORTED_MODULE_0__["default"]('', {}, [], undefined, undefined); // 创建patch的 工厂方法

function createPatch(nodeOpts, modules) {
  var cbs = {};

  for (var i = 0; i < hooks.length; i++) {
    cbs[hooks[i]] = [];

    for (var j = 0; j < modules.length; j++) {
      var hook = modules[j][hooks[i]];

      if (hook !== undefined) {
        cbs[hooks[i]].push(hook);
      }
    }
  } // 是否是Vnode


  function isVNode(vnode) {
    return vnode.tag !== undefined;
  } // 是否一致


  function sameVNode(vnode, other) {
    // 标签名一致， key一致 则认为是可以复用的节点
    return vnode.tag === other.tag && vnode.key === other.key;
  }

  function emptyNodeAt(elm) {
    return new _vnode__WEBPACK_IMPORTED_MODULE_0__["default"](nodeOpts.tagName(elm).toLowerCase(), null, null, undefined, elm);
  } // 创建element元素


  function createElm(vnode, insertedVnodeQueue) {
    var data = vnode.data;

    if (data !== undefined) {
      if (data.init) {
        data.init(vnode);
      }
    }

    var children = vnode.children,
        tag = vnode.tag;

    if (tag !== undefined) {
      // Parse selector
      var _elm = vnode.elm = nodeOpts.createElement(tag);

      for (var _i = 0; _i < cbs.create.length; ++_i) {
        cbs.create[_i](emptyNode, vnode);
      }

      if (Array.isArray(children)) {
        for (var _i2 = 0; _i2 < children.length; ++_i2) {
          var ch = children[_i2];

          if (ch != null) {
            nodeOpts.appendChild(_elm, createElm(ch, insertedVnodeQueue));
          }
        }
      } else if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isPrimitive"])(vnode.text)) {
        nodeOpts.appendChild(_elm, nodeOpts.createTextNode(vnode.text));
      }

      if (data) {
        if (data.create) {
          data.create(emptyNode, vnode);
        }

        if (data.insert) {
          insertedVnodeQueue.push(vnode);
        }
      }
    } else {
      vnode.elm = nodeOpts.createTextNode(vnode.text);
    }

    return vnode.elm;
  } // 创建移除element的延迟调用方法， 需要在每个module执行完remove后 再调用


  function createRmCb(childElm, listeners) {
    return function rmCb() {
      if (--listeners === 0) {
        var _parent = nodeOpts.parentNode(childElm);

        nodeOpts.removeChild(_parent, childElm);
      }
    };
  }

  function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];

      if (ch != null) {
        nodeOpts.insertBefore(parentElm, createElm(ch, insertedVnodeQueue), before);
      }
    }
  }

  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var listeners = void 0,
          rm = void 0,
          ch = vnodes[startIdx];

      if (ch != null) {
        if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isDef"])(ch.tag)) {
          // 调用destory hook
          invokeDestroyHook(ch); // 调用remove hook

          listeners = cbs.remove.length + 1;
          rm = createRmCb(ch.elm, listeners);

          for (var _i3 = 0; _i3 < cbs.remove.length; ++_i3) {
            cbs.remove[_i3](ch, rm);
          }

          if (ch.data && ch.data.remove) {
            ch.data.remove(ch, rm);
          } else {
            rm();
          }
        } else {
          // Text node
          nodeOpts.removeChild(parentElm, ch.elm);
        }
      }
    }
  }

  function createKeyToOldIdx(children, beginIdx, endIdx) {
    var map = {};

    for (var _i4 = beginIdx; _i4 <= endIdx; ++_i4) {
      var ch = children[_i4];

      if (ch != null) {
        var key = ch.key;
        if (key !== undefined) map[key] = _i4;
      }
    }

    return map;
  }

  function invokeDestroyHook(vnode) {
    var data = vnode.data;

    if (data !== undefined) {
      if (data.destroy) {
        data.destroy(vnode);
      }

      for (var _i5 = 0; _i5 < cbs.destroy.length; ++_i5) {
        cbs.destroy[_i5](vnode);
      }

      if (vnode.children !== undefined) {
        for (var _j = 0; _j < vnode.children.length; ++_j) {
          var _i6 = vnode.children[_j];

          if (_i6 != null && typeof _i6 !== "string") {
            invokeDestroyHook(_i6);
          }
        }
      }
    }
  } // 子节点对比


  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
    var oldStartIdx = 0,
        newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, before;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (oldStartVnode == null) {
        oldStartVnode = oldCh[++oldStartIdx];
      } else if (oldEndVnode == null) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (newStartVnode == null) {
        newStartVnode = newCh[++newStartIdx];
      } else if (newEndVnode == null) {
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVNode(oldStartVnode, newStartVnode)) {
        patchVNode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVNode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVNode(oldStartVnode, newEndVnode)) {
        patchVNode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        nodeOpts.insertBefore(parentElm, oldStartVnode.elm, nodeOpts.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVNode(oldEndVnode, newStartVnode)) {
        patchVNode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        nodeOpts.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (oldKeyToIdx === undefined) {
          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        }

        idxInOld = oldKeyToIdx[newStartVnode.key];

        if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isUndef"])(idxInOld)) {
          // New element
          nodeOpts.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];

          if (elmToMove.sel !== newStartVnode.sel) {
            nodeOpts.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
          } else {
            patchVNode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            nodeOpts.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
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
  } // 新旧VNode 对比


  function patchVNode(oldVnode, vnode, insertedVnodeQueue) {
    var elm = vnode.elm = oldVnode.elm;
    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (oldVnode === vnode) return; // 如果不是纯文本节点 

    if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isUndef"])(vnode.text)) {
      // 如果都有children， 执行updateChildren方法
      if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isDef"])(oldCh) && Object(_util__WEBPACK_IMPORTED_MODULE_1__["isDef"])(ch)) {
        if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue);
      } else if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isDef"])(ch)) {
        // 如果只有新Vnode 有children， 执行添加
        // 如果有text， 先添加text
        if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isDef"])(oldVnode.text)) nodeOpts.setTextContent(elm, '');
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isDef"])(oldCh)) {
        // 如果新Vnode没有children， 执行删除
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isDef"])(oldVnode.text)) {
        // 如果新Vnode没有children， 老Vnode有text
        nodeOpts.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      // 纯文本节点， text不同才需要更新
      // 移除原dom下的 所有children
      if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isDef"])(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      }

      nodeOpts.setTextContent(elm, vnode.text);
    }
  }

  return function patch(oldVnode, vnode) {
    // 如果没有传新vnode， 表示删除， 直接卸载
    if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isUndef"])(vnode)) {
      if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isDef"])(oldVnode)) invokeDestroyHook(oldVnode);
      return;
    } // 需要调用hook的缓存数组， 最后统一调用


    var insertedVnodeQueue = []; // 不是Vnode 则创建为空vnode对象

    if (!isVNode(oldVnode)) {
      oldVnode = emptyNodeAt(oldVnode);
    } // 如果是可复用节点， 直接进行patch操作


    if (sameVNode(oldVnode, vnode)) {
      patchVNode(oldVnode, vnode, insertedVnodeQueue);
    } else {
      elm = oldVnode.elm;
      parent = nodeOpts.parentNode(elm); // 为vnode 创建elm

      createElm(vnode, insertedVnodeQueue);

      if (parent !== null) {
        nodeOpts.insertBefore(parent, vnode.elm, nodeOpts.nextSibling(elm));
        removeVnodes(parent, [oldVnode], 0, 0);
      }
    }

    for (var _i7 = 0; _i7 < insertedVnodeQueue.length; ++_i7) {
      insertedVnodeQueue[_i7].data.hook.insert(insertedVnodeQueue[_i7]);
    }

    for (var _i8 = 0; _i8 < cbs.insert.length; ++_i8) {
      cbs.insert[_i8]();
    }

    ;
    return vnode;
  };
}

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: isPrimitive, isUndef, isDef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndef", function() { return isUndef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDef", function() { return isDef; });
function isPrimitive(value) {
  return typeof value === 'string' || typeof value === 'number';
}
function isUndef(value) {
  return value === undefined || value === null;
}
function isDef(value) {
  return value !== undefined && value !== null;
}

/***/ }),

/***/ "./src/vnode.js":
/*!**********************!*\
  !*** ./src/vnode.js ***!
  \**********************/
/*! exports provided: default, createTextVNode, createVNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextVNode", function() { return createTextVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVNode", function() { return createVNode; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var VNode = function VNode(tag, // 标签名
data, //  attribute、props、class, on 等等
children, // 子节点
text, // 该节点中的文本内容
elm) // 真实dom的引用
{
  _classCallCheck(this, VNode);

  this.tag = tag;
  this.data = data || {};
  this.children = children;
  this.text = text;
  this.elm = elm;
}; // 快速创建文本节点



function createTextVNode(text) {
  return new VNode(undefined, undefined, undefined, text);
} // 创建节点

function createVNode(tag, data, children) {
  var text;

  if (children !== undefined) {
    // 如果children 是纯文本
    if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"])(children)) {
      text = children;
      children = undefined;
    } else if (!Array.isArray(children)) {
      // 如果不是数组类型， 转为数组
      children = [children];
    }
  } else if (data !== undefined) {
    //  如果没有传children， 且data 为数组， 则data为children 
    if (Array.isArray(data)) {
      children = data;
    } else if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"])(data)) {
      // 如果data 是纯文本
      text = data;
      data = undefined;
    }
  }

  if (children !== undefined) {
    // 如果子节点中 有纯文本类型， 直接生成文本节点
    children = children.map(function (child) {
      if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"])(child)) {
        return createTextVNode(child);
      }

      return child;
    });
  }

  return new VNode(tag, data, children, text, undefined);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbm9kZS1vcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9wYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdm5vZGUuanMiXSwibmFtZXMiOlsidmlld3MiLCJoIiwic3R5bGUiLCJ2bm9kZSIsInBhdGNoIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZpZXdzMiIsInNldFRpbWVvdXQiLCJjcmVhdGVWTm9kZSIsImNyZWF0ZVBhdGNoIiwibm9kZU9wdHMiLCJtb2R1bGVzIiwiY3JlYXRlIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZSIsImF0dHJpYnV0ZXMiLCJjcmVhdGVFbGVtZW50IiwidGFnTmFtZSIsImNyZWF0ZUVsZW1lbnROUyIsIm5hbWVzcGFjZVVSSSIsInF1YWxpZmllZE5hbWUiLCJjcmVhdGVUZXh0Tm9kZSIsInRleHQiLCJjcmVhdGVDb21tZW50IiwiaW5zZXJ0QmVmb3JlIiwicGFyZW50Tm9kZSIsIm5ld05vZGUiLCJyZWZlcmVuY2VOb2RlIiwicmVtb3ZlQ2hpbGQiLCJub2RlIiwiY2hpbGQiLCJhcHBlbmRDaGlsZCIsIm5leHRTaWJsaW5nIiwiZWxtIiwic2V0VGV4dENvbnRlbnQiLCJ0ZXh0Q29udGVudCIsImdldFRleHRDb250ZW50IiwiaXNFbGVtZW50Iiwibm9kZVR5cGUiLCJpc1RleHQiLCJpc0NvbW1lbnQiLCJkb21PcHRzIiwiaG9va3MiLCJlbXB0eU5vZGUiLCJWTm9kZSIsInVuZGVmaW5lZCIsImNicyIsImkiLCJsZW5ndGgiLCJqIiwiaG9vayIsInB1c2giLCJpc1ZOb2RlIiwidGFnIiwic2FtZVZOb2RlIiwib3RoZXIiLCJrZXkiLCJlbXB0eU5vZGVBdCIsInRvTG93ZXJDYXNlIiwiY3JlYXRlRWxtIiwiaW5zZXJ0ZWRWbm9kZVF1ZXVlIiwiZGF0YSIsImluaXQiLCJjaGlsZHJlbiIsIkFycmF5IiwiaXNBcnJheSIsImNoIiwiaXNQcmltaXRpdmUiLCJpbnNlcnQiLCJjcmVhdGVSbUNiIiwiY2hpbGRFbG0iLCJsaXN0ZW5lcnMiLCJybUNiIiwicGFyZW50IiwiYWRkVm5vZGVzIiwicGFyZW50RWxtIiwiYmVmb3JlIiwidm5vZGVzIiwic3RhcnRJZHgiLCJlbmRJZHgiLCJyZW1vdmVWbm9kZXMiLCJybSIsImlzRGVmIiwiaW52b2tlRGVzdHJveUhvb2siLCJyZW1vdmUiLCJjcmVhdGVLZXlUb09sZElkeCIsImJlZ2luSWR4IiwibWFwIiwiZGVzdHJveSIsInVwZGF0ZUNoaWxkcmVuIiwib2xkQ2giLCJuZXdDaCIsIm9sZFN0YXJ0SWR4IiwibmV3U3RhcnRJZHgiLCJvbGRFbmRJZHgiLCJvbGRTdGFydFZub2RlIiwib2xkRW5kVm5vZGUiLCJuZXdFbmRJZHgiLCJuZXdTdGFydFZub2RlIiwibmV3RW5kVm5vZGUiLCJvbGRLZXlUb0lkeCIsImlkeEluT2xkIiwiZWxtVG9Nb3ZlIiwicGF0Y2hWTm9kZSIsInBhdGNoVm5vZGUiLCJpc1VuZGVmIiwic2VsIiwib2xkVm5vZGUiLCJ2YWx1ZSIsImNyZWF0ZVRleHRWTm9kZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFD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TUFBSWtCLFFBQVEsS0FBS2xCLFNBQWpCLEVBQTRCO0FBQ3hCO0FBQ0FrQixZQUFRLEdBQUdBLFFBQVEsQ0FBQ3dCLEdBQVQsQ0FBYSxVQUFBekQsS0FBSyxFQUFJO0FBQzdCLFVBQUlxQyx5REFBVyxDQUFDckMsS0FBRCxDQUFmLEVBQXdCO0FBQ3BCLGVBQU8rRSxlQUFlLENBQUMvRSxLQUFELENBQXRCO0FBQ0g7O0FBQ0QsYUFBT0EsS0FBUDtBQUNILEtBTFUsQ0FBWDtBQU1IOztBQUVELFNBQU8sSUFBSWMsS0FBSixDQUFVUyxHQUFWLEVBQWVRLElBQWYsRUFBcUJFLFFBQXJCLEVBQStCekMsSUFBL0IsRUFBcUN1QixTQUFyQyxDQUFQO0FBQ0gsQyIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZXhhbXBsZS9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7XG4gICAgcGF0Y2gsXG4gICAgaFxufSBmcm9tICd2aXJ0dWFsLWRvbSdcblxuXG5sZXQgdmlld3MgPSBoKCdkaXYnLCAndGV4dCcsIFtcbiAgICBoKCdwJywgeyBzdHlsZTogJ2NvbG9yOiByZWQ7JyB9LCBbXG4gICAgICAgIGgoJ3NwYW4nLCAndGhpcyBpcyBzcGFuJylcbiAgICBdKSxcbiAgICBoKCdwJywgeyBzdHlsZTogJ2NvbG9yOiByZWQ7JyB9LCBbXG4gICAgICAgICdoZWhoZWhlJ1xuICAgIF0pXG5dKVxuXG5sZXQgdm5vZGUgPSBwYXRjaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyksIHZpZXdzKVxuXG5cbmxldCB2aWV3czIgPSBoKCdkaXYnLCAndGV4dCcsIFtcbiAgICBoKCdwJywgeyBzdHlsZTogJ2NvbG9yOiByZWQ7JyB9LCBbXG4gICAgICAgJ3RldHN0J1xuICAgIF0pLFxuICAgIGgoJ2RpdicsIHsgc3R5bGU6ICdjb2xvcjogcmVkOycgfSwgW1xuICAgICAgICAnaGVoaGVoZSdcbiAgICBdKVxuXSlcbnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHBhdGNoKHZub2RlLCB2aWV3czIpXG59LCAyMDAwKVxuXG4iLCJpbXBvcnQgbm9kZU9wdHMgZnJvbSAnLi9ub2RlLW9wdHMnXG5pbXBvcnQgeyBjcmVhdGVQYXRjaCB9IGZyb20gJy4vcGF0Y2gnXG5pbXBvcnQgbW9kdWxlcyBmcm9tICcuL21vZHVsZXMnXG5pbXBvcnQgVk5vZGUsIHsgY3JlYXRlVk5vZGUgfSBmcm9tICcuL3Zub2RlJ1xuXG5leHBvcnQgY29uc3QgaCA9IGNyZWF0ZVZOb2RlXG5leHBvcnQgY29uc3QgcGF0Y2ggPSBjcmVhdGVQYXRjaChub2RlT3B0cywgbW9kdWxlcylcbiIsIlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGUnKVxuICAgIH0sXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1cGRhdGUnKVxuICAgIH1cbn1cbiIsImltcG9ydCBhdHRyaWJ1dGVzIGZyb20gJy4vYXR0cmlidXRlcydcblxuXG5leHBvcnQgZGVmYXVsdCBbXG4gICAgYXR0cmlidXRlc1xuXVxuIiwiXG4vKipcbiAqIOWwhmRvbeeahOaTjeS9nOaWueazleeahOaKveixoeWIhuemu++8jCDlj6/ku6Xnu5/kuIDkuI3lkIzlubPlj7DlkozmtY/op4jlmajnrYnnrYnnmoRhcGlcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZ05hbWUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2VVUkksIHF1YWxpZmllZE5hbWUpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHROb2RlKHRleHQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dClcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tbWVudCh0ZXh0KSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGV4dClcbn1cblxuZnVuY3Rpb24gaW5zZXJ0QmVmb3JlKHBhcmVudE5vZGUsIG5ld05vZGUsIHJlZmVyZW5jZU5vZGUgKSB7XG4gICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZSlcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGQobm9kZSwgY2hpbGQpIHtcbiAgICBub2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kQ2hpbGQobm9kZSwgY2hpbGQpIHtcbiAgICBub2RlLmFwcGVuZENoaWxkKGNoaWxkKVxufVxuXG5mdW5jdGlvbiBwYXJlbnROb2RlKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5wYXJlbnROb2RlO1xufVxuXG5mdW5jdGlvbiBuZXh0U2libGluZyhub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUubmV4dFNpYmxpbmdcbn1cblxuZnVuY3Rpb24gdGFnTmFtZShlbG0pIHtcbiAgICByZXR1cm4gZWxtLnRhZ05hbWVcbn1cblxuZnVuY3Rpb24gc2V0VGV4dENvbnRlbnQobm9kZSwgdGV4dCApe1xuICAgIG5vZGUudGV4dENvbnRlbnQgPSB0ZXh0XG59XG5cbmZ1bmN0aW9uIGdldFRleHRDb250ZW50KG5vZGUpICB7XG4gICAgcmV0dXJuIG5vZGUudGV4dENvbnRlbnRcbn1cblxuZnVuY3Rpb24gaXNFbGVtZW50KG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5ub2RlVHlwZSA9PT0gMVxufVxuXG5mdW5jdGlvbiBpc1RleHQobm9kZSkge1xuICAgIHJldHVybiBub2RlLm5vZGVUeXBlID09PSAzXG59XG5cbmZ1bmN0aW9uIGlzQ29tbWVudChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUubm9kZVR5cGUgPT09IDhcbn1cblxuZXhwb3J0IGNvbnN0IGRvbU9wdHMgPSB7XG4gICAgY3JlYXRlRWxlbWVudCxcbiAgICBjcmVhdGVFbGVtZW50TlMsXG4gICAgY3JlYXRlVGV4dE5vZGUsXG4gICAgY3JlYXRlQ29tbWVudCxcbiAgICBpbnNlcnRCZWZvcmUsXG4gICAgcmVtb3ZlQ2hpbGQsXG4gICAgYXBwZW5kQ2hpbGQsXG4gICAgcGFyZW50Tm9kZSxcbiAgICBuZXh0U2libGluZyxcbiAgICB0YWdOYW1lLFxuICAgIHNldFRleHRDb250ZW50LFxuICAgIGdldFRleHRDb250ZW50LFxuICAgIGlzRWxlbWVudCxcbiAgICBpc1RleHQsXG4gICAgaXNDb21tZW50LFxufVxuXG5leHBvcnQgZGVmYXVsdCBkb21PcHRzO1xuIiwiLyoqXG4gKiBkaWZm5qih5Z2XXG4gKiAxLummluWFiOaPkOS+m+S4gOS4quW3peWOguaWueazle+8jCDkvKDlhaVub2RlT3B0cyDlkowgbW9kdWxlc++8jOWIhuWIq+aYryDoioLngrnmk43kvZxhcGkg5ZKMIOimgeaMgui9veWIsGhvb2vkuIrnmoTmqKHlnZdcbiAqICAg6L+Z6YeM6L+U5Zue5LiA5LiqIHBhdGNo5pa55rOV77yMIOS8oOWFpeaWsHZub2RlIOWSjOaXp3Zub2Rl77yM6L+b6KGM5beu5byC5YyW5pu05pawXG4gKiAqLyBcbmltcG9ydCBWTm9kZSBmcm9tICcuL3Zub2RlJ1xuaW1wb3J0IHtcbiAgICBpc0RlZixcbiAgICBpc1VuZGVmLFxuICAgIGlzUHJpbWl0aXZlXG59IGZyb20gJy4vdXRpbCdcbi8vIOaJgOacieeahOeUn+WRveWRqOacn+WHveaVsOexu+Wei1xuY29uc3QgaG9va3MgPSBbJ2NyZWF0ZScsICd1cGRhdGUnLCAncmVtb3ZlJywgJ2Rlc3Ryb3knLCAnaW5zZXJ0J11cblxuY29uc3QgZW1wdHlOb2RlID0gbmV3IFZOb2RlKCcnLCB7fSwgW10sIHVuZGVmaW5lZCwgdW5kZWZpbmVkKVxuXG4vLyDliJvlu7pwYXRjaOeahCDlt6XljoLmlrnms5VcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYXRjaChub2RlT3B0cywgbW9kdWxlcykge1xuICAgIGxldCBjYnMgPSB7fVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2JzW2hvb2tzW2ldXSA9IFtdXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbW9kdWxlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgaG9vayA9IG1vZHVsZXNbal1baG9va3NbaV1dXG4gICAgICAgICAgICBpZiAoaG9vayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY2JzW2hvb2tzW2ldXS5wdXNoKGhvb2spXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g5piv5ZCm5pivVm5vZGVcbiAgICBmdW5jdGlvbiBpc1ZOb2RlKHZub2RlKSB7XG4gICAgICAgIHJldHVybiB2bm9kZS50YWcgIT09IHVuZGVmaW5lZFxuICAgIH1cbiAgICAvLyDmmK/lkKbkuIDoh7RcbiAgICBmdW5jdGlvbiBzYW1lVk5vZGUodm5vZGUsIG90aGVyKSB7XG4gICAgICAgIC8vIOagh+etvuWQjeS4gOiHtO+8jCBrZXnkuIDoh7Qg5YiZ6K6k5Li65piv5Y+v5Lul5aSN55So55qE6IqC54K5XG4gICAgICAgIHJldHVybiB2bm9kZS50YWcgPT09IG90aGVyLnRhZyAmJiB2bm9kZS5rZXkgPT09IG90aGVyLmtleVxuICAgIH1cbiAgICBmdW5jdGlvbiBlbXB0eU5vZGVBdChlbG0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWTm9kZShub2RlT3B0cy50YWdOYW1lKGVsbSkudG9Mb3dlckNhc2UoKSwgbnVsbCwgbnVsbCwgdW5kZWZpbmVkLCBlbG0pO1xuICAgIH1cbiAgICAvLyDliJvlu7plbGVtZW505YWD57SgXG4gICAgZnVuY3Rpb24gY3JlYXRlRWxtKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB2bm9kZS5kYXRhO1xuICAgICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5pbml0KSB7XG4gICAgICAgICAgICAgICAgZGF0YS5pbml0KHZub2RlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBjaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuLFxuICAgICAgICAgICAgdGFnID0gdm5vZGUudGFnXG4gICAgICAgIGlmICh0YWcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gUGFyc2Ugc2VsZWN0b3JcbiAgICAgICAgICAgIGNvbnN0IGVsbSA9IHZub2RlLmVsbSA9IG5vZGVPcHRzLmNyZWF0ZUVsZW1lbnQodGFnKVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYnMuY3JlYXRlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgY2JzLmNyZWF0ZVtpXShlbXB0eU5vZGUsIHZub2RlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2ggIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZU9wdHMuYXBwZW5kQ2hpbGQoZWxtLCBjcmVhdGVFbG0oY2gsIGluc2VydGVkVm5vZGVRdWV1ZSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc1ByaW1pdGl2ZSh2bm9kZS50ZXh0KSkge1xuICAgICAgICAgICAgICAgIG5vZGVPcHRzLmFwcGVuZENoaWxkKGVsbSwgbm9kZU9wdHMuY3JlYXRlVGV4dE5vZGUodm5vZGUudGV4dCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5jcmVhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5jcmVhdGUoZW1wdHlOb2RlLCB2bm9kZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaW5zZXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydGVkVm5vZGVRdWV1ZS5wdXNoKHZub2RlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZub2RlLmVsbSA9IG5vZGVPcHRzLmNyZWF0ZVRleHROb2RlKHZub2RlLnRleHQpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZub2RlLmVsbTtcbiAgICB9XG4gICAgLy8g5Yib5bu656e76ZmkZWxlbWVudOeahOW7tui/n+iwg+eUqOaWueazle+8jCDpnIDopoHlnKjmr4/kuKptb2R1bGXmiafooYzlroxyZW1vdmXlkI4g5YaN6LCD55SoXG4gICAgZnVuY3Rpb24gY3JlYXRlUm1DYihjaGlsZEVsbSwgbGlzdGVuZXJzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBybUNiKCkge1xuICAgICAgICAgICAgaWYgKC0tbGlzdGVuZXJzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gbm9kZU9wdHMucGFyZW50Tm9kZShjaGlsZEVsbSk7XG4gICAgICAgICAgICAgICAgbm9kZU9wdHMucmVtb3ZlQ2hpbGQocGFyZW50LCBjaGlsZEVsbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZFZub2RlcyhwYXJlbnRFbG0sXG4gICAgICAgIGJlZm9yZSxcbiAgICAgICAgdm5vZGVzLFxuICAgICAgICBzdGFydElkeCxcbiAgICAgICAgZW5kSWR4LFxuICAgICAgICBpbnNlcnRlZFZub2RlUXVldWUpIHtcbiAgICAgICAgZm9yICg7IHN0YXJ0SWR4IDw9IGVuZElkeDsgKytzdGFydElkeCkge1xuICAgICAgICAgICAgY29uc3QgY2ggPSB2bm9kZXNbc3RhcnRJZHhdXG4gICAgICAgICAgICBpZiAoY2ggIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG5vZGVPcHRzLmluc2VydEJlZm9yZShwYXJlbnRFbG0sIGNyZWF0ZUVsbShjaCwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSwgYmVmb3JlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZVZub2RlcyhcbiAgICAgICAgcGFyZW50RWxtLFxuICAgICAgICB2bm9kZXMsXG4gICAgICAgIHN0YXJ0SWR4LFxuICAgICAgICBlbmRJZHgpIHtcbiAgICAgICAgZm9yICg7IHN0YXJ0SWR4IDw9IGVuZElkeDsgKytzdGFydElkeCkge1xuICAgICAgICAgICAgbGV0IGxpc3RlbmVycywgcm0sIGNoID0gdm5vZGVzW3N0YXJ0SWR4XVxuICAgICAgICAgICAgaWYgKGNoICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNEZWYoY2gudGFnKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDosIPnlKhkZXN0b3J5IGhvb2tcbiAgICAgICAgICAgICAgICAgICAgaW52b2tlRGVzdHJveUhvb2soY2gpXG4gICAgICAgICAgICAgICAgICAgIC8vIOiwg+eUqHJlbW92ZSBob29rXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycyA9IGNicy5yZW1vdmUubGVuZ3RoICsgMVxuICAgICAgICAgICAgICAgICAgICBybSA9IGNyZWF0ZVJtQ2IoY2guZWxtLCBsaXN0ZW5lcnMpXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2JzLnJlbW92ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2JzLnJlbW92ZVtpXShjaCwgcm0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoLmRhdGEgJiYgY2guZGF0YS5yZW1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoLmRhdGEucmVtb3ZlKGNoLCBybSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBybSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8gVGV4dCBub2RlXG4gICAgICAgICAgICAgICAgICAgIG5vZGVPcHRzLnJlbW92ZUNoaWxkKHBhcmVudEVsbSwgY2guZWxtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlS2V5VG9PbGRJZHgoY2hpbGRyZW4sIGJlZ2luSWR4LCBlbmRJZHgpIHtcbiAgICAgICAgbGV0IG1hcCA9IHt9XG4gICAgICAgIGZvciAobGV0IGkgPSBiZWdpbklkeDsgaSA8PSBlbmRJZHg7ICsraSkge1xuICAgICAgICAgICAgbGV0IGNoID0gY2hpbGRyZW5baV1cbiAgICAgICAgICAgIGlmIChjaCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IGNoLmtleVxuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09IHVuZGVmaW5lZCkgbWFwW2tleV0gPSBpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hcDtcbiAgICB9XG4gICAgZnVuY3Rpb24gaW52b2tlRGVzdHJveUhvb2sodm5vZGUpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB2bm9kZS5kYXRhO1xuICAgICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5kZXN0cm95KSB7XG4gICAgICAgICAgICAgICAgZGF0YS5kZXN0cm95KHZub2RlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYnMuZGVzdHJveS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGNicy5kZXN0cm95W2ldKHZub2RlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZub2RlLmNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHZub2RlLmNoaWxkcmVuLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpID0gdm5vZGUuY2hpbGRyZW5bal1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgIT0gbnVsbCAmJiB0eXBlb2YgaSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW52b2tlRGVzdHJveUhvb2soaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g5a2Q6IqC54K55a+55q+UXG4gICAgZnVuY3Rpb24gdXBkYXRlQ2hpbGRyZW4ocGFyZW50RWxtLFxuICAgICAgICBvbGRDaCxcbiAgICAgICAgbmV3Q2gsXG4gICAgICAgIGluc2VydGVkVm5vZGVRdWV1ZSkge1xuICAgICAgICBsZXQgb2xkU3RhcnRJZHggPSAwLCBuZXdTdGFydElkeCA9IDBcbiAgICAgICAgbGV0IG9sZEVuZElkeCA9IG9sZENoLmxlbmd0aCAtIDFcbiAgICAgICAgbGV0IG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFswXVxuICAgICAgICBsZXQgb2xkRW5kVm5vZGUgPSBvbGRDaFtvbGRFbmRJZHhdXG4gICAgICAgIGxldCBuZXdFbmRJZHggPSBuZXdDaC5sZW5ndGggLSAxXG4gICAgICAgIGxldCBuZXdTdGFydFZub2RlID0gbmV3Q2hbMF1cbiAgICAgICAgbGV0IG5ld0VuZFZub2RlID0gbmV3Q2hbbmV3RW5kSWR4XVxuICAgICAgICBsZXQgb2xkS2V5VG9JZHgsIGlkeEluT2xkLCBlbG1Ub01vdmUsIGJlZm9yZTtcblxuICAgICAgICB3aGlsZSAob2xkU3RhcnRJZHggPD0gb2xkRW5kSWR4ICYmIG5ld1N0YXJ0SWR4IDw9IG5ld0VuZElkeCkge1xuICAgICAgICAgICAgaWYgKG9sZFN0YXJ0Vm5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFsrK29sZFN0YXJ0SWR4XVxuICAgICAgICAgICAgfSBlbHNlIGlmIChvbGRFbmRWbm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3U3RhcnRWbm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld0VuZFZub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBuZXdFbmRWbm9kZSA9IG5ld0NoWy0tbmV3RW5kSWR4XVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzYW1lVk5vZGUob2xkU3RhcnRWbm9kZSwgbmV3U3RhcnRWbm9kZSkpIHtcbiAgICAgICAgICAgICAgICBwYXRjaFZOb2RlKG9sZFN0YXJ0Vm5vZGUsIG5ld1N0YXJ0Vm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgICAgICAgICAgb2xkU3RhcnRWbm9kZSA9IG9sZENoWysrb2xkU3RhcnRJZHhdXG4gICAgICAgICAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNhbWVWTm9kZShvbGRFbmRWbm9kZSwgbmV3RW5kVm5vZGUpKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hWbm9kZShvbGRFbmRWbm9kZSwgbmV3RW5kVm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgICAgICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF1cbiAgICAgICAgICAgICAgICBuZXdFbmRWbm9kZSA9IG5ld0NoWy0tbmV3RW5kSWR4XVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzYW1lVk5vZGUob2xkU3RhcnRWbm9kZSwgbmV3RW5kVm5vZGUpKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hWTm9kZShvbGRTdGFydFZub2RlLCBuZXdFbmRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgICAgICAgICBub2RlT3B0cy5pbnNlcnRCZWZvcmUocGFyZW50RWxtLCBvbGRTdGFydFZub2RlLmVsbSwgbm9kZU9wdHMubmV4dFNpYmxpbmcob2xkRW5kVm5vZGUuZWxtKSlcbiAgICAgICAgICAgICAgICBvbGRTdGFydFZub2RlID0gb2xkQ2hbKytvbGRTdGFydElkeF1cbiAgICAgICAgICAgICAgICBuZXdFbmRWbm9kZSA9IG5ld0NoWy0tbmV3RW5kSWR4XVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzYW1lVk5vZGUob2xkRW5kVm5vZGUsIG5ld1N0YXJ0Vm5vZGUpKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hWTm9kZShvbGRFbmRWbm9kZSwgbmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgICAgICAgICBub2RlT3B0cy5pbnNlcnRCZWZvcmUocGFyZW50RWxtLCBvbGRFbmRWbm9kZS5lbG0sIG9sZFN0YXJ0Vm5vZGUuZWxtKVxuICAgICAgICAgICAgICAgIG9sZEVuZFZub2RlID0gb2xkQ2hbLS1vbGRFbmRJZHhdXG4gICAgICAgICAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChvbGRLZXlUb0lkeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG9sZEtleVRvSWR4ID0gY3JlYXRlS2V5VG9PbGRJZHgob2xkQ2gsIG9sZFN0YXJ0SWR4LCBvbGRFbmRJZHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZHhJbk9sZCA9IG9sZEtleVRvSWR4W25ld1N0YXJ0Vm5vZGUua2V5XVxuICAgICAgICAgICAgICAgIGlmIChpc1VuZGVmKGlkeEluT2xkKSkgeyAvLyBOZXcgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBub2RlT3B0cy5pbnNlcnRCZWZvcmUocGFyZW50RWxtLCBjcmVhdGVFbG0obmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSwgb2xkU3RhcnRWbm9kZS5lbG0pXG4gICAgICAgICAgICAgICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbG1Ub01vdmUgPSBvbGRDaFtpZHhJbk9sZF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbG1Ub01vdmUuc2VsICE9PSBuZXdTdGFydFZub2RlLnNlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZU9wdHMuaW5zZXJ0QmVmb3JlKHBhcmVudEVsbSwgY3JlYXRlRWxtKG5ld1N0YXJ0Vm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSksIG9sZFN0YXJ0Vm5vZGUuZWxtKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0Y2hWTm9kZShlbG1Ub01vdmUsIG5ld1N0YXJ0Vm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRDaFtpZHhJbk9sZF0gPSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVPcHRzLmluc2VydEJlZm9yZShwYXJlbnRFbG0sIChlbG1Ub01vdmUuZWxtKSwgb2xkU3RhcnRWbm9kZS5lbG0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAob2xkU3RhcnRJZHggPD0gb2xkRW5kSWR4IHx8IG5ld1N0YXJ0SWR4IDw9IG5ld0VuZElkeCkge1xuICAgICAgICAgICAgaWYgKG9sZFN0YXJ0SWR4ID4gb2xkRW5kSWR4KSB7XG4gICAgICAgICAgICAgICAgYmVmb3JlID0gbmV3Q2hbbmV3RW5kSWR4ICsgMV0gPT0gbnVsbCA/IG51bGwgOiBuZXdDaFtuZXdFbmRJZHggKyAxXS5lbG07XG4gICAgICAgICAgICAgICAgYWRkVm5vZGVzKHBhcmVudEVsbSwgYmVmb3JlLCBuZXdDaCwgbmV3U3RhcnRJZHgsIG5ld0VuZElkeCwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlVm5vZGVzKHBhcmVudEVsbSwgb2xkQ2gsIG9sZFN0YXJ0SWR4LCBvbGRFbmRJZHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g5paw5penVk5vZGUg5a+55q+UXG4gICAgZnVuY3Rpb24gcGF0Y2hWTm9kZShvbGRWbm9kZSwgdm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSkge1xuICAgICAgICBjb25zdCBlbG0gPSB2bm9kZS5lbG0gPSBvbGRWbm9kZS5lbG1cbiAgICAgICAgbGV0IG9sZENoID0gb2xkVm5vZGUuY2hpbGRyZW5cbiAgICAgICAgbGV0IGNoID0gdm5vZGUuY2hpbGRyZW5cbiAgICAgICAgaWYgKG9sZFZub2RlID09PSB2bm9kZSkgcmV0dXJuXG4gICAgICAgIC8vIOWmguaenOS4jeaYr+e6r+aWh+acrOiKgueCuSBcbiAgICAgICAgaWYgKGlzVW5kZWYodm5vZGUudGV4dCkpIHtcbiAgICAgICAgICAgIC8vIOWmguaenOmDveaciWNoaWxkcmVu77yMIOaJp+ihjHVwZGF0ZUNoaWxkcmVu5pa55rOVXG4gICAgICAgICAgICBpZiAoaXNEZWYob2xkQ2gpICYmIGlzRGVmKGNoKSkge1xuICAgICAgICAgICAgICAgIGlmIChvbGRDaCAhPT0gY2gpIHVwZGF0ZUNoaWxkcmVuKGVsbSwgb2xkQ2gsIGNoLCBpbnNlcnRlZFZub2RlUXVldWUpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzRGVmKGNoKSkgeyAvLyDlpoLmnpzlj6rmnInmlrBWbm9kZSDmnIljaGlsZHJlbu+8jCDmiafooYzmt7vliqBcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzmnIl0ZXh077yMIOWFiOa3u+WKoHRleHRcbiAgICAgICAgICAgICAgICBpZiAoaXNEZWYob2xkVm5vZGUudGV4dCkpIG5vZGVPcHRzLnNldFRleHRDb250ZW50KGVsbSwgJycpXG4gICAgICAgICAgICAgICAgYWRkVm5vZGVzKGVsbSwgbnVsbCwgY2gsIDAsIGNoIC5sZW5ndGggLSAxLCBpbnNlcnRlZFZub2RlUXVldWUpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzRGVmKG9sZENoKSkgeyAvLyDlpoLmnpzmlrBWbm9kZeayoeaciWNoaWxkcmVu77yMIOaJp+ihjOWIoOmZpFxuICAgICAgICAgICAgICAgIHJlbW92ZVZub2RlcyhlbG0sIG9sZENoLCAwLCBvbGRDaC5sZW5ndGggLSAxKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0RlZihvbGRWbm9kZS50ZXh0KSkgeyBcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzmlrBWbm9kZeayoeaciWNoaWxkcmVu77yMIOiAgVZub2Rl5pyJdGV4dFxuICAgICAgICAgICAgICAgIG5vZGVPcHRzLnNldFRleHRDb250ZW50KGVsbSwgJycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAob2xkVm5vZGUudGV4dCAhPT0gdm5vZGUudGV4dCkgeyAvLyDnuq/mlofmnKzoioLngrnvvIwgdGV4dOS4jeWQjOaJjemcgOimgeabtOaWsFxuICAgICAgICAgICAgLy8g56e76Zmk5Y6fZG9t5LiL55qEIOaJgOaciWNoaWxkcmVuXG4gICAgICAgICAgICBpZiAoaXNEZWYob2xkQ2gpKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlVm5vZGVzKGVsbSwgb2xkQ2gsIDAsIG9sZENoLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlT3B0cy5zZXRUZXh0Q29udGVudChlbG0sIHZub2RlLnRleHQpXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJldHVybiBmdW5jdGlvbiBwYXRjaCAob2xkVm5vZGUsIHZub2RlKSB7XG4gICAgICAgIC8vIOWmguaenOayoeacieS8oOaWsHZub2Rl77yMIOihqOekuuWIoOmZpO+8jCDnm7TmjqXljbjovb1cbiAgICAgICAgaWYgKGlzVW5kZWYodm5vZGUpKSB7XG4gICAgICAgICAgICBpZiAoaXNEZWYob2xkVm5vZGUpKSBpbnZva2VEZXN0cm95SG9vayhvbGRWbm9kZSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIC8vIOmcgOimgeiwg+eUqGhvb2vnmoTnvJPlrZjmlbDnu4TvvIwg5pyA5ZCO57uf5LiA6LCD55SoXG4gICAgICAgIGxldCBpbnNlcnRlZFZub2RlUXVldWUgPSBbXVxuICAgICAgICAvLyDkuI3mmK9Wbm9kZSDliJnliJvlu7rkuLrnqbp2bm9kZeWvueixoVxuICAgICAgICBpZiAoIWlzVk5vZGUob2xkVm5vZGUpKSB7XG4gICAgICAgICAgICBvbGRWbm9kZSA9IGVtcHR5Tm9kZUF0KG9sZFZub2RlKVxuICAgICAgICB9XG4gICAgICAgIC8vIOWmguaenOaYr+WPr+WkjeeUqOiKgueCue+8jCDnm7TmjqXov5vooYxwYXRjaOaTjeS9nFxuICAgICAgICBpZiAoc2FtZVZOb2RlKG9sZFZub2RlLCB2bm9kZSkpIHtcbiAgICAgICAgICAgIHBhdGNoVk5vZGUob2xkVm5vZGUsIHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxtID0gb2xkVm5vZGUuZWxtXG4gICAgICAgICAgICBwYXJlbnQgPSBub2RlT3B0cy5wYXJlbnROb2RlKGVsbSk7XG4gICAgICAgICAgICAvLyDkuLp2bm9kZSDliJvlu7plbG1cbiAgICAgICAgICAgIGNyZWF0ZUVsbSh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcblxuICAgICAgICAgICAgaWYgKHBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG5vZGVPcHRzLmluc2VydEJlZm9yZShwYXJlbnQsIHZub2RlLmVsbSwgbm9kZU9wdHMubmV4dFNpYmxpbmcoZWxtKSk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlVm5vZGVzKHBhcmVudCwgW29sZFZub2RlXSwgMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluc2VydGVkVm5vZGVRdWV1ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaW5zZXJ0ZWRWbm9kZVF1ZXVlW2ldLmRhdGEuaG9vay5pbnNlcnQoaW5zZXJ0ZWRWbm9kZVF1ZXVlW2ldKVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2JzLmluc2VydC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgY2JzLmluc2VydFtpXSgpXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB2bm9kZTtcbiAgICB9XG59XG4iLCJcbmV4cG9ydCBmdW5jdGlvbiBpc1ByaW1pdGl2ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcidcbiAgICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1VuZGVmICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RlZiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbFxufVxuIiwiaW1wb3J0IHsgaXNQcmltaXRpdmUgfSBmcm9tICcuL3V0aWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgdGFnLCAvLyDmoIfnrb7lkI1cbiAgICAgICAgZGF0YSwgLy8gIGF0dHJpYnV0ZeOAgXByb3Bz44CBY2xhc3MsIG9uIOetieetiVxuICAgICAgICBjaGlsZHJlbiwgLy8g5a2Q6IqC54K5XG4gICAgICAgIHRleHQsIC8vIOivpeiKgueCueS4reeahOaWh+acrOWGheWuuVxuICAgICAgICBlbG0sIC8vIOecn+WunmRvbeeahOW8leeUqFxuICAgICkge1xuICAgICAgICB0aGlzLnRhZyA9IHRhZ1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhIHx8IHt9XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlblxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0XG4gICAgICAgIHRoaXMuZWxtID0gZWxtXG4gICAgfVxufVxuLy8g5b+r6YCf5Yib5bu65paH5pys6IqC54K5XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGV4dFZOb2RlKHRleHQpIHtcbiAgICByZXR1cm4gbmV3IFZOb2RlKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRleHQpXG59XG5cbi8vIOWIm+W7uuiKgueCuVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZOb2RlKHRhZywgZGF0YSwgY2hpbGRyZW4pIHtcbiAgICBsZXQgdGV4dFxuICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIOWmguaenGNoaWxkcmVuIOaYr+e6r+aWh+acrFxuICAgICAgICBpZiAoaXNQcmltaXRpdmUoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICB0ZXh0ID0gY2hpbGRyZW5cbiAgICAgICAgICAgIGNoaWxkcmVuID0gdW5kZWZpbmVkXG4gICAgICAgIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzkuI3mmK/mlbDnu4TnsbvlnovvvIwg6L2s5Li65pWw57uEXG4gICAgICAgICAgICBjaGlsZHJlbiA9IFtjaGlsZHJlbl1cbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vICDlpoLmnpzmsqHmnInkvKBjaGlsZHJlbu+8jCDkuJRkYXRhIOS4uuaVsOe7hO+8jCDliJlkYXRh5Li6Y2hpbGRyZW4gXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IGRhdGFcbiAgICAgICAgfSBlbHNlIGlmIChpc1ByaW1pdGl2ZShkYXRhKSkge1xuICAgICAgICAgICAgLy8g5aaC5p6cZGF0YSDmmK/nuq/mlofmnKxcbiAgICAgICAgICAgIHRleHQgPSBkYXRhXG4gICAgICAgICAgICBkYXRhID0gdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8g5aaC5p6c5a2Q6IqC54K55LitIOaciee6r+aWh+acrOexu+Wei++8jCDnm7TmjqXnlJ/miJDmlofmnKzoioLngrlcbiAgICAgICAgY2hpbGRyZW4gPSBjaGlsZHJlbi5tYXAoY2hpbGQgPT4ge1xuICAgICAgICAgICAgaWYgKGlzUHJpbWl0aXZlKGNoaWxkKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVUZXh0Vk5vZGUoY2hpbGQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2hpbGRcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFZOb2RlKHRhZywgZGF0YSwgY2hpbGRyZW4sIHRleHQsIHVuZGVmaW5lZCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
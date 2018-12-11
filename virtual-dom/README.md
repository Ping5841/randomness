# virtual dom 虚拟dom的概念

> 参考[snabbdom框架](https://github.com/snabbdom/snabbdom)

#### 可以看到目前主流框架React、Vue 都是采用了MVVM数据驱动模式。当数据更新的时候的，需要映射到View上，我们知道一个dom节点是非常复杂和庞大的，如果直接操作所有dom，带来的性能开销同样非常巨大。

#### 这时候我们可以用一个原生的js对象来描述一个dom节点，在需要更新dom的时候，先进行差异化对比，再局部更新优化性能，它比创建真正的dom的代价要小很多。 这样用js对象来描述浏览器dom的方式 我们就叫做虚拟dom

#### 同样的道理，web端可以抽象div，p等等dom元素，那么移动端 iOS和Android的各种View组件也可以抽象出来，例如：React Native 和 Weex。 因此需要我们开发一套具有通用接口的核心功能框架

### 需要的功能
  - 一个class来表示不同类型的dom
  - 一个创建虚拟dom的方法
  - 一个触发更新并对新旧节点树进行diff的方法
  - 几个必要的钩子函数，以便于在必要的时候更新数据
  - 封装dom的操作方法
  
### 先看下目录结构
  - src
    - index.js 入口文件
    - vnode.js 虚拟dom对象的定义
    - patch.js 虚拟dom的diff过程
    - node-opts.js 节点的操作方法，将dom的操作方法的抽象分离， 可以统一不同平台和浏览器等等的api
    - modules/ vnode各个阶段需要执行的更新操作
    - util.js 公用方法

### TODO 
    - 梳理diff过程的完整过程
    - 完善modules内容

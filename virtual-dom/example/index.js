import {
    patch,
    h
} from 'virtual-dom'


let views = h('div', 'text', [
    h('p', { style: 'color: red;' }, [
        h('span', 'this is span')
    ]),
    h('p', { style: 'color: red;' }, [
        'hehhehe'
    ])
])

let vnode = patch(document.getElementById('app'), views)


let views2 = h('div', 'text', [
    h('p', { style: 'color: red;' }, [
       'tetst'
    ]),
    h('div', { style: 'color: red;' }, [
        'hehhehe'
    ])
])
setTimeout(function () {
    patch(vnode, views2)
}, 2000)


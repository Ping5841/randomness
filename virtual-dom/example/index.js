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
    h('p', { style: 'color: green;' }, [
       'tetst'
    ]),
    h('div', { style: 'color: blue;' }, [
        'hehhehe'
    ])
])
setTimeout(function () {
    patch(vnode, views2)
}, 2000)


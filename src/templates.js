import {row, col} from './utils'

function title(block) {
    const {tag = 'h1', styles} = block.options
    return row(col(`<${tag}>${block.value}</${tag}>`), styles)
}

function text(block) {
    return row(col(`<p>${block.value}</p>`))
}

function columns(block) {
    const column = block.value.map(col).join('')
    return row(column)
}

function image(block) {
    return row(`<img src="${block.value}"/>`)

}

export const templates = {
    title: title, // можно просто title, text, ... тк если ключ и значение совпадают по имени,
    text: text,                                         // то можно не записывать дважды
    columns: columns,
    image: image
}
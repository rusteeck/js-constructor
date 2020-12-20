function title(block){
    return `
        <div class="row">
            <div class="col-sm">
                <h1>${block.value}</h1>
            </div>
        </div>
`
}

function text(block){
    return `
        <div class="row">
            <div class="col-sm">
                <p>${block.value}</p>
            </div>
        </div>
`
}

function columns(block){
    const column = block.value.map(col => `<div class="col-sm">${col}</div>`)
    return `
        <div class="row">
            ${column.join('')}            
        
    )}
        </div>
        `
}

function image(block){
    return `
        <div class="row">
            <img src="${block.value}"/>
        </div>
        `
}

export const templates = {
    title: title, // можно просто title, text, ... тк если ключ и значение совпадают по имени,
    text: text,                                         // то можно не записывать дважды
    columns: columns,
    image: image
}
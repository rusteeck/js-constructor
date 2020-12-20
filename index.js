const model =[
    {type: 'title', value: 'Hello from js'},

    {type: 'text', value: 'Some text'},

    {type: 'columns', value: ['1111111','222222','333333333']},

    {type: 'image', value: './assets/image.png'}
]

const $site = document.querySelector('#site')

model.forEach(block => {
    let html = ''
    if (block.type === 'title'){
        html = title(block)
    } else if (block.type === 'text'){
      html =  title(block)
    } else if (block.type === 'columns'){
        html = columns(block)
    } else if (block.type === 'image'){
        html = image(block)
    }

$site.insertAdjacentHTML('beforeend', html)

})

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

export default function renderResource(type, page, selector){
    if(page){
        page.innerHTML = `
        ${type.renderHTML()}`
        
        if(selector)
        selector.onchange = () => {
        page.innerHTML = `
        ${type.renderHTML(selector.value)}`
    }
    }
}
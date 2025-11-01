
export default function renderResource(type, page){
    if(page){
        page.innerHTML = `
        ${type.renderHTML()}`

        //page.insertAdjacentHTML("beforeend", type.renderHTML())
    }
}
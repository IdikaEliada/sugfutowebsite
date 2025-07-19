import {renderList} from './components/selectExcos.js';

import {excosList} from './sections/executives/data/excosList.js'

import {displayExcoSet} from './sections/executives/renderExcoSet.js';

import {setupReadMore} from './sections/executives/about-exco.js'

const selectionBox = document.getElementById('selection-box');

const executiveIntro= document.getElementById('executive-intro');

const selectedExcoSpan = document.getElementById('selected-excos')

const menuIcon = document.getElementById('menu-icon');

const themeIcon = document.getElementById('theme-icon');

const isMenuOpen = menuIcon.classList.contains('fa-bars')

const isIcon = themeIcon.classList.contains('fa-moon')

const excosDropDownList = document.getElementById('selection-box')

const selectExcos = document.getElementById('select-excos')

const excosGrid = document.getElementById('executive-set-container')

menuIcon.addEventListener('click', ()=>{
  if(isMenuOpen){
    menuIcon.classList.toggle('fa-bars')
    menuIcon.classList.toggle('fa-close')
  }
})

loadPage(preloader)

const HTML = document.querySelector('html')

function isDarkMode() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

function systemDefault() {
  !isDarkMode() ? HTML.dataset.theme = "light" : HTML.dataset.theme = "dark";
  };

function changeThemeIcon() {
  if(isIcon){
    themeIcon.classList.toggle('fa-sun')
    themeIcon.classList.toggle('fa-moon')
  }
}

function getIdNumber(element) {
  const parts = element.split('-');
  return parseInt(parts[parts.length - 1]);
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  console.log('is dark mode?', isDarkMode())
  changeThemeIcon()
  systemDefault()
});

const menuButton = document.getElementById('menu-button')
const dropdown = document.getElementById('dropdown')

menuButton.addEventListener('click', ()=>{
  dropdown.classList.toggle('hidden')
})


selectExcos.addEventListener('click', ()=>{
  excosDropDownList.classList.toggle('hidden')
})

selectionBox.innerHTML = renderList();

excosGrid.innerHTML = displayExcoSet(2)

document.addEventListener('DOMContentLoaded', () => {
  Array.from(selectionBox.querySelectorAll('li')).forEach(excoSetList => {
    excoSetList.addEventListener('click', () => {
      
    excosList.forEach(e => {
      if(getIdNumber(excoSetList.id) === e.id){
        
        const checkSelectedList = document.getElementById(`check-${e.id}`)
        
        checkSelectedList.innerHTML = `
          <i class="fa fa-check" aria-hidden="true"></i>`
        
        excosGrid.innerHTML = "";
          
        excosGrid.innerHTML = displayExcoSet(e.id)
        
        executiveIntro.innerHTML = e.about
        }
      })
      
      selectedExcoSpan.innerHTML = excoSetList.textContent
      
      excosDropDownList.classList.toggle('hidden')
      
      setupReadMore(excosGrid)
      
    })
  })
})

export default function loadPage() {
  const preloader = document.querySelector('#preloader');
  
  window.addEventListener('load',() => {
  setTimeout(()=>{
    if(preloader){
      preloader.remove()
    }
  }, 1000)
  systemDefault()
  if (!isDarkMode()) {
    themeIcon.classList.add('fa-sun')
    themeIcon.classList.remove('fa-moon')
  }
})
}
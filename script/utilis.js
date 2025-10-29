import {renderList} from './components/selectExcos.js';

import {renderEventList} from './components/selectEvent.js';

import { renderFaculty } from './components/selectFaculty.js'

import {excosList} from './sections/executives/data/excosList.js'

import {displayExcoSet} from './sections/executives/renderExcoSet.js';

import {displayExcoEvent} from './sections/executives/renderEvents.js';

import displayExcoSocials from './sections/socials/header.js';

import loadingAnimation from './libs/loadingImg.js';

import {setupReadMore} from './sections/executives/about-exco.js'

import { submitApplication } from './libs/applyForSA.js'

const selectionBox = document.getElementById('selection-box');

const images = '.loading-image'

const executiveIntro= document.getElementById('executive-intro');

const selectedExcoSpan = document.getElementById('selected-excos')

const selectedEventSpan = document.getElementById('selected-events')

const menuIcon = document.getElementById('menu-icon');

const themeIcon = document.getElementById('theme-icon');

const isMenuOpen = menuIcon.classList.contains('fa-bars')

// const isIcon = themeIcon.classList.contains('fa-moon')

const excosDropDownList = document.getElementById('selection-box')

const selectExcos = document.getElementById('select-excos')

const selectEvents = document.getElementById('select-events')

const excosGrid = document.getElementById('executive-set-container')

const eventsGrid = document.getElementById('events-set-container')

const excosSocials = document.getElementById('socials-header')

const dropdownButton = document.getElementById('dropdownButton');

const applyForSADiv = document.getElementById('application-for-sa')

const facultyList = document.getElementById('faculties')

const applicationForm = document.getElementById('application-form')

menuIcon.addEventListener('click', ()=>{
  if(isMenuOpen){
    menuIcon.classList.toggle('fa-bars')
    menuIcon.classList.toggle('fa-close')
  }
})

loadPage(preloader)
loadingAnimation(images)

const HTML = document.documentElement

function isDarkMode() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
   }

// function systemDefault() {
//   !isDarkMode() ? HTML.dataset.theme = "light" : HTML.dataset.theme = "dark";
//   };

// function changeThemeIcon() {
//   if(isIcon){
//     themeIcon.classList.toggle('fa-sun')
//     themeIcon.classList.toggle('fa-moon')
//   }
// }

function getIdNumber(element) {
  const parts = element.split('-');
  return parseInt(parts[parts.length - 1]);
}

function showPosition(number){
  const lastDigit = Math.abs(number) % 10;
  
  if(lastDigit > 3){
    return `${number}th`
  } else if(lastDigit > 2){
    return `${number}rd`
  } else if(lastDigit > 1){
    return `${number}nd`
  } else {
    return `${number}st`
  }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  console.log('is dark mode?', isDarkMode())
  changeThemeIcon()
  systemDefault()
});

if(selectExcos){
  selectExcos.addEventListener('click', ()=>{
  excosDropDownList.classList.toggle('hidden')
  })

  selectionBox.innerHTML = renderList();

    excosGrid.innerHTML = displayExcoSet(27)
  
} else if (selectEvents){
  
  selectEvents.addEventListener('click', ()=>{
  selectionBox.classList.toggle('hidden')
  
  })

  selectionBox.innerHTML = renderEventList();
  
  eventsGrid.innerHTML = displayExcoEvent(27)
  }

// const menuIcon = document.getElementById('menu-icon');
    
    const dropdown = document.getElementById('dropdown');
    
    /**
     * Update menu icon based on dropdown state
     */
    function updateMenuIcon() {
      const isOpen = !dropdown.classList.contains('hidden');
      if (isOpen) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-close');
      } else {
        menuIcon.classList.remove('fa-close');
        menuIcon.classList.add('fa-bars');
      }
    }
    
    // Update icon when dropdown is toggled
    dropdownButton.addEventListener('click', () => {
      setTimeout(updateMenuIcon, 10);
    });
    
    /**
     * Close dropdown when clicking outside
     */
    function handleClickOutside(event) {
      const isClickInsideDropdown = dropdown.contains(event.target);
      const isClickOnButton = dropdownButton.contains(event.target);
      const isOpen = !dropdown.classList.contains('hidden');
      
      // If click is outside dropdown and button, and dropdown is open, close it
      if (!isClickInsideDropdown && !isClickOnButton && isOpen) {
        dropdown.classList.add('hidden');
        updateMenuIcon();
      }
    }
    
    // Wait for DOM to be fully loaded before attaching event listener
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        document.addEventListener('click', handleClickOutside);
      });
    } else {
      document.addEventListener('click', handleClickOutside);
    }
    
    // Also update icon when Flowbite toggles the dropdown
    const observer = new MutationObserver(() => {
      updateMenuIcon();
    });
    
    observer.observe(dropdown, {
      attributes: true,
      attributeFilter: ['class']
    });


document.addEventListener('DOMContentLoaded', () => {
  if(selectionBox)
    Array.from(selectionBox.querySelectorAll('li')).forEach(excoSetList => {
      
      excoSetList.addEventListener('click', () => {
        
      excosList.forEach((e, index)=> {
        if(getIdNumber(excoSetList.id) === e.id){
          
          const checkSelectedList = document.getElementById(`check-${e.id}`)
          
          
          checkSelectedList.innerHTML = `
            <i class="fa fa-check" aria-hidden="true"></i>`
            
          const uncheckSelectedList = document.querySelectorAll(`[id^="check-"]:not(#check-${e.id})`);
  
          uncheckSelectedList.forEach(l => l.innerHTML = "")
          
          if(selectedExcoSpan){
          excosGrid.innerHTML = "";
            
          excosGrid.innerHTML = displayExcoSet(e.id)
          
          executiveIntro.innerHTML = `${e.name} is the ${showPosition(e.id)} elected Executives for the SUG Family, Federal University of Technology, Owerri`
          } else if(selectedEventSpan){
            eventsGrid.innerHTML = "";
            
          eventsGrid.innerHTML = displayExcoEvent(e.id)
          
          executiveIntro.innerHTML = `${e.name} is the ${showPosition(e.id)} elected Executives for the SUG Family, Federal University of Technology, Owerri and Were the SUG executives for the 20${e.id -2}/${e.id -1} Academic year. 
            Here are some of their achievements:`
          }
          }
          
          if(selectedExcoSpan){
            
            changeSpan(selectedExcoSpan)
          } else if (selectedEventSpan) {
            changeSpan(selectedEventSpan)
          }
          
          function changeSpan(page){
          page.innerHTML = `<div class="flex justify-center items-center gap-2">
            <div class="flex justify-center items-center">
              <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clip-rule="evenodd"/>
              </svg>
            </div>
            ${excoSetList.textContent}
          </div>` 
          }
          
          
          
          
        })
        
        
        
        excosDropDownList.classList.toggle('hidden')
        
        if(excosGrid){
          setupReadMore(excosGrid)
        } else if (eventsGrid) {
          setupReadMore(eventsGrid)
        }
      })
    })
    
  if (excosSocials) {
    excosSocials.innerHTML = displayExcoSocials(27)
    }
    
  if (facultyList) {
  facultyList.innerHTML = renderFaculty()
    
    submitApplication(applicationForm)
  }
  
  
})

export default function loadPage() {
  const preloader = document.querySelector('#preloader');
  
  window.addEventListener('load',() => {
  setTimeout(()=>{
    if(preloader){
      preloader.remove()
    }
  }, 1000)
  
  if (!isDarkMode()) {
    themeIcon.classList.add('fa-sun')
    themeIcon.classList.remove('fa-moon')
  }
})
}
import {renderList} from './components/selectExcos.js';

import {renderEventList} from './components/selectEvent.js';

import { mapResources, timetable, calendar, armsOfGov, mapData, timetablesData, calendarData} from '../data/resources.min.js'

import { renderFaculty } from './components/selectFaculty.js'

import {excosList} from './sections/executives/data/excosList.js'

import {displayExcoSet} from './sections/executives/renderExcoSet.js';

import {displayExcoEvent} from './sections/executives/renderEvents.js';

import { timetableSearch, mapSearch, calendarSearch } from './libs/fuzzySearch.js';

import displayExcoSocials from './sections/socials/header.js';

import loadingAnimation from './libs/loadingImg.js';

import renderResource from './libs/renderResource.js';

import deploymentMessage from './libs/emptyPage.js';

import {setupReadMore} from './sections/executives/about-exco.js'

import { submitApplication } from './libs/applyForSA.js'

const selectionBox = document.getElementById('selection-box');

const images = '.loading-image'

const status = document.getElementById('status')

const executiveIntro= document.getElementById('executive-intro');

const selectedExcoSpan = document.getElementById('selected-excos')

const selectedEventSpan = document.getElementById('selected-events')

const menuIcon = document.getElementById('menu-icon');

const themeBtn = document.getElementById('theme-btn')

const themeIcon = document.getElementById('theme-icon');

const themeLabel = document.getElementById('theme-label');

const THEMES = ['light', 'dark', 'system'];

const icons = {
  light: 'fa-sun',
  dark:  'fa-moon',
  system: 'fa-circle-half-stroke'// ← most popular "system" icon
  // alternatives you can try:
  // 'fa-laptop', 'fa-desktop', 'fa-display', 'fa-adjust', 'fa-sliders'
};

let currentTheme = 'system';

const isMenuOpen = menuIcon.classList.contains('fa-bars')

// const isIcon = themeIcon.classList.contains('')

const searchInput = document.getElementById('timetable-search');
const searchInputMap = document.getElementById('map-search');
const searchInputCal = document.getElementById('calendar-search');
const resultsInfo = document.getElementById('search-results-info');
  
const excosDropDownList = document.getElementById('selection-box')

const selectExcos = document.getElementById('select-excos')

const selectEvents = document.getElementById('select-events')

const calendarSelector = document.getElementById('calendar-select')

const excosGrid = document.getElementById('executive-set-container')

const eventsGrid = document.getElementById('events-set-container')

const resourcesGrid = document.getElementById('resources-container')

const mapGrid = document.getElementById('map-resources-container')

const calendarGrid = document.getElementById('calendar-resources-container')

const timetablesGrid = document.getElementById('timetables-resources-container')

const armsOfGovGrid = document.getElementById('AOG-resources-container')

const excosSocials = document.getElementById('socials-header')

const dropdownButton = document.getElementById('dropdownButton');

//const applyForSADiv = document.getElementById('application-for-sa')

const facultyList = document.getElementById('faculties')

const applicationForm = document.getElementById('application-form')

const emptyPage = document.getElementById('page-underdevelopment')

menuIcon.addEventListener('click', ()=>{
  if(isMenuOpen){
    menuIcon.classList.toggle('fa-bars')
    menuIcon.classList.toggle('fa-close')
  }
})

loadPage(preloader)
loadingAnimation(images)

const HTML = document.documentElement
    
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

window.matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => {
  if (localStorage.getItem('theme-preference') === 'system') {
    HTML.classList.toggle('dark', e.matches);
  }
});

if(emptyPage){
  deploymentMessage(emptyPage, "../")
}

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
  } else if (resourcesGrid) {
    
    const allResources = [timetable, calendar, mapResources, armsOfGov]

    allResources.forEach(resource => {
      resourcesGrid.insertAdjacentHTML("beforeend", resource.renderHTML())
    })
     
  } else  {
    // mapGrid.innerHTML = mapData.renderHTML()
    // mapGrid.innerHTML
    
    renderResource(mapData, mapGrid) 
    setTimeout(() => {
      mapSearch.setupSearch(searchInputMap, resultsInfo, mapGrid);
    }, 100);
    renderResource(timetablesData, timetablesGrid)
    setTimeout(() => {
      timetableSearch.setupSearch(searchInput, resultsInfo, timetablesGrid);
    }, 100);
    renderResource(calendarData, calendarGrid, calendarSelector)
    
    setTimeout(() => {
      calendarSearch.setupSearch(searchInputCal, resultsInfo, calendarGrid);
    }, 100);
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
          
          executiveIntro.innerHTML = `${e.name} is the ${showPosition(e.id)} elected Executives for the SUG Family, Federal University of Technology, Owerri and Were the SUG executives for the 20${e.id -2}/${e.id -1} timetable year. 
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
    
    submitApplication(applicationForm, status)
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
  
  function loadTheme() {
    const saved = localStorage.getItem('theme-preference');
    if (saved && THEMES.includes(saved)) {
      setTheme(saved);
    } else {
      setTheme('system');
    }
  }
  
  // function isDarkMode() {
  //   return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  //   }
  
  function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('theme-preference', theme);
    
    // Reset classes
    HTML.classList.remove('light', 'dark');
    HTML.classList.remove('light', 'dark');
    
    if (theme === 'light') {
      HTML.classList.add('light');
      themeIcon.className = `fa-solid ${icons.light}`;
      themeLabel.textContent = 'Light';
    } else if (theme === 'dark') {
      HTML.classList.add('dark');
      themeIcon.className = `fa-solid ${icons.dark}`;
      themeLabel.textContent = 'Dark';
    } else { // system
      // no class → Tailwind uses prefers-color-scheme
      themeIcon.className = `fa-solid ${icons.system}`;
      themeLabel.textContent = 'System';
    }
    
    // Visual feedback
    themeBtn.classList.add('ring-2', 'ring-blue-500', 'dark:ring-blue-400');
    setTimeout(() => themeBtn.classList.remove('ring-2', 'ring-blue-500', 'dark:ring-blue-400'), 800);
  }
  
  function cycleTheme() {
    const currentIndex = THEMES.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % THEMES.length;
    setTheme(THEMES[nextIndex]);
  }
  
  loadTheme();
  
  themeBtn.addEventListener('click', cycleTheme);
  
  // if (!isDarkMode()) {
  //   themeIcon.classList.add('fa-sun')
  //   themeIcon.classList.remove('fa-moon')
  // }
})
}
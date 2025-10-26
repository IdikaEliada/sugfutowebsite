import {excosList} from './data/excosList.js';

import {setupReadMore} from './about-exco.js'

const eventsGrid = document.getElementById('events-set-container')

export function displayExcoEvent( executivesSet) {
  
  let eventsHTML = '';
  
  excosList.forEach(excoSet => {
    
    if (excoSet.id === executivesSet){
      
      if(!excoSet.events || excoSet.events === null){
        (!excoSet.events.host || excoSet.events.host === null) ?
          eventsHTML += `
          <div class="flex-1 justify-center align-center max-w-sm p-6 bg-white/15 border border-gray-200 rounded-lg shadow-sm dark:bg-${excoSet.color}-800/15 dark:border-gray-700 text-center">
          <div class="executive-detail-container">
            <img src=${excoSet.logo != null? excoSet.logo : `images/aluta_logo.png`} alt="20250616-210243" border="0" class="w-full h-full object-cover touch-auto overflow-auto object-top" loading='lazy' 
            />
          </div>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">No Data Found</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">The executives data is still being uploaded.
            </p>
          </div>
        </div>`
        : 
        eventsHTML += `
        <div class="flex flex-col max-w-sm bg-red/15 border border-gray-200 rounded-lg shadow-sm dark:bg-${excoSet.color}-800/10 dark:border-gray-700  w-full backdrop-blur-sm">
        <div class="max-h-42 overflow-hidden">
          <img src=${excoSet.group.image}
          class="rounded-t-lg"
          loading="lazy"/>
        </div>
        <div class="p-4">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">${excoSet.name} Executives</h5>
          <div class="font-medium text-xl">${excoSet.about}. ${excoSet.name} executives were the FUTO SUG executives  20${excoSet.id -2}/20${excoSet.id -1}</div>
          <div class="inline-flex flex-col pt-2 font-medium items-start hover:underline text-sm">
            <span>Led By:</span>
            <span class="text-${excoSet.color}-600">
              ${excoSet.group.president}
            </span>
          </div>
        </div>
      </div>`
      } else {
      
        excoSet.events.forEach(event => {
          console.log(event)
    
          eventsHTML += `
          <div class="events-container max-w-sm bg-white/15 border border-gray-200 rounded-lg shadow-sm dark:bg-${excoSet.color}-800/15 dark:border-gray-700">
            <div class="events-detail-container bg-linear-30 from-${excoSet.color}-500 to-${excoSet.color}-800 min-h-38 max-h-42 overflow-hidden">
                <img src=${excoSet.image != null? excoSet.image : excoSet.logo} alt=${event.name} border="0" class="w-full h-full object-cover touch-auto overflow-auto object-top" loading='lazy' 
                />
            </div>
            <div class="p-6">
            <div class="block text-sm/6 font-medium text-gray-800 dark:text-gray-400">
              ${event.titles}
            </div>
            <div>
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">${event.name}</h5>
            </div>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-300 content-container text-base">
              <span class="content-wrapper">
                <span class="content">
                  <span class="text text-base">
                    <span>
                      ${event.about}
                    </span>
                    <span>
                      <span>Comr.</span>
                      <span>
                        ${event.name},
                      </span> 
                    </span> 
                    <span>
                    served as the SUG
                    </span> 
                    <span> ${event.position} </span>
                    <span> under the ${excoSet.name} executives FUTO. 
                    </span> 
                    <span> 
                      ${event.role}. 
                    </span>
                  </span>
                </span>
              </span>
              <span class="read-more-btn font-medium items-center text-${excoSet.color}-600 hover:underlined-md cursor-pointer transition-colors duration-300 hover:bg-${excoSet.color}-700 inline-flex text-xs/10 hidden" aria-expanded="false">
              </span>
            </p>
            <div class="inline-flex font-medium items-center text-${excoSet.color}-600 hover:underline text-xl">
              ${event.position}
            </div>
            </div>
          </div>`
        })
      }
    }
  })
  
  return eventsHTML
}

document.addEventListener('DOMContentLoaded', () => {
  setupReadMore(eventsGrid)
});
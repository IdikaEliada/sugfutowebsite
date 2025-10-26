import {excosList} from '../sections/executives/data/excosList.js';

let selectionBoxHTML = '';

export function renderEventList(){
  excosList.forEach((excoSet) => {
  selectionBoxHTML += `
    <li class="relative cursor-default py-2 pr-9 pl-3 select-none" id="listbox-option-${excoSet.id}" role="option">
      <div class="flex items-center">
        <div class="flex justify-center items-center">
          <img src=${excoSet.logo != null ? excoSet.logo : `images/aluta_logo.png`} class="w-5 h-5 object-contain"
          />
        </div>
        <span class="ml-3 block truncate font-normal">
          20${excoSet.id -2}/20${excoSet.id -1} Executives
        </span>
      </div>
      
      <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-green-800 dark:text-green-500" data-selected-set-checked = ${excoSet.id} id="check-${excoSet.id}">
        ${excoSet.id === 27 ? 
          `<i class="fa fa-check" aria-hidden="true"></i>` : ''
        }
      </span>
    </li>`
    
  })
  
  return selectionBoxHTML;
}

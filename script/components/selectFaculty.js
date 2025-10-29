import { faculties } from "../../data/faculties.min.js"

import {shortenFaculty} from "../libs/abbr.js"

let facultyOption = ''

export function renderFaculty() {
  faculties.forEach(faculty => {
    
    facultyOption += `
    <option value=${shortenFaculty(faculty)}> 
      ${faculty}
    </option>`
    }
  )
  
  return facultyOption;
}
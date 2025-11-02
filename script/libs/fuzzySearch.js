
import { allTimetables } from "../../data/timetables.js";

function normalizeText(text) {
  return text
    .toLowerCase()                    
    .replace(/[^a-z\s]/g, '')        
    .replace(/\s+/g, ' ')            
    .trim();                         
}

class Search {
  constructor(data){
    this.data = data
  }

  match(searchQuery, textToSearch){
    const normalizedQuery = normalizeText(searchQuery);
    const normalizedText = normalizeText(textToSearch);

    return normalizedText.includes(normalizedQuery);

  }

  filterData(data, query) {
    if (!query.trim()) {
      return data;
    }

    return data.filter(d => {
      return this.match(query, d.name) || this.match(query, d.description)
    
  });
  }

  setupSearch(input, output, source) {
  
    if (!input || !source) {
      return;
    }
  
  
    const allCards = Array.from(source.querySelectorAll('.events-container'));
  
  // Add event listener for input changes
    input.addEventListener('input', (e) => {
      const query = e.target.value;
    
    // Show all cards if search is empty
      if (!query.trim()) {
        allCards.forEach(card => {
          card.style.display = '';
        });
        output.textContent = '';
        return;
      }
    
    // Filter and display cards
      let visibleCount = 0;
    
      allCards.forEach(card => {
      // Get the faculty name from the card
        const nameElement = card.querySelector('h5');
        const descriptionElement = card.querySelector('p');
      
        if (!nameElement) {
          card.style.display = 'none';
          return;
        }
      
        const nameText = nameElement.textContent;
        const descriptionText = descriptionElement ? descriptionElement.textContent : '';
      
      // Check if query matches faculty or description
      if (this.match(query, nameText) || this.match(query, descriptionText)) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });
    
    // Update results info
    if (visibleCount === 0) {
      output.textContent = `No timetables found for "${query}"`;
      output.classList.add('text-red-600', 'dark:text-red-400');
    } else {
      output.textContent = `Found ${visibleCount} timetable${visibleCount !== 1 ? 's' : ''}`;
      output.classList.remove('text-red-600', 'dark:text-red-400');
    }
    });
  
  // Optional: Add clear button functionality
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      input.value = '';
      input.dispatchEvent(new Event('input'));
    }
  });
  }

}

class TimetableSearch extends Search{
  filterData(allTimetables, query) {
    if (!query.trim()) {
      return data;
    }

    return allTimetables.filter(timetable => {
      return this.match(query, timetable.name) 
       || this.match(query, timetable.description) 
         || this.match(query, timetable.faculty)
    
    });
  }
}

const timetableSearch = new TimetableSearch(allTimetables)


export { timetableSearch };
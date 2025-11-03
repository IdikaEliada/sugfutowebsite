
import { allTimetables } from "../../data/timetables.js";
import { allPlacesInFuto } from "../../data/places_in_futo.js";
import { allActivities } from "../../data/activities.js";

function normalizeText(text) {
  return text
    .toLowerCase()                    
    .replace(/[^a-z\s]/g, '')        
    .replace(/\s+/g, ' ')            
    .trim();                         
}

class Search {
  constructor(data, item){
    this.data = data
    this.item = item
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
      output.textContent = `No ${this.item}s found for "${query}"`;
      output.classList.add('text-red-600', 'dark:text-red-400');
    } else {
      output.textContent = `Found ${visibleCount} ${this.item}${visibleCount !== 1 ? 's' : ''}`;
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

class MapSearch extends Search{
  filterData(allPlacesInFuto, query) {
    if (!query.trim()) {
      return data;
    }

    return allPlacesInFuto.filter(place => {
      return this.match(query, place.name) 
       || this.match(query, place.description) 
    
    });
  }

  setupSearch(input, output, source) {
  
    if (!input || !source) {
      return;
    }
  
    const allCards = Array.from(source.querySelectorAll('.map-container'));
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
        const linkDiv = card.querySelector('.events-container');
        const contentDiv = linkDiv.querySelector('a')
        const descriptionElement = linkDiv.querySelector('p');
        const nameElement = contentDiv.querySelector('h5');
        
        // const nameElement = card.querySelector('h5');
        // const descriptionElement = card.querySelector('p');
      
        if (!nameElement) {
          card.style.display = '';
          return;
        }
      
        const nameText = nameElement.textContent;
        const descriptionText = descriptionElement ? descriptionElement.textContent : '';
      

      if (this.match(query, nameText) || this.match(query, descriptionText)) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });
    
    // Update results info
    if (visibleCount === 0) {
      output.textContent = `No ${this.item}s found for "${query}"`;
      output.classList.add('text-red-600', 'dark:text-red-400');
    } else {
      output.textContent = `Found ${visibleCount} ${this.item}${visibleCount !== 1 ? 's' : ''}`;
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

class CalendarSearch extends Search{
  filterData(allActivities, query) {
    if (!query.trim()) {
      return data;
    }

    return allActivities.filter(semester => {
      semester.timetables = semester.timetables.filter(timetable => {
        timetable.activities = timetable.activities.filter(activity => {
          return this.match(query, activity.description) 
          || this.match(query, activity.type) || this.match(query, activity.week)
          || this.match(query, activity.startDate) || this.match(query, activity.endDate)
          || this.match(query, activity.location);
        });
        return timetable.activities.length > 0;
      });
      return semester.timetables.length > 0;
    
    });
  }

  setupSearch(input, output, source) {
  
    if (!input || !source) {
      return;
    }
  
    const allCards = Array.from(source.querySelectorAll('.calendar-container'));
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
        const dateElement = card.querySelector('div > div > time');
        const typeElement = card.querySelector('div > span');
        const nameElement = card.querySelector('div > h4');
        const weekElement = card.querySelector('div > p');
        const locationElement = card.querySelector('div > a');
        
        // const nameElement = card.querySelector('h5');
        // const descriptionElement = card.querySelector('p');
      
        if (!nameElement) {
          card.style.display = '';
          return;
        }
        
        const dateText = dateElement ? dateElement.textContent : '';
        const nameText = nameElement.textContent;
        const typeText = typeElement ? typeElement.textContent : '';
        const weekText = weekElement ? weekElement.textContent : '';
        const locationText = locationElement ? locationElement.textContent : '';
      

      if (this.match(query, nameText) || this.match(query, dateText) 
        || this.match(query, typeText) || this.match(query, weekText) 
        || this.match(query, locationText)) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });
    
    // Update results info
    if (visibleCount === 0) {
      output.textContent = `No ${this.item}s found for "${query}"`;
      output.classList.add('text-red-600', 'dark:text-red-400');
    } else {
      output.textContent = `Found ${visibleCount} ${this.item}${visibleCount !== 1 ? 's' : ''}`;
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

const mapSearch = new MapSearch(allPlacesInFuto, "place")

const timetableSearch = new TimetableSearch(allTimetables, "timetable" )

const calendarSearch = new CalendarSearch(allActivities, "activity" )


export { timetableSearch, mapSearch, calendarSearch };
import {excosList} from './data/excosList.js';

export function setupReadMore(target) {
  if (target) {
  document.querySelectorAll('.content-container').forEach(container => {
    const textSpan = container.querySelector('.text');
    const readMoreBtn = container.querySelector('.read-more-btn');

    if (textSpan && readMoreBtn) {
      new Cuttr(textSpan, {
        truncate: 'characters', // Truncate by characters
        length: 200, // Truncate after 100 characters
        ending: '...', // Custom ellipsis
        readMore: true, // Enable "Read More" button
        readMoreText: 'Show More', // Text for expand
        readLessText: 'Show Less', // Text for collapse
        readMoreBtnPosition: 'after', // Position the button after the text
        readMoreBtnTag: 'button', // Use button tag
        readMoreBtnSelectorClass: 'read-more-btn', // Use existing button class
        readMoreBtnAdditionalClasses: 'font-medium items-center text-green-600 hover:underlined-md cursor-pointer transition-colors duration-300 hover:bg-green-700 inline-flex text-xs/10 hidden',
        title: false // No title attribute
      });

      // Ensure the button is linked to the correct text span
      readMoreBtn.dataset.target = textSpan.id;
    }
  });
  }
}


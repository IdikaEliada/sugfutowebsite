// ============================================
// THEME TOGGLE FUNCTIONALITY
// ============================================
    
  const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;

    /**
     * Check if user's system prefers dark mode
     * @returns {boolean}
     */
    function isDarkMode() {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    /**
     * Apply theme to the document
     * @param {string} theme - 'light' or 'dark'
     */
    function setTheme(theme) {
      if (theme === 'dark') {
        htmlElement.classList.add('dark');
        htmlElement.dataset.theme = 'dark';
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        console.log('Theme switched to: Dark Mode');
      } else {
        htmlElement.classList.remove('dark');
        htmlElement.dataset.theme = 'light';
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        console.log('Theme switched to: Light Mode');
      }
      // Save theme preference to localStorage
      localStorage.setItem('color-theme', theme);
    }

    /**
     * Get current theme
     * @returns {string} 'light' or 'dark'
     */
    function getCurrentTheme() {
      return htmlElement.classList.contains('dark') ? 'dark' : 'light';
    }

    /**
     * Toggle between light and dark mode
     */
    function toggleTheme() {
      const currentTheme = getCurrentTheme();
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      
      // Optional: Add smooth transition effect
      htmlElement.style.transition = 'background-color 0.3s ease, color 0.3s ease';
      setTimeout(() => {
        htmlElement.style.transition = '';
      }, 300);
    }

    /**
     * Initialize theme on page load
     */
    function initTheme() {
      // Check for saved theme preference
      const savedTheme = localStorage.getItem('color-theme');
      
      if (savedTheme) {
        // Use saved preference
        setTheme(savedTheme);
      } else if (isDarkMode()) {
        // Use system preference
        setTheme('dark');
      } else {
        // Default to light mode
        setTheme('light');
      }
    }

    // Event listener for theme toggle button
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Initialize theme on load
    initTheme();

    // Listen for system theme changes (only if user hasn't set a preference)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('color-theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });

    // ============================================
    // MENU ICON TOGGLE & CLICK OUTSIDE HANDLER
    // ============================================
    
    const menuIcon = document.getElementById('menu-icon');
    const dropdownButton = document.getElementById('dropdownButton');
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

    // ============================================
    // EXPORT FOR USE IN OTHER FILES
    // ============================================
    
    // Make theme functions available globally
    window.themeManager = {
      toggle: toggleTheme,
      setTheme: setTheme,
      getCurrentTheme: getCurrentTheme,
      isDarkMode: () => getCurrentTheme() === 'dark'
    };

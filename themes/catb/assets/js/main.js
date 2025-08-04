document.addEventListener('DOMContentLoaded', function() {
    // 1. Get references to the elements using their CLASS NAMES
    const menuToggler = document.querySelector('.menu-toggler'); // Selects the <img> with class="menu-toggler"
    const mainNavMenu = document.querySelector('.menu');          // Selects the <ul> with class="menu"

    // Define the paths to your two SVG icons
    // Make sure these paths are correct relative to your site's root
    const menuIconSrc = "/icons/menu.svg";   // Your default menu icon path
    const closeIconSrc = "/icons/close.svg"; // Your close/X icon path

    // 2. Only proceed if both elements are found on the page
    if (menuToggler && mainNavMenu) {
        // 3. Add an event listener to the toggler: when clicked, execute the function
        menuToggler.addEventListener('click', function() {
            // THE CORE FUNCTION: Toggle the 'is-open' class on the menu element
            mainNavMenu.classList.toggle('is-open');

            // Simplest way to change icon based on menu state:
            if (mainNavMenu.classList.contains('is-open')) {
                menuToggler.src = closeIconSrc; // Menu is open, show close icon
            } else {
                menuToggler.src = menuIconSrc;  // Menu is closed, show menu icon
            }
        });
    }
});

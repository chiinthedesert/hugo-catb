document.addEventListener('DOMContentLoaded', function() {
    // 1. Get references to the elements using their CLASS NAMES
    const menuToggler = document.querySelector('.menu-toggler'); // Selects the <img> with class="menu-toggler"
    const mainNavMenu = document.querySelector('.menu');         // Selects the <ul> with class="menu"

    // 2. Only proceed if both elements are found on the page
    if (menuToggler && mainNavMenu) {
        // 3. Add an event listener to the toggler: when clicked, execute the function
        menuToggler.addEventListener('click', function() {
            // THE CORE FUNCTION: Toggle the 'is-open' class on the menu element
            // If 'is-open' is present, it's removed. If absent, it's added.
            mainNavMenu.classList.toggle('is-open');
        });
    }
});

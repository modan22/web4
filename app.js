/**
 * Initialize all event listeners after the DOM content is fully loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navList = document.getElementById('navbar__list');

    // Dynamically build the navigation menu from sections
    sections.forEach(section => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
        navList.appendChild(listItem);
    });

    const navLinks = document.querySelectorAll('.menu__link');

    /**
     * Scroll event to activate section based on the viewport position.
     */
    window.addEventListener('scroll', () => {
        let current = '';

        // Determine which section is in the viewport
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
                current = section.id;
            }
        });

        // Update navigation links based on the active section
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    /**
     * Add smooth scrolling behavior to navigation links.
     */
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Stop the default anchor behavior
            const sectionId = this.getAttribute('href').substring(1);
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});

/**
 * Debounces a function to limit the rate at which it fires.
 * @param {Function} func - The function to debounce.
 * @param {number} delay - The number of milliseconds to delay.
 * @return {Function} - The debounced function.
 */
function debounce(func, delay) {
    let inDebounce;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(inDebounce);
        inDebounce = setTimeout(() => func.apply(context, args), delay);
    };
}
document.querySelectorAll('section').forEach(section => {
    section.addEventListener('click', () => {
        const paragraph = section.querySelector('p');
        if (paragraph.style.display === 'none') {
            paragraph.style.display = 'block';
        } else {
            paragraph.style.display = 'none';
        }
    });
});
section.addEventListener('click', (event) => {
    event.stopPropagation();
    const paragraph = section.querySelector('p');
    paragraph.style.display = (paragraph.style.display === 'none') ? 'block' : 'none';
});
section.addEventListener('click', () => {
    const paragraph = section.querySelector('p');
    paragraph.classList.toggle('visible');
});


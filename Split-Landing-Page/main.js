// Create constants for css class selectors // 
const left = document.querySelector('.left');

const right = document.querySelector('.right');

const container = document.querySelector('.container');

// Add hover-left on mouse enter//
left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
});

// Remove hover-left on mouse leave//
left.addEventListener('mouseleave', () => {

    container.classList.remove('hover-left');
});

// Add hover-right on mouse enter//
right.addEventListener('mouseenter', () => {

    container.classList.add('hover-right');
});

// Remove hover-right on mouse leave//
right.addEventListener('mouseleave', () => {

    container.classList.remove('hover-right');
});
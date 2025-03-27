// Smooth Scroll to Top
document.querySelectorAll('.go-top').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
// Gallery Navigation
const gallery = document.querySelector('.gallery-container img');
let currentIndex = 0;

const images = [
    './nbc.png',
    './kfc.png',
    './target.png'
];

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    gallery.src = images[currentIndex];
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    gallery.src = images[currentIndex];
});
// Email Form Validation
document.querySelector('.email-form').addEventListener('submit', (e) => {
    const email = e.target.querySelector('input').value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        alert('Please enter a valid email address.');
        e.preventDefault();
    }
});
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
const pages = document.querySelectorAll('.page');

let currentPage = 0;

nextButton.addEventListener('click', () => {
  pages[currentPage].classList.add('hidden');
  currentPage = (currentPage + 1) % pages.length;
  pages[currentPage].classList.remove('hidden');
});

prevButton.addEventListener('click', () => {
  pages[currentPage].classList.add('hidden');
  currentPage = (currentPage - 1 + pages.length) % pages.length;
  pages[currentPage].classList.remove('hidden');
});
// Grab elements
const exploreBtn = document.getElementById('exploreBtn');
const welcomeScreen = document.getElementById('welcome-screen');
const portfolioContent = document.getElementById('portfolio-content');

// Button click chesinappudu welcome screen poyi portfolio open avvali
exploreBtn.addEventListener('click', function() {
    welcomeScreen.classList.add('hidden');          // Welcome screen ni hide chestundi
    portfolioContent.classList.remove('hidden');    // Portfolio sections ni chupistundi
});
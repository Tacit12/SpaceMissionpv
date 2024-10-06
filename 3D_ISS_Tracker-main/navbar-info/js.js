/*let currentColorIndex = 0;
const colors = ['#000', '#fff', 'blue', 'red'];

let menuIcon = document.querySelector('.menu-icon');
let cancelIcon = document.querySelector('.cancel-icon');
let headerLinks = document.querySelector('.header-links');

menuIcon.addEventListener('click', function () {
  headerLinks.style.display = 'block';
  headerLinks.style.right = '0';
});

cancelIcon.addEventListener('click', function () {
  headerLinks.style.right = '-100vh';
  headerLinks.style.display = 'none';
});

let youtubeBtn = document.querySelector('.fa-brands.fa-youtube');

// theme color change script
let themeInput = document.getElementById('theme');
const root = document.documentElement; // Get the root element (<html>)
const primaryThemeColor = getComputedStyle(root).getPropertyValue('--primary-theme-color');
themeInput.value = primaryThemeColor;

themeInput.addEventListener('change', function () {
  // Get the value of the input element when it changes
  const color = themeInput.value;
  document.documentElement.style.setProperty('--primary-theme-color', color);
});

// typing animation
document.addEventListener("DOMContentLoaded", function () {
  const options = {
    strings: ['DEVELOPER', 'DESIGNER', 'YOUTUBER'],
    typeSpeed: 150,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
  };

  const multiTextElement = document.querySelector('.multi-text');
  let currentTextIndex = 0;
  let currentText = '';
  let isDeleting = false;

  function type() {
    const fullText = options.strings[currentTextIndex];
    if (isDeleting) {
      currentText = fullText.substring(0, currentText.length - 1);
    } else {
      currentText = fullText.substring(0, currentText.length + 1);
    }

    multiTextElement.textContent = currentText;

    let typeSpeed = options.typeSpeed;
    if (isDeleting) {
      typeSpeed /= 2; // Faster when deleting
    }

    if (!isDeleting && currentText === fullText) {
      typeSpeed = options.backDelay;
      isDeleting = true;
    } else if (isDeleting && currentText === '') {
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % options.strings.length;
    }

    setTimeout(type, typeSpeed);
  }

  type();
});

// Toggle button functionality
let toggleBtn = document.querySelector('.toggle-btn');
let bigWrapper = document.querySelector('.big-wrapper');

let dark = false;

function toggleTheme() {
  dark = !dark;
  if (dark) {
    bigWrapper.classList.add('dark');
    bigWrapper.classList.remove('light');
  } else {
    bigWrapper.classList.remove('dark');
    bigWrapper.classList.add('light');
  }
}

toggleBtn.addEventListener('click', toggleTheme);
*/
let currentColorIndex = 0;
const colors = ['#000', '#fff', 'blue', 'red'];

let menuIcon = document.querySelector('.menu-icon');
let cancelIcon = document.querySelector('.cancel-icon');
let headerLinks = document.querySelector('.header-links');

menuIcon.addEventListener('click', function () {
  headerLinks.style.display = 'block';
  headerLinks.style.right = '0';
});

cancelIcon.addEventListener('click', function () {
  headerLinks.style.right = '-100vh';
  headerLinks.style.display = 'none';
});

let youtubeBtn = document.querySelector('.fa-brands.fa-youtube');

// theme color change script
let themeInput = document.getElementById('theme');
const root = document.documentElement; // Get the root element (<html>)
const primaryThemeColor = getComputedStyle(root).getPropertyValue('--primary-theme-color');
themeInput.value = primaryThemeColor;

themeInput.addEventListener('change', function () {
  // Get the value of the input element when it changes
  const color = themeInput.value;
  document.documentElement.style.setProperty('--primary-theme-color', color);
});

// typing animation
document.addEventListener("DOMContentLoaded", function () {
  const options = {
    strings: ['ASTROPHILE', 'SPACELOVER', 'MEMBER OF TEAM INTERSTELLAR'],
    typeSpeed: 150,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
  };

  const multiTextElement = document.querySelector('.multi-text');
  let currentTextIndex = 0;
  let currentText = '';
  let isDeleting = false;

  function type() {
    const fullText = options.strings[currentTextIndex];
    if (isDeleting) {
      currentText = fullText.substring(0, currentText.length - 1);
    } else {
      currentText = fullText.substring(0, currentText.length + 1);
    }

    multiTextElement.textContent = currentText;

    let typeSpeed = options.typeSpeed;
    if (isDeleting) {
      typeSpeed /= 2; // Faster when deleting
    }

    if (!isDeleting && currentText === fullText) {
      typeSpeed = options.backDelay;
      isDeleting = true;
    } else if (isDeleting && currentText === '') {
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % options.strings.length;
    }

    setTimeout(type, typeSpeed);
  }

  type();
});

// Toggle button functionality
let toggleBtn = document.querySelector('.toggle-btn');
let bigWrapper = document.querySelector('.big-wrapper');

let dark = false;

function toggleTheme() {
  dark = !dark;
  if (dark) {
    bigWrapper.classList.add('dark');
    bigWrapper.classList.remove('light');
  } else {
    bigWrapper.classList.remove('dark');
    bigWrapper.classList.add('light');
  }
}

toggleBtn.addEventListener('click', toggleTheme);

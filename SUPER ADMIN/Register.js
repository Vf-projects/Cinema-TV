document.addEventListener('DOMContentLoaded', () => {
  const images = [
    './images/image 2.jpg',
    './images/image 5.jpg',
    './images/image 6.jpg',
    './images/image 7.jpg',
    './images/image 10.jpg',
    './images/image 11.jpg'
  ];

  const slideshow = document.getElementById('section');
  let index = 0; 

  function showNextImage() {
    slideshow.style.backgroundImage = `url('${images[index]}')`;
    index = (index + 1) % images.length;
  }

  showNextImage();

  setInterval(showNextImage, 5000);
});

document.addEventListener('DOMContentLoaded', () => {
  const mainContent = document.getElementById('main');
  const icon = document.querySelector('.icon');
  const savedTheme = localStorage.getItem('theme') || 'light';

  // Apply saved theme on load
  if (savedTheme === 'dark') {
    mainContent.style.backgroundColor = 'rgb(2, 17, 39)';
    mainContent.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    icon.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
    mainContent.style.color = 'rgb(255, 255, 255)';
    eyeButton.style.color = 'black';
  } else {
    mainContent.style.backgroundColor = 'rgb(255, 255, 255)';
    mainContent.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    icon.innerHTML = '<i class="bi bi-moon-fill"></i>';
    mainContent.style.color = 'black';
  }

  // Toggle theme on click
  document.getElementById('sun').addEventListener('click', () => {
    const currentBg = getComputedStyle(mainContent).backgroundColor;

    if (currentBg === 'rgb(255, 255, 255)') {
      // Switch to dark
      mainContent.style.backgroundColor = 'rgb(2, 17, 39)';
      mainContent.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
      icon.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
      mainContent.style.color = 'rgb(255, 255, 255)';
      eyeButton.style.color = 'black';
      localStorage.setItem('theme', 'dark');
    } else {
      // Switch to light
      mainContent.style.backgroundColor = 'rgb(255, 255, 255)';
      mainContent.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
      icon.innerHTML = '<i class="bi bi-moon-fill"></i>';
      mainContent.style.color = 'black';
      localStorage.setItem('theme', 'light');
    }
  });
});

const fullNameInput = document.getElementById('full');
const emailInput = document.getElementById('ema');
const passwordInput = document.getElementById('pass');

fullNameInput.addEventListener('click', () => {
  const label = document.querySelector('.top');
  if (fullNameInput) {
    label.innerText = 'Enter FullName';
    fullNameInput.placeholder = '';
  }
});

emailInput.addEventListener('click', () => {
  const label = document.querySelector('.top-1');
  if (emailInput) {
    label.innerText = 'Enter Email';
    emailInput.placeholder = '';
  }
});

passwordInput.addEventListener('click', () => {
  const label2 = document.querySelector('.top-2');
  if (passwordInput) {
    label2.innerText = 'Enter Password';
    passwordInput.placeholder = '';
  }
});

const eyeButton = document.getElementById('eye');
eyeButton.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    eyeButton.innerHTML = '<i class="bi bi-eye-fill"></i>';
    passwordInput.type = 'text';
  }
  else {
    eyeButton.innerHTML = '<i class="bi bi-eye-slash-fill"></i>';
    passwordInput.type = 'password';
  }
});

const errorMessage = document.getElementById('error');
const progress = document.getElementById('progress');
const closeButton = document.getElementById('close');
const loginButton = document.getElementById('submit');

let errorTimeout;
let startTime;
let remainingTime = 5000;
let progressPaused = false;
let animationFrame;

function animateProgress(timestamp) {
  if (!startTime) startTime = timestamp;

  const elapsed = timestamp - startTime;
  const progressPercent = Math.max(100 - (elapsed / 5000) * 100, 0);
  progress.style.width = `${progressPercent}%`;

  if (progressPercent > 0 && !progressPaused) {
    animationFrame = requestAnimationFrame(animateProgress);
  } else if (!progressPaused) {
    hideError();
  }
}

function startProgress() {
  cancelAnimationFrame(animationFrame);
  startTime = null;
  progress.style.transition = 'none';
  progress.style.width = '100%';
  void progress.offsetWidth; // force reflow
  progress.style.transition = 'width 0s';
  animationFrame = requestAnimationFrame(animateProgress);
}

function showError() {
  errorMessage.style.right = '20px';
  remainingTime = 5000;
  startProgress();
}

function hideError() {
  errorMessage.style.right = '-400px';
  cancelAnimationFrame(animationFrame);

  errorMessage.addEventListener('transitionend', () => {
    progress.style.transition = 'none';
    progress.style.width = '100%';
    startTime = null;
    remainingTime = 5000;
  }, { once: true });
}

loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (emailInput.value === '' || passwordInput.value === '') {
    showError();
  } else {
    fullNameInput.disabled = true;
    emailInput.disabled = true;
    passwordInput.disabled = true;
  }
});

closeButton.addEventListener('click', hideError);

// Pause on hover
errorMessage.addEventListener('mouseenter', () => {
  progressPaused = true;
  cancelAnimationFrame(animationFrame);
  // Calculate how much time is left
  const computedWidth = parseFloat(getComputedStyle(progress).width);
  const totalWidth = parseFloat(getComputedStyle(progress.parentElement).width);
  const progressPercent = computedWidth / totalWidth;
  remainingTime = progressPercent * 5000;
});

errorMessage.addEventListener('mouseleave', () => {
  progressPaused = false;
  startTime = null;
  animationFrame = requestAnimationFrame(function resume(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progressPercent = Math.max((remainingTime - elapsed) / 5000 * 100, 0);
    progress.style.width = `${progressPercent}%`;

    if (progressPercent > 0 && !progressPaused) {
      animationFrame = requestAnimationFrame(resume);
    } else if (!progressPaused) {
      hideError();
    }
  });
});
const Top = document.getElementById('top');
const sideBar = document.getElementById('sidebar');
const logo = document.querySelector('.logo');
const sunBtn = document.getElementById('sun');
const liList = document.querySelector('.li');
const liList2 = document.querySelector('.li2');
const liList3 = document.querySelector('.li3');
const liList4 = document.querySelector('.li4');
const liList5 = document.querySelector('.li5');
const liList6 = document.querySelector('.li6');
const logoutBtn = document.getElementById('logout');
const working = document.querySelector('.working');
const movieProgress = document.querySelectorAll('.movie-progress');

sunBtn.addEventListener('click', () => {
  const bodyBg = getComputedStyle(document.body).backgroundColor;

  if (bodyBg === 'rgb(238, 238, 238)') {
    document.body.style.backgroundColor = 'rgb(2, 17, 39)';
    document.body.style.color = 'white';
    Top.style.backgroundColor = '#df1648';
    sideBar.style.backgroundColor = '#df1648';
    logo.style.color = 'white';
    liList.style.color = 'white';
    liList2.style.color = 'white';
    liList3.style.color = 'white';
    liList4.style.color = 'white';
    liList5.style.color = 'white';
    liList6.style.color = 'white';
    logoutBtn.style.color = 'white';
    sunBtn.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
    sunBtn.style.color = 'white';
    working.style.background = 'none';
    movieProgress.forEach(movie => {
      movie.style.backgroundColor = '#df1648';
      movie.style.color = 'white';
      movie.style.border = '#df1648';
    });
  } else {
    document.body.style.backgroundColor = 'rgb(238, 238, 238)';
    document.body.style.color = 'black';
    Top.style.backgroundColor = 'white';
    sideBar.style.backgroundColor = 'white';
    logo.style.color = 'black';
    liList.style.color = 'black';
    liList2.style.color = 'black';
    liList3.style.color = 'black';
    liList4.style.color = 'black';
    liList5.style.color = 'black';
    liList6.style.color = 'black';
    logoutBtn.style.color = 'black';
    sunBtn.innerHTML = '<i class="bi bi-moon-fill"></i>';
    sunBtn.style.color = 'black'; 
    movieProgress.forEach(movie => {
      movie.style.backgroundColor = '';
      movie.style.color = '';
      movie.style.border = '';
    });
  }
});

liList.addEventListener('click', () => {
  const isActive = liList.classList.contains('active');
  liList.classList.remove('active');

  if (!isActive) {
    liList.classList.add('active');
    working.style.display = 'block';
  } else {
    working.style.display = 'block';
  }
});


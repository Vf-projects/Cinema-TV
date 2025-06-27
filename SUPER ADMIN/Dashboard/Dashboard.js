const Top = document.getElementById('top');
const sideBar = document.getElementById('sidebar');
const logo = document.querySelector('.logo');
const sunBtn = document.getElementById('sun');
const liList = document.querySelectorAll('.li');
const logoutBtn = document.getElementById('logout');

sunBtn.addEventListener('click', () => {
  const bodyBg = getComputedStyle(document.body).backgroundColor;

  if (bodyBg === 'rgb(238, 238, 238)') {
    document.body.style.backgroundColor = 'rgb(2, 17, 39)';
    document.body.style.color = 'white';
    Top.style.backgroundColor = '#df1648';
    sideBar.style.backgroundColor = '#df1648';
    logo.style.color = 'white';
    liList.forEach(li => {
      li.style.color = 'white';
    });
    logoutBtn.style.color = 'white';
    sunBtn.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
    sunBtn.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'rgb(238, 238, 238)';
    document.body.style.color = 'black';
    Top.style.backgroundColor = 'white';
    sideBar.style.backgroundColor = 'white';
    logo.style.color = 'black';
    liList.forEach(li => {
      li.style.color = 'black';
    });
    logoutBtn.style.color = 'black';
    sunBtn.innerHTML = '<i class="bi bi-moon-fill"></i>';
    sunBtn.style.color = 'black'; 
  }
});

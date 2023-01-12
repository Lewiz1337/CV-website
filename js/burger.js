const btn = document.querySelector('.burger__btn');
const burger = document.querySelector('aside');

let active = false;

btn.addEventListener('click', () => {
  active = !active;
  console.log(1);
  btn.classList.toggle('active');
  if (active) {
    burger.style.right = '0';
  } else {
    burger.style.right = '-20vw';
  }
});

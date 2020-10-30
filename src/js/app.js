const but = document.querySelector('.button');
const main = document.querySelector('.main');
let flag=0;

but.addEventListener('click', () => {
  if (flag===0) {
    main.classList.add('open-info');
    flag = 1;
  }
   else {
    main.classList.remove('open-info');
    flag = 0;
   }
})
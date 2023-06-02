/* window.addEventListener('scroll', (e) => {
  console.log(window.pageYOffset);
});
 */

const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
  menu.classList.toggle('ativo');
});

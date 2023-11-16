
const images = document.querySelectorAll('.seventh-page-bottom .image');
const buttons = document.querySelectorAll('.seventh-page-number-btns button');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    images.forEach((image) => {
      image.classList.remove('active');
    });
    images[index].classList.add('active');
  });
});

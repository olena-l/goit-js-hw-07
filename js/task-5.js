function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorName = document.querySelector('.color');
const colorChangeBtn = document.querySelector('.change-color');

colorChangeBtn.addEventListener('click', () => {
  const newColor = getRandomHexColor();

  colorName.textContent = newColor;
  document.body.style.backgroundColor = newColor;
});

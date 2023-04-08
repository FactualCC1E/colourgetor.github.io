const colorContainer = document.querySelector('#color-container');
const generateBtn = document.querySelector('#generate-btn');

generateBtn.addEventListener('click', generateColor);

function generateColor() {
  const randomColor1 = Math.floor(Math.random() * 256);
  const randomColor2 = Math.floor(Math.random() * 256);
  const randomColor3 = Math.floor(Math.random() * 256);

  const randomColor4 = Math.floor(Math.random() * 256);
  const randomColor5 = Math.floor(Math.random() * 256);
  const randomColor6 = Math.floor(Math.random() * 256);

  const color1 = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
  const color2 = `rgb(${randomColor4}, ${randomColor5}, ${randomColor6})`;

  colorContainer.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
}

const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener('input', () => {
  const spanOutput = input.value.trim();

  if (spanOutput === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = spanOutput;
  }
});

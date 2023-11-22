const button = document.createElement('button');

button.textContent = 'Click';

document.body.append(button);

button.addEventListener('click', handleClick);

function handleClick(e: MouseEvent) {
  console.log(e.target);
}

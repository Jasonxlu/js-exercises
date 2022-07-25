const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-contentddddd!';
container.appendChild(content);

const redtext = document.createElement('p');
redtext.classList.add('content');
redtext.textContent = "Hey I'm red!";
redtext.style.color = 'red';
container.appendChild(redtext);

const bluehead = document.createElement('h3')
bluehead.textContent = "I'm a blue h3!";
bluehead.style.color = 'blue';
container.appendChild(bluehead);

const pinkdiv = document.createElement('div');
pinkdiv.style['border-style'] = "solid";
pinkdiv.style['background-color'] = "pink";
const headin = document.createElement('h1');
headin.textContent = "I'm in a div"
const pin = document.createElement('p');
pin.textContent = "ME TOO!"
pinkdiv.appendChild(headin);
pinkdiv.appendChild(pin);
container.appendChild(pinkdiv);

let fun = function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
// Write your code here!

const idMain = document.getElementById('main').remove();

const newHeader = document.createElement('h1');

newHeader.setAttribute('id', 'victory');

const text = document.createTextNode('Vlad is the champion');

newHeader.appendChild(text);
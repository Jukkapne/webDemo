// DOM manipulation - change text content
const textElement = document.getElementById('text');
const changeTextButton = document.getElementById('changeTextButton');
const addElementButton = document.getElementById('addElementButton');
const container = document.getElementById('container');



// Responsive layout change on window resize
window.addEventListener('resize', () => {
  if (window.innerWidth < 500) {
    container.classList.add('resized');
    container.style.width = '150px';
    container.style.height = '150px';
  } else {
    container.classList.remove('resized');
    container.style.width = '300px';
    container.style.height = '300px';
  }
});

// Class for creating new DOM elements
class Component {
  constructor(tag, content) {
    this.element = document.createElement(tag);
    this.element.innerHTML = content;
  }
  
  render(parent) {
    parent.appendChild(this.element);
  }
}

// Prototyping: Add new method to dynamically created elements
Component.prototype.addStyle = function() {
  this.element.style.color = 'red';
  this.element.style.fontWeight = 'bold';
}

addElementButton.addEventListener('click', () => {
  const newElement = new Component('p', 'I am a dynamically created element!');
  newElement.render(container);
  newElement.addStyle();
});

changeTextButton.addEventListener('click', () => {
    textElement.textContent = 'Text has been changed!';
  });

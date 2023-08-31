// Add html
let box = document.querySelector("#box");
let elementOne = document.createElement("div");
let elementTwo = document.createElement("img");
let elementThree = document.createElement("h2");
box.appendChild(elementOne);
elementOne.appendChild(elementTwo);
elementTwo.src =
  "https://cdn.corporate.walmart.com/dims4/WMT/f7a8313/2147483647/strip/true/crop/1920x1080+0+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Fcdn.corporate.walmart.com%2F7b%2F66%2F142c151b4cd3a19c13e1ca65f193%2Fbusinessfornature-banner.png";
elementTwo.alt = "image";
elementOne.appendChild(elementThree);
elementThree.textContent = "image title";
elementOne.className = "wrapper";

// Add style
let fontSize = 30;
let width = 600;
let color = 'red'
elementThree.style.fontSize = `${fontSize}px`; // "fontSize + px"
elementThree.style.color = `${color}` // "color"
elementTwo.style.width = `${width}px`; // "width + px"

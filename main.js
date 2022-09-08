let pixels = prompt("Pixels per side (must be less than 100)");
if (pixels > 100) {
  window.location.reload();
}
let numOfDivs = pixels * pixels;

const body = document.querySelector("body");
const container = document.querySelector(".box-container");
const resetBtn = document.querySelector(".reset-button");
const clearButton = document.querySelector(".clear-button");
const rainbowButton = document.querySelector(".rainbow-button");
const blackButton = document.querySelector(".black-button");
const eraseButton = document.querySelector(".erase-button");

function createBoxes(numOfDivs) {
  for (let i = 0; i < numOfDivs; i++) {
    let boxes = document.createElement("div");
    boxes.style.background = "white";
    boxes.style.width = `${500 / pixels}px`;
    boxes.style.height = `${500 / pixels}px`;
    boxes.classList.add("box-class");
    container.appendChild(boxes);
  }
}

createBoxes(numOfDivs);

const allBoxes = document.querySelectorAll(".box-class");

allBoxes.forEach((eachBox) => {
  eachBox.addEventListener("mouseover", () => {
    eachBox.style.background = "black";
  });
});

rainbowButton.addEventListener("click", () => {
  allBoxes.forEach((eachBox) => {
    eachBox.addEventListener("mouseover", () => {
      eachBox.style.background = `rgb(${Math.ceil(
        Math.random() * 255
      )}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(
        Math.random() * 255
      )})`;
    });
  });
});

blackButton.addEventListener("click", () => {
  allBoxes.forEach((eachBox) => {
    eachBox.addEventListener("mouseover", () => {
      eachBox.style.background = "black";
    });
  });
});

eraseButton.addEventListener("click", () => {
  allBoxes.forEach((eachBox) => {
    eachBox.addEventListener("mouseover", () => {
      eachBox.style.background = "white";
    });
  });
});

clearButton.addEventListener("click", () => {
  allBoxes.forEach((eachBox) => {
    eachBox.style.background = "white";
  });
});

resetBtn.addEventListener("click", () => {
  window.location.reload();
});

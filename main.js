let pixels = prompt("Pixels per side (must be less than 100)");
if (pixels > 100) {
    window.location.reload();
}
let numOfDivs = pixels * pixels;

const body = document.querySelector("body");
const container = document.querySelector(".container");
const resetBtn = document.querySelector(".reset-button");

function createBoxes(numOfDivs) {
  for (let i = 0; i < numOfDivs; i++) {
    let boxes = document.createElement("div");
    boxes.style.background = "yellow";
    boxes.style.width = `${800 / pixels}px`;
    boxes.style.height = `${800 / pixels}px`;
    boxes.classList.add("box-class");
    container.appendChild(boxes);
  }
}

createBoxes(numOfDivs);

const allBoxes = document.querySelectorAll(".box-class");

allBoxes.forEach((eachBox) => {
  eachBox.addEventListener("mouseover", () => {
    eachBox.style.background = `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random()
         * 255)}, ${Math.ceil(Math.random() * 255)})`;
  });
});

resetBtn.addEventListener("click", () => {
  window.location.reload();
});

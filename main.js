let pixels = prompt("Pixels per side");
let numOfDivs = pixels * pixels;

const body = document.querySelector('body');
const container = document.querySelector('.container');
const resetBtn = document.querySelector('.reset-button');



function createBoxes(numOfDivs){
    for (let i = 0; i < numOfDivs; i++) {
        let boxes = document.createElement('div');
        boxes.style.background = 'yellow';
        boxes.style.width = `${800/pixels}px`;
        boxes.style.height = `${800/pixels}px`;
        boxes.classList.add("box-class");
        container.appendChild(boxes);
    }
}

createBoxes(numOfDivs);

const allBoxes = document.querySelectorAll('.box-class');

allBoxes.forEach((eachBox) => {
    eachBox.addEventListener('mouseover', () => {
        eachBox.style.background = 'purple';
    });
});

resetBtn.addEventListener('click', () => {
    window.location.reload();
});



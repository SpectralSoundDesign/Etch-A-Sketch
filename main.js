const numOfDivs = 256;

const body = document.querySelector('body');
const container = document.querySelector('.container');


function createBoxes(numOfDivs){
    for (let i = 0; i < numOfDivs; i++) {
        let boxes = document.createElement('div');
        boxes.style.background = 'yellow';
        boxes.style.width = '50px';
        boxes.style.height = '50px';
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



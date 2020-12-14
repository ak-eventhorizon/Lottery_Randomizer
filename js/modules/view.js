// @ts-check -- enable type checking
'use strict';



function generateUi4of20At(rootID){

    let appRootElement = document.getElementById(rootID);

    let elementSet1 = document.createElement('div');
    elementSet1.id = 'set1';

    let elementSet2 = document.createElement('div');
    elementSet2.id = 'set2';

    let elementMainButton = document.createElement('button');
    elementMainButton.id = 'mainButton';
    elementMainButton.innerHTML = 'Make me rich!';

    let elementControls = document.createElement('div');
    elementControls.id = 'controls';
    elementControls.appendChild(elementMainButton);

    for (let i = 1; i <= 20; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.innerHTML = `${i}`;
        cell.id = `c1_${i}`;
        elementSet1.appendChild(cell);
    }

    for (let i = 1; i <= 20; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.innerHTML = `${i}`;
        cell.id = `c2_${i}`;
        elementSet2.appendChild(cell);
    }

    appRootElement.appendChild(elementSet1);
    appRootElement.appendChild(elementSet2);
    appRootElement.appendChild(elementControls);
}



function markWinNumbers(arrWinSet, numOfSet) {

    for (let i = 0; i < arrWinSet.length; i++) {
        let currentElement = document.getElementById(`c${numOfSet}_${arrWinSet[i]}`); //c1_14
        currentElement.classList.toggle('marked');
    }
}



function resetCellMarking(){
    //reset 'marked' class from all cells in IU

    let cells = document.getElementsByClassName('cell'); // HTML Collection
    
    for (let i = 0; i < cells.length; i++) {
        let element = cells[i];
        
        if (element.classList.contains('marked')) {
            element.classList.toggle('marked');
        }
    }
}



export { generateUi4of20At, markWinNumbers, resetCellMarking };
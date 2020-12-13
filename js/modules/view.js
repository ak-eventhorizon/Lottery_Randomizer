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


export { generateUi4of20At };
// @ts-check -- enable type checking
'use strict';

function generateUi4of20At(rootID){

    let appRootElement = document.getElementById(rootID);

    let elementSet1 = document.createElement('div');
    let elementSet2 = document.createElement('div');
    let elementMainButton = document.createElement('button');
    elementSet1.id = 'set1';
    elementSet2.id = 'set2';
    elementMainButton.id = 'mainButton';

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
    appRootElement.appendChild(elementMainButton);
}


export { generateUi4of20At};
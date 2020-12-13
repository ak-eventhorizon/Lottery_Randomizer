// @ts-check -- enable type checking
'use strict';

function addEventListenerOnMainButton(){
    let mainButton = document.getElementById('mainButton');

    mainButton.addEventListener('click', () => {
        console.log('Button CLICK!');
    });
    
}

export { addEventListenerOnMainButton };
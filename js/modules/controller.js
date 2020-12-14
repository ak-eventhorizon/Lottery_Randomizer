// @ts-check -- enable type checking
'use strict';

import * as model from "./model.js";
import * as view from "./view.js";

function buttonMainAction(){
    let winSet1 = model.random4of20();
    let winSet2 = model.random4of20();

    view.resetCellMarking();

    view.markWinNumbers(winSet1, 1);
    view.markWinNumbers(winSet2, 2);
}

function addEventListenerOnMainButton(){
    let mainButton = document.getElementById('mainButton');

    mainButton.addEventListener('click', () => {
        buttonMainAction();
    });
    
}

export { addEventListenerOnMainButton };
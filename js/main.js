// @ts-check -- enable type checking
'use strict';

import * as view from "./modules/view.js";
import * as controller from "./modules/controller.js";


window.onload = function () {
    view.generateUi4of20At('app');
    controller.addEventListenerOnMainButton();
};
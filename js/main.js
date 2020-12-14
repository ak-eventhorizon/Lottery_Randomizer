// @ts-check -- enable type checking
'use strict';

import * as view from "./modules/view.js";
import * as controller from "./modules/controller.js";


window.onload = function () {
    view.generateUi4of20At('app');
    controller.addEventListenerOnMainButton();
};


// комментарии переместить в README

// Model - предоставляет данные и реагирует на команды контроллера, изменяя своё состояние

// View - отвечает за отображение данных пользователю, реагируя на изменения модели (фактически это
// уже готовый объект - ui)

// Controller - интерпретирует действия пользователя, оповещая модель о необходимости изменений


//  main.js -- тут импорты всего, функция init()
//      model.js -- хранилище состояния и логика программы, без привезки к интерфейсу и событиям
//      view.js -- весь ui c с перегенерацией элементов и отрисовкой всего нужного (export ui.smthn)
//      controller.js -- все возможные действия пользователя описываются тут (export action.smthn)

// model <---> controller <---> view
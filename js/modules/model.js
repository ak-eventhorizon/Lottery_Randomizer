// @ts-check -- enable type checking
'use strict';

function getRandomIntIncusive(min, max) {
    //return random integer fron min(included) to max(included)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function random4of20(){
    //return array of 4 random unique numbers from 20 numbers array

    let arr20 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    let arr4random = [];

    for (let i = 0; i < 4; i++) {
        let randomIndex = getRandomIntIncusive(0,arr20.length-1);
        let randomArrElement = arr20.splice(randomIndex,1);

        arr4random.push(randomArrElement[0]);
    }

    return arr4random;
}

export { random4of20 };
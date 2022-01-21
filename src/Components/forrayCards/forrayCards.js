import newCard from "../GameDisplay/newCard.png";
import back from "./images/back/forrayCard.png";
import randCard from "../GameDisplay/randCard.jpg";
// import { titanArray } from "../forrayCards/forrayCards";

import T0 from "./images/T0/T0.png"
import T0UL from "./images/T0/T0UL.png"
import T0UR from "./images/T0/T0UR.png"
import T0BL from "./images/T0/T0BL.png"
import T0BR from "./images/T0/T0BR.png"


import T1 from "./images/T1/T1.jpg"
import T1UL from "./images/T1/T1UL.png"
import T1UR from "./images/T1/T1UR.png"
import T1BL from "./images/T1/T1BL.png"
import T1BR from "./images/T1/T1BR.png"

import T2 from "./images/T2/T2.png"
import T2UL from "./images/T2/T2UL.png"
import T2UR from "./images/T2/T2UR.png"
import T2BL from "./images/T2/T2BL.png"
import T2BR from "./images/T2/T2BR.png"



const titanArray = [
    {
        pic: T0,
        attack: 8,
        defense: 0,
        ul: T0UL,
        ur: T0UR,
        bl: T0BL,
        br: T0BR,
        back: back

    },
    {
        pic: T1,
        attack: 26,
        defense: 2,
        ul: T1UL,
        ur: T1UR,
        bl: T1BL,
        br: T1BR,

    },
    {
        pic: T2,
        attack: 16,
        defense: 2,
        ul: T2UL,
        ur: T2UR,
        bl: T2BL,
        br: T2BR,
    },
];
// const titans = shuffle(titanArray)

// function shuffle(titanArray) {
//     let num
//     let ran = randomNum(0, 2);
//     let randomArray = []
//     let randomTitans = []
//     randomArray.push(ran);
//     randomTitans.push(titanArray[ran])
//     for (let i = 0; i < titanArray.length; i++) {
//         num = randomNum(0, 2)
//         if (randomArray.includes(num)) {
//             i--
//             continue
//         }
//         else {
//             randomArray.push(num)
//             randomTitans.push(titanArray[num])
//         }

//     }
//     console.log(randomArray);
//     return randomArray

// }

// function randomNum(min, max) {
//     let temp = Math.floor(Math.random() * (max - min + 1) + min)
//     return temp

// }


// export default titans 

export default titanArray
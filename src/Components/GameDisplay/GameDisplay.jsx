import react, { useState } from "react";
import "./GameDisplay.css";
import titanArray from "../forrayCards/forrayCards";
import Titan from "../Titan/Titan";

// function cardHandler() {
//   if (cardFront.armor == true) {
//   }
// }

function randomNum(min, max) {
  let temp = Math.floor(Math.random() * (max - min + 1) + min);
  return temp;
}

function GameDisplay(props) {
  const rand = randomNum(1, 2);

  let rando = randomNum(1, 2);
  const [cardBack, setcardBack] = useState(false);
  const [cardFront, setcardFront] = useState(titanArray[rando].pic);
  const [titanStats, settitanStats] = useState({
    pic: titanArray[0].pic,
    attack: titanArray[0].attack,
    defense: titanArray[0].defense,
    ul: titanArray[0].ul,
    ur: titanArray[0].ur,
    bl: titanArray[0].bl,
    br: titanArray[0].br,
  });

  const [titanDisplay, settitanDisplay] = useState({
    //TODO genretae random number
    ul: titanArray[0].ul,
    ur: titanArray[0].ur,
    bl: titanArray[0].bl,
    br: titanArray[0].br,
    ulCheck: false,
    urCheck: false,
    blCheck: false,
    brCheck: false,
  });

  function forrayHandler() {
    const rand = randomNum(1, 2);
    cardBack ? setcardBack(false) : setcardBack(true);
    if (!cardBack) {
      // setTimeout(() => {
      //TODO cant get the image to not change immediately
      setcardFront(titanArray[rand].pic);
      // }, 100);

      const updatedStats = {
        pic: titanArray[rand].pic,
        attack: titanArray[rand].attack,
        defense: titanArray[rand].defense,
        ul: titanArray[rand].ul,
        ur: titanArray[rand].ur,
        bl: titanArray[rand].bl,
        br: titanArray[rand].br,
        // back: back,
      };
      settitanStats({ ...updatedStats });

      // settitanDisplay({ ...updatedStats });

      // settitanStats({
      //   pic: titanArray[rand].pic,
      //   attack: titanArray[rand].attack,
      //   defense: titanArray[rand].defense,
      //   ul: titanArray[rand].ul,
      //   ur: titanArray[rand].ur,
      //   bl: titanArray[rand].bl,
      //   br: titanArray[rand].br,
      // });

      // settitanStats(function (prevState, props) {
      //   console.log(prevState);
      //   console.log(props);
      //   return {
      //     pic: titanArray[rand].pic,
      //     attack: titanArray[rand].attack,
      //     defense: titanArray[rand].defense,
      //     ul: titanArray[rand].ul,
      //     ur: titanArray[rand].ur,
      //     bl: titanArray[rand].bl,
      //     br: titanArray[rand].br,
      //   };
      // });

      //   (prevState) => ({
      //   ...prevState,
      //   pic: titanArray[rand].pic,
      //   attack: titanArray[rand].attack,
      //   defense: titanArray[rand].defense,
      //   ul: titanArray[rand].ul,
      //   ur: titanArray[rand].ur,
      //   bl: titanArray[rand].bl,
      //   br: titanArray[rand].br,
      // }));
      // settitanStats({ check: true }, () => {
      //   console.log(titanStats);
      // });
      console.log("check final");
      console.log(titanStats);
      props.onCard(updatedStats);
    }
  }
  return (
    <>
      {/* {ulChecker.ul != titanArray[0].ul ? (
        <Titan
          ul={ulChecker}
          ur={props.titanDisplay.ur}
          bl={props.titanDisplay.bl}
          br={props.titanDisplay.br}
        />
      ) : ( */}
      <Titan
        ul={props.titanDisplay.ul}
        ur={props.titanDisplay.ur}
        bl={props.titanDisplay.bl}
        br={props.titanDisplay.br}
      />
      {/* )} */}
      <div className="gameDisplayColumn">
        {cardBack ? (
          <img className="toggleCard" src={cardFront} />
        ) : (
          <img className="forrayCard" src={titanArray[0].back} />
        )}
        <button onClick={forrayHandler} className="forrayButton">
          FORRAY
        </button>
      </div>
    </>
  );
}

export default GameDisplay;

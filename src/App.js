import './App.css';
import Title from "./Components/Title/Title"
import Titan from "./Components/Titan/Titan";
import GameDisplay from './Components/GameDisplay/GameDisplay';
import Stats from './Components/Stats/Stats';
import titanArray from "./Components/forrayCards/forrayCards";
import { useState } from "react"

//TODO= I USED PREV STATE BUT THE RETURN MADE THE COMPONENT THINK THE JS SECTION ENDED
function App() {

  // const [counter, setcounter] = useState(0)
  const [playerStats, setplayerStats] = useState({ attack: titanArray[0].attack, defense: titanArray[0].defense, life: 70, v: false })
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

  })

  function currentTitanStats(params) {
    const tempStats = {
      attack: playerStats.attack,
      defense: playerStats.defense,
      life: (playerStats.life),
      v: false
    };
    if (params.attack > playerStats.defense) {

      tempStats.life = playerStats.life - (params.attack - playerStats.defense)
    };

    if (tempStats.life < 0) { tempStats.life = 0 }
    // currentLife = (playerStats.life - (params.attack - playerStats.defense))



    if (params.defense < playerStats.attack) {


      tempStats.attack = playerStats.attack + params.attack;
      tempStats.defense = playerStats.defense + params.defense;
      tempStats.v = true;


      if (titanDisplay.ulCheck == false) {

        settitanDisplay(prevState => ({
          // titanDisplay: {
          ...prevState, ul: params.ul, ulCheck: true
          // }
          // return titanDisplay

        }))












        // if (counter == 0) {
        // if (titanDisplay.ulCheck == false) {//ToDO find out why with first render does not execute

        //   // settitanDisplay(prevState => ({
        //   //   ...prevState, ul: params.ul, ulCheck: true
        //   // }))
        //   ulChecker.ul = params.ul
        //   settitanDisplay(

        //     {
        //       ul: params.ul,
        //       ur: titanArray[0].ur,
        //       bl: titanArray[0].bl,
        //       br: titanArray[0].br,
        //       ulCheck: true,
        //       urCheck: false,
        //       blCheck: false,
        //       brCheck: false,
        //     }

        //   )
        //   console.log("what is in titan display after first press");
        //   console.log(titanDisplay);
        //   //   setcounter(1)

        // }
      } else {
        if (titanDisplay.urCheck == false) {

          settitanDisplay(prevState => ({
            // titanDisplay: {
            ...prevState, ur: params.ur, urCheck: true
            // }
            // return titanDisplay

          }))
          //   setcounter(0)
          console.log(titanDisplay.urCheck);

          // }
        } else { // if (counter == 0) {
          if (titanDisplay.brCheck == false) {

            settitanDisplay(prevState => ({
              // titanDisplay: {
              ...prevState, br: params.br, brCheck: true
              // }
              // return titanDisplay

            }))
            //   setcounter(1)
            console.log(titanDisplay.brCheck);

            // }
          } else {

            if (titanDisplay.blCheck == false) {

              settitanDisplay(prevState => ({
                // titanDisplay: {
                ...prevState, bl: params.bl, blCheck: true
                // }
                // return titanDisplay

              }))
              //   setcounter(1)

              // }
            }
          }

        }


      }

    }

    setplayerStats({ ...tempStats });
    console.log("check titan display in app after it is suppedly set");
    console.log(titanDisplay);

  }

  return (

    <div className="AppWrapper" >
      {/* {uler()} */}
      <Title />
      <div className="gameDisplayWrapper">

        {/* {ulChecker.ul != titanArray[0].ul ?
          <Titan ul={ulChecker} ur={titanDisplay.ur} bl={titanDisplay.bl} br={titanDisplay.br} /> :
          <Titan ul={titanDisplay.ul} ur={titanDisplay.ur} bl={titanDisplay.bl} br={titanDisplay.br} />

        } */}

        {playerStats.life > 0 ? <GameDisplay onCard={currentTitanStats} titanDisplay={titanDisplay} /> : <p>you lose bud</p>
        }
        <Stats playerStats={playerStats} />

      </div>
      {/* <Footer /> */}
      <p className='design'>Designed By Yonatan Weiss with REACT</p>

    </div>);
}

export default App;

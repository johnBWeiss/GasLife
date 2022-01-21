import React from "react";
import "./Titan.css";

function Titan(props) {
  return (
    <div className="Titan-column">
      <p className="armour">Armour</p>
      <div className="TitanTop">
        <img className="UL" src={props.ul} />
        <img className="UR" src={props.ur} />
      </div>
      <div className="TitanBottom">
        <img className="DL" src={props.bl} />
        <img className="DR" src={props.br} />
      </div>
    </div>
  );
}

export default Titan;

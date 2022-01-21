import React from "react";
import "./Stats.css";

function Stats(props) {
  return (
    <div className="Stats-header">
      <div className="stat-padder">
        <img className="attack" src={require("./sword.png")} />
        <p>{props.playerStats.attack}</p>
      </div>

      <div className="stat-padder">
        <img className="defense" src={require("./shield.png")} />
        <p>{props.playerStats.defense}</p>
      </div>

      <div className="stat-padder">
        <img className="life" src={require("./heart.png")} />{" "}
        <p>{props.playerStats.life}</p>
      </div>
    </div>
  );
}

export default Stats;

import React, { PureComponent } from "react";
import Counter from "./Counter";
import Icon from "./Icon";

class Player extends PureComponent {
  render() {
    const {
      name,
      score,
      changeScore,
      index,
      id,
      removePlayer,
      isHighScore
    } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            {" "}
            ✂
          </button>
          <Icon isHighScore={isHighScore} />
          {name}
        </span>
        <Counter score={score} changeScore={changeScore} index={index} />
      </div>
    );
  }
}

export default Player;

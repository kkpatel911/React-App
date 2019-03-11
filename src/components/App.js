import React from "react";
import Header from "./Header";
import Player from "./Player";

class App extends React.Component {
  state = {
    players: [
      {
        name: "Kishan",
        score: 5,
        id: 1
      },
      {
        name: "Krima",
        score: 25,
        id: 2
      },
      {
        name: "Ravi",
        score: 15,
        id: 3
      },
      {
        name: "Harshil",
        score: 18,
        id: 4
      }
    ]
  };

  handleScoreChnage = (index, delta) => {
    this.setState(prevState => ({
      score: (prevState.players[index].score =
        prevState.players[index].score + delta)
    }));
  };

  // handleRemovePlayer = (id){
  //   this.setState({
  //     return{
  //       players
  //     }
  //   })
  // }

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayer={50} />

        {this.state.players.map((player, index) => (
          <Player
            name={player.name}
            score={player.score}
            key={player.id}
            changeScore={this.handleScoreChnage}
            index={index}
          />
        ))}
      </div>
    );
  }
}

export default App;

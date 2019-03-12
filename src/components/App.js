import React from "react";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";
class App extends React.Component {
  state = {
    players: [
      {
        name: "Kishan",
        score: 0,
        id: 1
      },
      {
        name: "Krima",
        score: 0,
        id: 2
      },
      {
        name: "Ravi",
        score: 0,
        id: 3
      },
      {
        name: "Harshil",
        score: 0,
        id: 4
      }
    ]
  };

  // Plyer id counter
  prevPlayerId = 4;

  handleScoreChnage = (index, delta) => {
    this.setState(prevState => ({
      score: (prevState.players[index].score =
        prevState.players[index].score + delta)
    }));
  };

  handleAddPlayer = name => {
    this.setState({
      players: [
        ...this.state.players,
        {
          name: name,
          score: 0,
          id: (this.prevPlayerId += 1)
        }
      ]
    });
  };

  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" players={this.state.players} />

        {this.state.players.map((player, index) => (
          <Player
            name={player.name}
            score={player.score}
            key={player.id}
            id={player.id}
            changeScore={this.handleScoreChnage}
            removePlayer={this.handleRemovePlayer}
            index={index}
          />
        ))}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;

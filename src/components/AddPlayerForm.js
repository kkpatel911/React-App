import React, { Component } from "react";

export default class AddPlayerForm extends Component {
  state = {
    value: ""
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleSbumit = e => {
    e.preventDefault();
    this.props.addPlayer(this.state.value);
    this.setState({
      value: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSbumit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Enter a player Name"
        />
        <input type="submit" value="Add Player" />
      </form>
    );
  }
}

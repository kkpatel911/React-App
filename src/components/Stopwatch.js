import React from "react";

class Stopwatch extends React.Component {
  state = {
    isRunnig: false,
    elapsedTime: 0,
    prevTime: 0
  };

  handleStopwatch = () => {
    this.setState(prevState => ({
      isRunnig: !prevState.isRunnig
    }));
    if (!this.state.isRunnig) {
      this.setState({ prevTime: Date.now() });
    }
  };

  componentDidMount() {
    this.intervalId = setInterval(() => this.tick(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick = () => {
    // console.log("Yo");
    if (this.state.isRunnig) {
      const now = Date.now();
      this.setState(prevState => ({
        prevTime: now,
        elapsedTime: prevState.elapsedTime + (now - this.state.prevTime)
      }));
    }
  };

  handleReset = () => {
    this.setState({ elapsedTime: 0 });
  };

  render() {
    const seconds = Math.floor(this.state.elapsedTime / 1000);
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{seconds}</span>
        <button onClick={this.handleStopwatch}>
          {this.state.isRunnig ? "Stop" : "Start"}
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;

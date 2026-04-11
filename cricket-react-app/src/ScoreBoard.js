import React, { Component } from "react";

class ScoreBoard extends Component {
  render() {
    return (
      <div className="card">
        <h2>🏆 Final Score</h2>
        <h3>
          {this.props.score} / {this.props.total}
        </h3>
      </div>
    );
  }
}

export default ScoreBoard;
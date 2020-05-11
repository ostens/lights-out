import React from "react";

import Board from "../Board/Board";
import "./Game.scss";
import Button from "../StyledComponents/Button/Button";

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: new Array(25).fill(true),
      numRows: 5
    }
  }

  handleClick(i) {
    const tiles = this.state.tiles.slice();
    const neighbors = this.handleBoundary(i);
    neighbors.forEach(neighbor => tiles[neighbor] = !this.state.tiles[neighbor])
    this.setState({
      tiles: tiles.slice(0, 25),
    });
  }

  handleBoundary(i) {
    const numRows = this.state.numRows;
    const leftEdge = [0, 5, 10, 15, 20];
    const rightEdge = [4, 9, 14, 19];
    const neighbors = [i, i + 1, i - 1, i + numRows, i - numRows];
    if (leftEdge.includes(i)) {
      return neighbors.filter(neighbor => neighbor !== i - 1);
    } else if (rightEdge.includes(i)) {
      return neighbors.filter(neighbor => neighbor !== i + 1);
    } else {
      return neighbors;
    }
  }

  handleReset() {
    this.setState({
      tiles: new Array(25).fill(false),
    });
  }

  render() {
    const tiles = this.state.tiles;
    const numRows = this.state.numRows;
    const numCols = tiles.length / numRows;

    return (
      <div className="game">
        <div className="title">Lights out</div>
        <div className="grid">
          <Board
            numRows={numRows}
            numCols={numCols}
            tiles={tiles}
            onClick={(i) => this.handleClick(i)} />
        </div>
        <Button
          onClick={() => this.handleReset()} />
      </div>
    );
  }
}

export default Game;

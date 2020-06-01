import React from "react";

import Board from "../Board/Board";
import "./Game.scss";
import Button from "../StyledComponents/Button/Button";
import { randomTiles } from "./GameUtils";

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: randomTiles(),
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
    const { numRows } = this.state;
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
      tiles: randomTiles(),
    });
  }

  calculateWin() {
    const currentTiles = this.state.tiles.slice();
    return currentTiles.includes(true) ? false : true;
  }

render() {
  const { tiles } = this.state;
  const title = this.calculateWin() ? "You've won!" : "Lights out";

  return (
    <div className="game">
      <div className="title">{title}</div>
      <div className="grid">
        <Board
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

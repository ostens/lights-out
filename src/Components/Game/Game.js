import React from "react";

import Board from "../Board/Board";
import "./Game.scss";
import Button from "../StyledComponents/Button/Button";
import { randomise, neighbors } from "./GameUtils";

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: randomise(),
      boardSize: 5
    }
  }

  handleClick(i) {
    const { boardSize } = this.state;
    const { tiles } = this.state;
    
    const row = Math.floor(i / boardSize);
    const column = i % boardSize;
    
    neighbors.forEach(coord => {
      if (tiles[row + coord.x] !== undefined && tiles[row + coord.x][column + coord.y] !== undefined) {
        tiles[row + coord.x][column + coord.y].lightOn = !this.state.tiles[row + coord.x][column + coord.y].lightOn
      }
    });
    this.setState({
      tiles,
    });
  }

  handleReset() {
    this.setState({
      tiles: randomise(),
    });
  }

  calculateArray() {
    const tiles = [];
    Object.values(this.state.tiles).forEach(column => {
      Object.values(column).forEach(tile => {
        tiles.push(tile.lightOn)
      })
    })
    return tiles;
  }

  calculateWin() {
    const currentTiles = this.calculateArray();
    return currentTiles.includes(true) ? false : true;
  }

  render() {
    const title = this.calculateWin() ? "You've won!" : "Lights out";

    return (
      <div className="game">
        <div className="title">{title}</div>
        <div className="grid">
          <Board
            tiles={this.calculateArray()}
            onClick={(i) => this.handleClick(i)} />
        </div>
        <Button
          onClick={() => this.handleReset()} />
      </div>
    );
  }
}

export default Game;

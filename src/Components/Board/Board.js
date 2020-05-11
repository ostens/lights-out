import React from "react";
import PropTypes from "prop-types";

import Tile from "../Tile/Tile";
import "./Board.scss"

export default function Board({
  numRows,
  numCols,
  tiles,
  onClick
}) {
  return (
    tiles.map((tile, index) => {
      return (
        <div>
          <Tile
            value={tile}
            onClick={() => { onClick(index) }}
          />
        </div>
      );
    })
  )
}

Board.propTypes = {
  numRows: PropTypes.number.isRequired,
  numCols: PropTypes.number.isRequired,
  tiles: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

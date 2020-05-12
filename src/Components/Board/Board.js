import React from "react";
import PropTypes from "prop-types";

import Tile from "../Tile/Tile";
import "./Board.scss"

export default function Board({
  tiles,
  onClick
}) {
  return (
    tiles.map((tile, index) => {
      return (
        <div key={index}>
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
  tiles: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

import React from "react";
import PropTypes from "prop-types";

import "./Tile.scss"

const Tile = ({ 
  value,
  onClick
 }) => {
  return (
    <button
      className={`tile ${(value === true) ? "lights-on" : "lights-off"}`}
      onClick={() => { onClick() }}
    >
      {value}
    </button>
  );
}

Tile.propTypes = {
  value: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Tile;

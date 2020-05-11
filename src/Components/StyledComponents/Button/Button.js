import React from "react";
import PropTypes from "prop-types";

import "./Button.scss";

function Button(props) {
  return (
    <button
      className="button"
      onClick={() => { props.onClick() }}
    >
      Start Again
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Button;

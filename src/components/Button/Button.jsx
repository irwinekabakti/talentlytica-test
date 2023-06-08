import React from "react";
import PropTypes from "prop-types";

const Button = ({ className, onClick, children, ...props }) => {
  return (
    <button className={`w-full ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any.isRequired,
};

export default Button;

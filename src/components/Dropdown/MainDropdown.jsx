import React from "react";
import ReactSelect from "react-select";
import PropTypes from "prop-types";
import Dropdown from "./Dropdown";
import { styleSelect } from "./style";

const MainDropdown = ({
  options,
  value,
  onChange,
  onBlur,
  placeholder,
  ...props
}) => {
  return (
    <ReactSelect
      components={{ Dropdown }}
      styles={styleSelect}
      options={options}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      {...props}
    />
  );
};

MainDropdown.defaultProps = {
  options: [],
  id: "",
  placeholder: "",
};

MainDropdown.propTypes = {
  options: PropTypes.array,
  id: PropTypes.string.isRequired,
};

export default MainDropdown;

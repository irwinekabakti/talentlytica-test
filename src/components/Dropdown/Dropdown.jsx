import React from "react";
import { components } from "react-select";
import sortUp from "../../assets/sort-up.svg";

const Dropdown = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <img
        src={sortUp}
        alt="icon-dropdown-indicator"
        className="w-[8px] h-[8px] rotate-180"
      />
    </components.DropdownIndicator>
  );
};

export default Dropdown;

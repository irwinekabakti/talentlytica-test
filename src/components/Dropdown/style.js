export const styleSelect = {
  control: (base, state) => ({
    ...base,
    minHeight: "35px",
    height: "35px",
    borderColor: "#BCC2CE",
    borderRadius: "8px",
    outline: "none",
    boxShadow: "none",
    "&:hover": { borderColor: "#BCC2CE" },
    color: state.isDisabled ? "#b3b8c2 !important" : "#5A6376",
    backgroundColor: state.isDisabled
      ? "#edf1f7 !important"
      : base.backgroundColor,
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: state.isDisabled ? "#b3b8c2 !important" : "#5A6376",
    backgroundColor: state.isDisabled
      ? "#edf1f7 !important"
      : provided.backgroundColor,
    paddingBottom: "5px",
  }),
  placeholder: (provided) => ({
    ...provided,
    paddingBottom: "5px",
  }),
  indicatorSeparator: (styles) => ({ display: "none" }),
};

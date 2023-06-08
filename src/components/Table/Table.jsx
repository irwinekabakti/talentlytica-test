import React from "react";
import PropTypes from "prop-types";
import classes from "./Table.module.css";

const Table = ({ classNameContainer, children, ...props }) => {
  return (
    <div
      className={`${classes["simple-table-container"]} ${classNameContainer}`}>
      <table className={classes["simple-table"]}>{children}</table>
    </div>
  );
};

Table.Head = ({ children, ...props }) => {
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  );
};

Table.HeadContent = ({ content, ...props }) => {
  return <th className={classes["simple-table-th"]}>{content}</th>;
};

Table.Body = ({ children, ...props }) => {
  return <tbody>{children}</tbody>;
};

Table.BodyTr = ({ children, ...props }) => {
  return <tr className={classes["simple-table-tr"]}>{children}</tr>;
};

Table.BodyContent = ({ children, className, ...props }) => {
  return (
    <td className={`${classes["simple-table-td"]} ${className}`}>{children}</td>
  );
};

Table.propTypes = {
  classNameContainer: PropTypes.string,
};

Table.defaultProps = {
  classNameContainer: "",
};

Table.Head.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
};

Table.Head.displayName = "SimpleTable.Head";

Table.HeadContent.propTypes = {
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

Table.HeadContent.displayName = "SimpleTable.HeadContent";

Table.Body.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
};

Table.Body.displayName = "SimpleTable.Body";

Table.BodyTr.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
};

Table.BodyTr.displayName = "SimpleTable.BodyTr";

Table.BodyContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  className: PropTypes.string,
};

Table.BodyContent.defaultProps = {
  className: "",
};

Table.BodyContent.displayName = "SimpleTable.BodyContent";

export default Table;

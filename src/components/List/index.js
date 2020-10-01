import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./List.scss";

const List = ({ variant, children }) => {
  return (
    <div
      className={classnames({
        List: true,
        [`List__${variant}`]: variant,
      })}
    >
      {children}
    </div>
  );
};

List.propTypes = {
  variant: PropTypes.oneOf(["check", "number"]),
  children: PropTypes.node,
};

export default List;

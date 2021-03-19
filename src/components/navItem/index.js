import React from "react";
import PropTypes from "prop-types";

const NavItem = (props) => {
  const {
    text,
    hrefLink = "#",
    isActive = false,
    onMouseEnter,
    onMouseLeave,
    onMouseMove,
  } = props;

  const styles = {
    color: isActive ? "rgba(255, 255, 255, 0.1)" : "white",
  };

  return (
    <a
      className="navigation-item"
      href={hrefLink}
      style={styles}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    >
      {text}
    </a>
  );
};

export default NavItem;

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  hrefLink: PropTypes.string,
  isActive: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseMove: PropTypes.func,
};

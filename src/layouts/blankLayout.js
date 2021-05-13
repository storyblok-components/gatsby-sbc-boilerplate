import React from "react";
import PropTypes from "prop-types";
import "../styles/main.scss";

const BlankLayout = ({ children }) => <>{children}</>;

BlankLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BlankLayout;

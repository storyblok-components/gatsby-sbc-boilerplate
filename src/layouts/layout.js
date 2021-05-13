import React from "react";
import PropTypes from "prop-types";
import "../styles/main.scss";
import SettingsContextHooksProvider from "../context/SettingsContextHooks";

const Layout = ({ children, settings = {}}) => {
  return (
    <>
      <SettingsContextHooksProvider settings={settings}>
          <header>
            this is header
          </header>
          <div className="body">{children}</div>
          <footer>
            this is footer
          </footer>
      </SettingsContextHooksProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

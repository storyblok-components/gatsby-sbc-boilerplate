import React, { useContext } from "react";
import Components from "./components";
import SettingsContext from "../context/SettingsContext";

const Blank = (props) => {
  const { settings } = useContext(SettingsContext);
  return (
    <>
      {props.blok.body &&
        props.blok.body.map((blok) =>
          React.createElement(Components(blok.component), {
            key: blok._uid,
            blok: blok,
            settings,
          })
        )}
    </>
  );
};

export default Blank;

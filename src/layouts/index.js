import React from "react";
import Layout from "./layout";
import BlankLayout from "./blankLayout";
import { SettingsContextProvider } from "../context/SettingsContext";
import { PageContextProvider } from "../context/PageContext";

export default (props) => {
  const settings = Object.assign({}, props.pageContext.globalSettings);
  if (typeof settings.content === "string") {
    settings.content = JSON.parse(settings.content);
  }

  if (props.pageContext.layout === "blank") {
    return <BlankLayout pageContext={props.pageContext}>{props.children}</BlankLayout>;
  }

  return (
    <PageContextProvider>
      <SettingsContextProvider settings={settings}>
        <Layout pageContext={props.pageContext}>{props.children}</Layout>
      </SettingsContextProvider>
    </PageContextProvider>
  );
};

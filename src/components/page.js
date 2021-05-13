import React, { useContext, useEffect } from "react";
// import PageContext from "../context/PageContext";
import {PageContextHooks} from "../context/PageContextHooks";
import Components from "./components.js";
import SEO from "./utils/seo";

const Page = (props) => {
  console.log("and this is props from page: ")
  console.log(props)
  // const {
  //   blok: { transparent_header },
  // } = props;
  const pageContext = useContext(PageContextHooks);
  // useEffect(() => {
  //   pageContext.set({ data: { ...pageContext.data, transparent_header } });
  // }, [transparent_header, pageContext]);

  return (
    <>
      <SEO
        title={props.story.name}
        pathname={props.story.slug === "home" ? "" : props.story.full_slug}
      />


      <main className="py-4">
        {props.content?.body?.map((blok) => {
          return React.createElement(Components(blok.component), {
            key: blok._uid,
            blok,
          })
        })}
      </main>
    </>
  );
};

export default Page;

// {props.content.body &&
// props.content.body.map((blok) =>
//   React.createElement(Components(blok.component), {
//     key: blok._uid,
//     blok,
//   })
// )}

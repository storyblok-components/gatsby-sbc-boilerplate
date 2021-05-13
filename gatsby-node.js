/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const trim = require("lodash/trim");
const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    let settings = {};
    const storyblokEntryHooks = path.resolve("src/templates/storyblok-entry-hooks.js")

    graphql(
      `
        {
          stories: allStoryblokEntry(filter: { slug: { eq: "settings" } }) {
            edges {
              node {
                id
                name
                created_at
                published_at
                uuid
                slug
                full_slug
                field_component
                content
                is_startpage
                parent_id
                group_id
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }

      settings = result.data.stories.edges[0].node;

      resolve(
        graphql(
          `
            {
              stories: allStoryblokEntry(filter: { slug: { ne: "settings" } }) {
                edges {
                  node {
                    id
                    name
                    created_at
                    published_at
                    uuid
                    slug
                    field_component
                    full_slug
                    content
                    is_startpage
                    parent_id
                    group_id
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }

          const entries = result.data.stories.edges;
          entries.forEach(entry => {
            const pagePath =
              entry.node.full_slug === "home" ? "" : `${entry.node.full_slug}`;

            createPage({
              path: `/${pagePath}`,
              component: storyblokEntryHooks,
              context: {
                settings,
                story: entry.node
              }
            });
          });
        })
      );
    });
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;
  const paths = ["404"];

  if (paths.includes(trim(page.path, "/"))) {
    page.context.layout = "blank";
    createPage(page);
  }
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    }
  })
}

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: require.resolve('@babel/plugin-proposal-optional-chaining'),
  })
}

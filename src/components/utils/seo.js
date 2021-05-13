import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
        googleSiteVerification
      }
    }
  }
`;

function SEO({ description, lang, meta, pathname, keywords, title, image }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const siteMetadata = data.site.siteMetadata;
        const seo = {
          siteUrl: siteMetadata.siteUrl,
          image: image || `${siteMetadata.siteUrl}`,
          metaDescription: description || siteMetadata.description
        };
        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={title}
            titleTemplate={`%s | ${siteMetadata.title}`}
            meta={[
              {
                name: "description",
                content: seo.metaDescription
              },
              {
                property: "og:title",
                content: title
              },
              {
                property: "og:description",
                content: seo.metaDescription
              },
              {
                property: "og:image",
                content: seo.image
              },
              {
                property: "og:type",
                content: "website"
              },
              {
                property: "og:url",
                content: `${seo.siteUrl}/${pathname}`
              },
              {
                name: "twitter:card",
                content: "summary"
              },
              {
                name: "twitter:creator",
                content: siteMetadata.author
              },
              {
                name: "twitter:title",
                content: title
              },
              {
                name: "twitter:description",
                content: seo.metaDescription
              },
              {
                name: "google-site-verification",
                content: siteMetadata.googleSiteVerification
              }
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: "keywords",
                      content: keywords.join(", ")
                    }
                  : []
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  keywords: [],
  image: null
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  image: PropTypes.string
};

export default SEO;

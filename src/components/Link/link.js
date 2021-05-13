import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-gtag'

export const withLink = (WrappedComponent, link) => {
  return (props) => {
    return <WrappedComponent {...props} Link={link} />;
  };
};

// Since DOM elements <a> cannot receive activeClassName,
// destructure the prop here and pass it only to GatsbyLink
const LinkGatsby = ({
                      storyblokLink,
                      children,
                      activeClassName,
                      target,
                      ...other
                    }) => {
  // Use Gatsby Link for internal links, and <a> for others
  if (storyblokLink.linktype === 'story') {
    return (
      <Link
        to={`/${storyblokLink.cached_url}`}
        activeClassName={activeClassName}
        {...other}
      >
        {children}
      </Link>
    )
  }
  return target === '_blank' ? (
    <OutboundLink
      href={storyblokLink.url}
      target="_blank"
      rel="noopener noreferrer"
      {...other}
    >
      {children}
    </OutboundLink>
  ) : (
    <a href={storyblokLink.url} {...other}>
      {children}
    </a>
  )
}

export default LinkGatsby

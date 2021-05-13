import React from 'react'
import Layout from '../layouts/layout'
import Components from "../components/components";

const StoryblokEntryHooks = (props) => {
  const {pageContext: {settings, story}} = props

  if(typeof settings.content === 'string') {
    settings.content = JSON.parse(settings.content)
  }

  if(typeof story.content === 'string') {
    story.content = JSON.parse(story.content)
  }

  return (
    <Layout settings={settings}>
      {story && React.createElement(Components(story.content.component), {
        key: story.content._uid,
        content: story.content,
        story
      })}
    </Layout>
  )
}

export default StoryblokEntryHooks

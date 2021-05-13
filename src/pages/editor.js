import React, {useEffect} from 'react'
import { useLocation } from "@reach/router"
import Layout from '../layouts/layout'
import Storyblok from "../lib/storyblok-client";
import useStoryblok from "../lib/storyblok-hook";
import Components from "../components/components";

const Editor = (props) => {
  const location = useLocation();
  const [story, setStory] = useStoryblok(null)

  useEffect(() => {
    (async () => {
      const newURL = new URL(`mock:mock${location.search}`)
      const pathParam = newURL.searchParams.get('path')
      const versionInEditor = newURL.searchParams.get('version')
      const openWithPublished = newURL.searchParams.get('_storyblok_published')

      let version
      if(openWithPublished) {
        version = 'published'
      } else {
        if(versionInEditor) {
          version = 'published'
        } else {
          version = 'draft'
        }
      }

      const fullSlug = pathParam === '/' ? 'home' : pathParam

      try {
        const {data: { story }} = await Storyblok.get(`cdn/stories/${fullSlug}`, {
          "resolve_relations": "featured-articles.articles",
          version
        })

        const storyLang = story.lang // and now, based on that get settings for pl ?

        console.log("story from editor useEffect: ")
        console.log(story)

        setStory(story);
      } catch(error) {
        console.log(error)
      }
    })()
  }, [])

  return  (
    <Layout>
      {story && React.createElement(Components(story.content.component), {
        key: story.content._uid,
        content: story.content,
        story
      })}
    </Layout>
  )
}

export default Editor;



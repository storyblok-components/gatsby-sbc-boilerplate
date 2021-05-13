import StoryblokClient from 'storyblok-js-client'

const Storyblok = new StoryblokClient({
    accessToken: process.env.GATSBY_STORYBLOK_ACCESS_TOKEN,
    cache: {
        clear: 'auto',
        type: 'memory'
    }
})

export default Storyblok

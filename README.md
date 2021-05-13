# Introduction

This repo is a Gatsby [Storyblok](https://www.storyblok.com) Core Boilerplate. It is ready to be used with [ef-sbc](https://github.com/ILC-Technology/ef-sbc) components.


## Getting started

1. Get the source code and install dependencies.
~~~
git clone git@github.com:ILC-Technology/gatsby-web-ui-sb-boilerplate-core.git
cd gatsby-web-ui-sb-boilerplate-core
npm install
~~~

2. Exchange the `accessToken` in `gatsby-config.js` with the preview token of a new empty Storyblok space which you can find on the space settings page.

3. Create an .env file in the root with your [storyblok oauth token](https://www.storyblok.com/docs/management-api/authentication) and the space ID you would like to use, e.g.:
~~~
STORYBLOK_OAUTH_TOKEN=xdfkuwy3woyrewoufiuwyfew9-12345-abdfequhyrrwekukhfe
STORYBLOK_SPACE_ID=12345
GATSBY_STORYBLOK_ACCESS_TOKEN=jnlsfd3lkdnsf23r234
~~~

4. Remove all the default components from your Storyblok space.

5. Create components schema in storyblok space
* Recommended way to use `sb-mig` is to install it globally with `npm install sb-mig --global` command. But we can also use `npx`
~~~
npx sb-mig sync components --all --ext
~~~
or use selective syncing only component you like:
~~~
npx sb-mig sync components --ext card video-card column row fullbleed nav-item settings text-block section page
~~~
 
 

6. Start the project with `gatsby develop` and set the preview domain in Storyblok to `http://localhost:8000/editor?path=`

## Commands

This project comes with a few handy commands for linting and code fixing. The most important ones are the ones to develop and ship code. You can find the most important commands below.

### `gatsby develop`
Run in the project locally for development.

### `gatsby build`
Run a production build into ./public. The result is ready to be put on any static hosting you prefer.

### `gatsby deploy`
Run a production build into ./public and publish the site to GitHub pages.

---

### Accessing settings
To access settings in any component use `useContext` from React to get the data:
```JSX
import SettingsContext from "../../context/SettingsContext";

const Component = () => {
    const { settings } = useContext(SettingsContext);

    return (
        <div>
            ...
            { settings.whateverSetting }
            ...
        </div>
    )
}
```

You can also use `<SettingsContext.Consumer>` like below:
```JSX
import SettingsContext from "../../context/SettingsContext";

<SettingsContext.Consumer>
    {({ settings }) =>
        // Wrap your content with consumer
        <div>
            ...
            { settings.whateverSetting }
            ...
        </div>
    }
</SettingsContext.Consumer>
```

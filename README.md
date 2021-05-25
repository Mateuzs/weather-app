# weather-app

A React Single Page App displaying weather for searched location.

The application is deployed to [Netlify](https://www.netlify.com) platform and it's available here:

<https://weather-app-323.netlify.app>

## Setup

In order to run this project locally, download the git repository, then in the project folder:

install dependencies:

```
yarn
```

run the app locally:

```
WEATHER_API_KEY=66a58cd39f59a5da5adef8630cdb5627 yarn start
```

The reason you need to pass an API KEY, is that such data is considered as vulnerable and shouldn't  
be hardcoded in the app config in project repository. In this app it's passed via webpack during the build.  
On Netlify production build it's being passed during building from environment variables.

## Technology, Tools, Workflow

The application was written with [React](https://pl.reactjs.org/) library, which is powerful and complex tool for creating web application
while being fast, lightweight and performant. Apllication is using React Router, component asynchronus lazy loading,
JSX component definition, etc. State handling is implemented with modern React Hooks approach, so that's why every
component is a function component. The whole application is developed with composition approach, with no need of
using class components.

Project has been written in [Typescript](https://www.typescriptlang.org/) - it's a superset of [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript).
Main reason of using Typescript is the typing posibility. We can define type of values, functions, components, interfaces, etc. what generates the more solid and stable,
less error prone, and much easier to read by developers. At first glimpse someone can see what data a function or component
requires and what data is returned as a result. During the build process Typescript is transpiled to Javascript and the
types are removed from bundle.

For components styling there has been used a [Sass](https://sass-lang.com/) stylesheet language which is fully compiled to CSS. It comes
with great features allowing constants definition, common styles inheritance, composition, importing, etc. which
reduces copying the same styles between components and application elements.

Project is using a [Webpack](https://webpack.js.org/) bundler, which is a very popular tool used for building the application and maintain the
dependencies. It allows to define a development and optimized production build. Most important features are: production build
optimization, code splitting into smaller chunks, tree shaking, hot reload during development, bundle analysis and much more.

For request making to the Open Weather Api, project uses [axios](https://github.com/axios/axios) library, popular and tested dependency.

For map displaying application uses [leaflet](https://leafletjs.com/) library, an open source map displaying solution.

All weather icons are fetched asynchronously with [react-lazyload](https://github.com/twobin/react-lazyload) library (simple and reusable, but for better
performance it's recommened to implement own solution - for example with Intersection Observer Api etc. to remove dependency)

To sum up, technology used in the project is:

- React
- Typescript
- Sass
- axios
- leaflet
- react-lazyload

The project has been developed and stored in git, hosted on GitHub repository. Git provides code maitenance and it's a source of
code version control system. As the application was developed by one developer, branching was not used. Every chunk
of work has been contributed as a separate commit, allowing for keeping simple code history.

Git repository is bound to Netlify build system, every code change on master triggers automatically a deploy to production.

The workflow I used to solve this task:

- implement the funcionality of the application and basic styling - in chunks / commits
- every bit of work deployed to Netlify for manual testing and spotting issues on different devices,
- once functionality is complete, adjusting proper final styling of application and testing
- refactoring of code and styles
- adjust optimization techniques (react hooks, lazy loading, memoization, rerendering analysis)
- analysis of bundle and split the bundle into chunks, verify proper Webpack config
- ready solution verified by [Goggle Lighthouse](https://developers.google.com/web/tools/lighthouse) in order to spot some performance drawbacks
- fix of performance drawbacks and final bug fixes

## Testing

I order to test the application properly I would create unit tests for every component. Tests would be created
in separate folders - one folder for one component. I would use for example [Jest](https://jestjs.io/) library for testing purposes and
for mocking api calls I would use [Nock](https://github.com/nock/nock), to prepare an isolated environment for testing the app. Unit tests would
test the expected DOM structure with snapshot comparing. Moreover I would create special data-test-id labels, and
base on them I would look for particular data in particular DOM nodes. The application components structure would
be verified add every level of composition.

For e2e testing I would prepare some nonprod and prod environment, like deployment on the Netlify platform.
Current version of the app would be tested by some test written with tool like [webdriver.io](https://webdriver.io/). The tests would go to
the page and travel through it simulating the user - searching the weather, adding the weather stations, etc. The
tests would check if proper button are in place, if after the click the proper view appears, etc. Tests would compare
the views for given scenario and verify if the view is as expected.

## Performance

In order to provide best performance possible I would introduce the strategy I started in the task.

1. I would check the build of bundles with webpack and webpack-bundle-analyzer, if required I would split the code and
   dependencies in a way that would provide the chunks small enough. I would use the webpack features (tree shaking,
   code splitting) to provide optimized bundles and use some React techiques like React lazy and Suspense to split code -  
   this allow user to see first view as soon as possible, then fetch asynchronously the rest of the code.
2. I would use React Hooks and memoization, combined with react-devtools, chrome-devtools (performance tab, flame graph),
   to spot any performance issues connected to state handling, rerendering, animation, blocking execution etc.
3. I would use the reports like LightHouse or PageSpeed Insights or WebPageTest to spot potential issues and solve,
   any performance and drawbacks.
4. I would use some tool like [oWASP](https://owasp.org/) to verify if the application is safe and not easy to hack - it would allow to find
   and solve any possible risks according to web attacks.
5. I would introduce some in-code optimization strategies like cache - for saving the redundant api requests, use only best formats
   like webp for image, woff2 for fonts, define priority of fetching resources with defer, async, onload tags, etc.

## Maintenance, CI-CD

In order to introduce proper maintenance, I would introduce git flow. Every feature and fix should be developed in
separate branch. Every branch would have a proper pipelines, validating the build, triggering the unit tests, verify
the bundle size, etc. It would allow also to deploy the feature version to nonprod environment for adittional manual testing.

After fully passed pipelines and approved work by other developers, work could be merged to
main branch. The main branch also would have a pipeline set confirming the test, bundle size, etc. it would deploy  
the version to nonprod environment and run e2e tests aditionally to verify correctness of the application.
Also some report mechanizm like Lighthouse would be triggered after deployment to verify the applicaton. Once the pipelines
are green, it will be available to bump up the version of application and make the release to prod environment.
Versioning of the application would be done according to the semantic-versioning.

## Deployment

Deployment depends on the project. In this particular scenario I believe that deployment SPA application in a
platform like Netlify (which I currently implemented) is a good step. I provides professional solution of CDN and
delivering content in fastest possible way. In case of scaling the application or extending it to some platform with
microservices, it should be considered to move the architecture to some services like AWS.

Additional benefits of using such platforms is ability to bind the project repository with it. It allows to provide
automated CI/CD processes and provide easy and fast deployment automatically.

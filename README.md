# VirtualExpo

Virtual Expo contains a barebones react app created from scratch using tools such as webpack and the required plugins, babel and react to connect to an external data source.

To Use, clone this repository or download and extract it, then run npm install or yarn add to get all the dependencies.

Webpack is used as a module bundler for the Javascript files. To begin with, you must have Node.js environment running. You can download and install from www.nodejs.org and follow the install instructions. Once done, to begin using webpack, create a new directory and type the command npm init -y (-y to use the default settings, can always be edited anytime). This will create a package.json file in your directory, which acts as a manifest to hold all the other libraries and configurations your app requires.

To use webpack in creating a react setup is a topic on it's own but here are the dependencies used in this project and why:

1. webpack-dev-server : This is required to launch your app/build set up in the browser. Certain flags such as --open --hot mean that it will open your app in a new browser tab and --hot means HotModuleReplacement. This means, auto-tweaking your app with code changes on the fly without having to stop and restart it.

2. All babel dependencies. Please refer to the babel documentation on this website - www.babeljs.io and select your desired environment. For the shorter description of babel, it is a transpiler that converts newer and more modern js code into es5 supported by older browsers/user-agents.

3. React and React-DOM : A front end library that covers the VIEW layer of the MVC framework. Find out more on www.reactjs.org.

4. React-Router : An external tool from the community that allows users to navigate between routes, which you'll specify in your React components.

5. Axios : An http library that supports Javascript Promises and async-await syntax.

6. Moment :  A Javasctipt time and date formatting library.

All libraries ending with -loader in the package.json file are plugins for webpack to load supported files such as css, images and js (using babel-loader, for example).

Finally, You can see all these in action inside the webpack.config.js file.

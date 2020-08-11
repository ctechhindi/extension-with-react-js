# Chrome Extension with React and Webpack 4

## Installation

* Create a new directory `react-extension-webpack`
* Initialize NPM project by running:
    ```bash
    npm init -y
    ```
* Now install `react`
    ```bash
    npm install react react-dom --save
    ```

## Configuring webpack 4

First, let’s do some installation

```bash
npm install webpack webpack-dev-server webpack-cli --save
```

This will install:

* `webpack module` — which include all core webpack functionality
* `webpack-dev-server` — this development server automatically rerun webpack when our file is changed
* `webpack-cli` — enable running webpack from the command line


## Create a new directory named `src`

Create a new `index.js` file into `src` directory.

```js
// src/index.js

import React from "react";
import ReactDOM from "react-dom";
import './style.css';

class Welcome extends React.Component {
  render() {
    return <h1>Hello World from React boilerplate</h1>;
  }
}
ReactDOM.render(<Welcome />, document.getElementById("root"));
```

Create a new `index.html` file into `src` directory.

```html
<!-- src/index.html -->

<html>
<head>
    <title>Options Page</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
</head>
<body>
    <noscript>
        You need to enable JavaScript to run this app.
    </noscript>
    <div id="root"></div>
</body>
</html>
```

Create a new `style.css` file into `src` directory.


```css
/* src/style.css */

h1 {
    color: red;
}
```

## Configuring Babel 7

The React component we wrote above used the class `syntax`, which is a feature of `ES6`. Webpack needs Babel to process ES6 into `ES5` syntaxes in order for this class to work.

Let’s install Babel into our project

```bash
npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react 
```

Why do we need these packages?

* `@babel/core` is the main dependency that includes babel transform script.
* `@babel/preset-env` is the default Babel preset used to transform ES6+ into valid ES5 code. Optionally configures browser polyfills automatically.
* `@babel/preset-react` is used for transforming JSX and React class syntax into valid JavaScript code.
* `babel-loader` is a webpack loader that hooks Babel into webpack. We will run Babel from webpack with this package.

## Adding CSS LESS processor

In order to add the LESS processor into our React application, we will require both less and loader packages from webpack:

```bash
npm install --save-dev less less-loader css-loader style-loader
```

## Add Package `HtmlWebpackPlugin` 

Now let’s install a new Webpack plugin named HtmlWebpackPlugin

```
npm install html-webpack-plugin -D -save
```

## Babel presets

Add a `.babelrc` file to the project root like so:

```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```

## Configuring `webpack.config.js` and `package.json`

We need to create a webpack configuration file. Let’s write a` webpack.config.js` file:

```js
// webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/src/index.html"),
      filename: "./index.html"
    })
  ],
  devServer: {
    contentBase: './dist',
  },
};
```

Make the following modifications to `package.json`:

```json
{
  "name": "react-extension-webpack",
  "version": "1.0.0",
  "description": "React Extension With Webpack 4",
  "scripts": {
    "start": "webpack-dev-server --mode development",
    "watch": "webpack --watch --mode development",
    "build": "webpack --mode production"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    ...
  },
  "devDependencies": {
    ...
  }
}

```

## Credit

* https://www.freecodecamp.org/news/how-to-set-up-deploy-your-react-app-from-scratch-using-webpack-and-babel-a669891033d4/
* https://medium.com/dailyjs/building-a-react-component-with-webpack-publish-to-npm-deploy-to-github-guide-6927f60b3220



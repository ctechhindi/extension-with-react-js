# Configuring for Chrome Extension 

## Create Required Folder Structure

```
├─ src
   ├─ icons
   ├─ content // content scripts
   ├─ locales
   |  └─ en
   |     └─ messages.json
   ├─ options
   |  ├─ options.html
   |  ├─ options.css
   |  └─ options.js
   ├─ popup
   |  ├─ popup.html
   |  ├─ popup.css
   |  └─ popup.js
   |
   ├─ # Add More Pages
   |
   ├─ index.js // background file
   └─ manifest.json
```

## Install NPM Package

### **copy-webpack-plugin**

* Copies individual files or entire directories, which already exist, to the build directory.
* Install [CopyWebpackPlugin](https://webpack.js.org/plugins/copy-webpack-plugin/) with npm:
    ```bash
    npm install copy-webpack-plugin --save-dev
    ```

#### Use `CopyWebpackPlugin` in webpack config file.

Then add the plugin to your webpack config. For example:

```js
// webpack.config.js
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'icons', to: 'icons' },
        { from: 'locales', to: 'locales' }
      ],
    }),
  ],
};
```

---

### **cross-env**

* Run scripts that set and use environment variables across platforms.
* Install [cross-env](https://www.npmjs.com/package/cross-env) with npm:
    ```bash
    npm install cross-env --save-dev
    ```

#### Use `cross-env` in webpack config file.

I use this in my npm scripts: `cross-env NODE_ENV=production`

```json
// package.json
{
  "scripts": {
    "watch": "cross-env NODE_ENV=development webpack",
    "build": "cross-env NODE_ENV=production webpack"
  }
}
```

```js
// webpack.config.js
const config = {
    mode: process.env.NODE_ENV,
}
```

---

### **clean-webpack-plugin**

* A webpack plugin to remove/clean your build folder(s).
* Install [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin) with npm:
    ```bash
    npm install --save-dev clean-webpack-plugin
    ```

#### Use `clean-webpack-plugin` in webpack config file.

I use this in my npm scripts: `clean-webpack-plugin NODE_ENV=production`

```js
// webpack.config.js

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
plugins: [
    new CleanWebpackPlugin(),
],
```

---

### **webpack-extension-reloader**

* This plugin extracts CSS into separate files.
* Install [webpack-extension-reloader](https://github.com/rubenspgcavalcante/webpack-extension-reloader) with npm:
    ```bash
    npm install webpack-extension-reloader --save-dev
    ```

#### Use `Webpack Extension Reloader` in webpack config file.

```js
// webpack.config.js
const ExtensionReloader  = require('webpack-extension-reloader');

plugins: [
  new ExtensionReloader(),
]
```

---

### Asset Management

#### [Loading CSS](https://webpack.js.org/guides/asset-management/#loading-css)

In order to import a CSS file from within a JavaScript module, you need to install and add the style-loader and css-loader to your module configuration.

```bash
npm install --save-dev style-loader css-loader
```

#### [Loading Images](https://webpack.js.org/guides/asset-management/#loading-images)

```bash
npm install --save-dev file-loader
```

#### [sass-loader](https://webpack.js.org/loaders/sass-loader/#root)

```bash
npm install sass-loader sass webpack --save-dev
```

#### [babel-loader](https://www.npmjs.com/package/babel-loader/v/8.0.0-beta.1)

```bash
npm install babel-loader babel-minify --save-dev
```

#### Package for Build Zip  

```bash
npm install archiver --save
```

## Project Command

```bash
npm run watch
npm run build
npm run build-zip
```

## Pending Problems


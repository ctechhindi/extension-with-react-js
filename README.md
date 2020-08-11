# Chrome Extension With React JS

Create Google Browser Extension with NPM Webpack CLI and React JS

## Structure

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

## Usage

```
# Clone this repository
$ git clone https://github.com/ctechhindi/extension-with-react-js

# Go into the repository
$ cd extension-with-react-js

# Install dependencies
$ npm install

# Start server
$ npm run watch
```

## Webpack Command

`npm run watch`

Build the extension into `dist` folder for development mode.

`npm run build`

Build the extension into `dist` folder for production mode.

`npm run build-zip`

After the extension is created, you can use the extension folder as zip format in the `build-zip` Folder.

## Adding extension to Chrome Browser

Before publishing to Chrome Web Store, it is always good to test locally.

All you need to do is to run `npm run build` to put everything required into `dist` folder, then launch `chrome://extensions/` in Google Chrome.

## Credits

https://github.com/Kocal/vue-web-extension For inspiration on app and build structure
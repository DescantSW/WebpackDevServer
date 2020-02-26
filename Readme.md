const webpack = require("webpack");

/*********************************************************************************
 * Webpack - basic demonstration
 * 
 * 
 */

       root
        |
        | - - - - - dist       
        |            |
        |            | - [name.hash].jpg
        |            |        
        |            | - index.html
        |            |
        |            | - main.js
        |
        |
        | - - - - - src
        |            |
        |            | - - - - - | images
        |            |                   | - kitty.jpg
        |            |
        |            | - - - - - | styles
        |            |                   | - main.scss        
        |            |
        |            | - index.html
        |            |
        |            | - index.js
        |
        |
        | - package.json
        |
        | - webpack.js -
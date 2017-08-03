const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
/*
mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');
*/

/**
* STYLESHEETS FRONTEND
*/
mix.combine([
    'node_modules/w3-css/w3.css',
    'resources/stylesheets/frontend/loader.styles.css',
    'resources/stylesheets/frontend/checkbox.styles.css',
    'resources/stylesheets/frontend/frontend.css',
    'node_modules/chartist/dist/chartist.min.css',
], 'public/stylesheets/frontend.css');
/**
* JAVASCRIPTS FRONTEND
*/
mix.react('resources/javascripts/frontend/index.js', 'public/javascripts/frontend.index.js');
/**
* JAVASCRIPTS LOGIN
*/
mix.react('resources/javascripts/login/index.js', 'public/javascripts/login.index.js');
/**
* JAVASCRIPTS ADMIN
*/
mix.react('resources/javascripts/admin/index.js', 'public/javascripts/admin.index.js');

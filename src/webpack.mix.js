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
   'node_modules/purecss/build/pure-min.css',
], 'public/stylesheets/frontend.css');
/**
* JAVASCRIPTS FRONTEND
*/
//mix.js('resources/assets/javascripts/frontend/app.js', 'public/javascripts/frontend.app.js');

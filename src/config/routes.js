/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  'get /': 'Frontend/FrontendController.index',

  'post /inquiry': 'InquiryController.store',

  'post /analytic/store': 'AnalyticController.store',

  'get /login': 'Auth/LoginController.index',

  'post /login': 'Auth/LoginController.login',

  'post /logout': 'Auth/LoginController.logout',

  'get /admin/dashboard': 'Admin/AdminController.index',

  'get /admin/inquiries': 'Admin/AdminController.index',

  'get /admin/contents': 'Admin/AdminController.index',

  'get /admin/content/create': 'Admin/AdminController.index',

  'post /admin/content/create': 'ContentController.store',

  'get /admin/content/:id/edit': 'Admin/AdminController.index',

  'post /admin/content/:id/edit': 'ContentController.update',

  'delete /admin/content/:id': 'ContentController.destroy'



  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};

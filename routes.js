const routes = require('next-routes')();

//
// Because of awesome Next.js, You don't need to add routes for all pages.
// Every file on Pages folder basically has route as they named.
// (index.js => /, about.js => /about, ...etc.)
//
// If you want to change url (for SEO or put different path), please add your route below.
// for more info, please look at https://github.com/Sly777/ran/blob/master/docs/Routing.md
//
//
// Please add your route between of comments
//
// ------------ ROUTES ---------------
// @RANStartRoutes
routes.add('home', '/');
routes.add('search', '/search/');
routes.add('listing', '/listing/');
routes.add(
  'list',
  '/:type(category|tag|playlist|speaker|source|sponsor|sosuber)/'
);
routes.add(
  'detail',
  '/:list(category|tag|playlist|speaker|source|sponsor|sosuber)/:slug/'
);
routes.add('video', '/:slug/');
routes.add('embed', '/embed/:slug/');
// @RANEndRoutes
// ------------ ROUTES ---------------
//
//

module.exports = routes;

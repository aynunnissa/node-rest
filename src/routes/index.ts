import { ServerResponse } from "http";
import { notFoundResponse } from "../util/response";

const url = require('url');

// Routes
const locationRoutes = require('./location-routes');
const menuRoutes = require('./menu-routes');
const cartRoutes = require('./cart-routes');

module.exports = (req: Request, res: ServerResponse) => {
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname.startsWith('/api/locations')) {
    locationRoutes(req, res);
  } else if (parsedUrl.pathname.startsWith('/api/menus')) {
    menuRoutes(req, res);
  } else if (parsedUrl.pathname.startsWith('/api/cart')) {
    cartRoutes(req, res);
  } else {
    notFoundResponse(res, 'Route not found')
  }
};

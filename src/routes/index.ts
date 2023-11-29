import { ServerResponse } from "http";
import { notFoundResponse } from "../util/response";

const url = require('url');

// Routes
const locationRoutes = require('./location-routes');
const menuRoutes = require('./menu-routes');
const cartRoutes = require('./cart-routes');

module.exports = (req: Request, res: ServerResponse) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname?.split('/');
  if (path[2] === 'locations') {
    locationRoutes(req, res);
  } else if (path[2] === 'menus') {
    menuRoutes(req, res);
  } else if (path[2] === 'cart') {
    cartRoutes(req, res);
  } else {
    notFoundResponse(res, 'Route not found')
  }
};

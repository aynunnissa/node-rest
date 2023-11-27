import { ServerResponse } from "http";

const url = require('url');

// Routes
const locationRoutes = require('./location-routes');
const menuRoutes = require('./menu-routes');

module.exports = (req: Request, res: ServerResponse) => {
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname.startsWith('/api/locations')) {
    locationRoutes(req, res);
  } else if (parsedUrl.pathname.startsWith('/api/menus')) {
    menuRoutes(req, res);
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.write(
    JSON.stringify({ title: 'Not Found', message: 'Route not found' })
    );
    res.end();
  }
};

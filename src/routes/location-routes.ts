import { ServerResponse } from "http";

const locationController = require('../controllers/locationController');

module.exports = (req: Request, res: ServerResponse) => {
  switch (req.method) {
    case 'GET':
      locationController.getLocations(req, res);
      break;

    default:
      res.statusCode = 404;
      res.setHeader('Content-Type', 'application/json');
      res.write(
        JSON.stringify({ title: 'Not Found', message: 'Route not found' })
      );
      res.end();
  }
};

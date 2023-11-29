import { ServerResponse } from "http";
import { badRequestResponse } from "../util/response";

const locationController = require('../controllers/locationController');

module.exports = (req: Request, res: ServerResponse) => {
  switch (req.method) {
    case 'GET':
      locationController.getLocations(req, res);
      break;

    default:
      badRequestResponse(res, 'Method not allowed')
  }
};

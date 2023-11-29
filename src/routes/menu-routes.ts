import { ServerResponse } from "http";
import { badRequestResponse } from "../util/response";

const menuController = require('../controllers/menuController');

module.exports = (req: Request, res: ServerResponse) => {
  switch (req.method) {
    case 'GET':
      menuController.getMenus(req, res);
      break;

    default:
      badRequestResponse(res, 'Method not allowed')
  }
};
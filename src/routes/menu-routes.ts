import { ServerResponse } from "http";

const menuController = require('../controllers/menuController');

module.exports = (req: Request, res: ServerResponse) => {
  switch (req.method) {
    case 'GET':
      menuController.getMenus(req, res);
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
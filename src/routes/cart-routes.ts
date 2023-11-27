import { ServerResponse } from "http";

const cartController = require('../controllers/cartController');

module.exports = (req: Request, res: ServerResponse) => {
  switch (req.method) {
    case 'GET':
      cartController.getCartItems(req, res);
      break;

    case 'PUT':
      cartController.addItemToCart(req, res);
      break;

    case 'PUT':
      cartController.updateCart(req, res);
      break;

    case 'DELETE':
      cartController.removeItemFromCart(req, res);
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
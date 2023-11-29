import { ServerResponse } from "http";
import * as url from 'url';
import { badRequestResponse } from "../util/response";

const cartController = require('../controllers/cartController');

module.exports = (req: Request, res: ServerResponse) => {
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === '/api/cart/checkout' && req.method === 'DELETE') {
    cartController.checkoutCart(req, res);
  } else {
    switch (req.method) {
      case 'GET':
        cartController.getCartItems(req, res);
        break;
  
      case 'POST':
        cartController.addItemToCart(req, res);
        break;
  
      case 'PUT':
        cartController.updateCart(req, res);
        break;
  
      case 'DELETE':
        cartController.removeItemFromCart(req, res);
        break;
  
      default:
        badRequestResponse(res, 'Method not allowed')
    }
  }
};
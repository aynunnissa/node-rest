import { ServerResponse } from "http";
const requestBodyParser = require('../util/body-parser');
import Cart from "../db/models/cart";
import Menu from "../db/models/menu";
import { badRequestResponse, serverErrorResponse, successResponse } from "../util/response";

const getCartItems = async (req: Request, res: ServerResponse) => {
  try {
    const cart = await Cart.findAll({ include: [{ model: Menu }] });
    successResponse(res, { data: cart })
  } catch (error) {
    serverErrorResponse(res, 'Failed to find get items.')
  }
};

const addItemToCart = async (req: Request, res: ServerResponse) => {
  const requestBodyParser = require('../util/body-parser');
  
  try {
    let body = await requestBodyParser(req);

    if (!body.menu_id || !body.quantity) {
      badRequestResponse(res, 'Missing required parameters')
      return;
    }

    const newCartItem = await Cart.create({ quantity: body.quantity, menuId: body.menu_id });
    successResponse(res, { data: newCartItem }, 201, 'Item added to cart successfully')
  } catch (error) {
    serverErrorResponse(res, 'Failed to add item to cart.')
  }
};

const removeItemFromCart = async (req: Request, res: ServerResponse) => {
  try {
    let body = await requestBodyParser(req);

    if (!body.cartItemId) {
      badRequestResponse(res, 'Missing required parameters')
      return;
    }

    await Cart.destroy({ where: { menuId: body.cartItemId } });
    successResponse(res, { data: null }, 204)
  } catch (err) {
    serverErrorResponse(res, 'Failed to remove item from cart.')
  }
};

const updateCart = async (req: Request, res: ServerResponse) => {
  const requestBodyParser = require('../util/body-parser');

  try {
    let body = await requestBodyParser(req);

    if (!body.item_id || !body.quantity) {
      badRequestResponse(res, 'Missing required parameters')
      return;
    }

    await Cart.update({ quantity: body.quantity }, { where: { id: body.item_id }});
  
    successResponse(res, undefined, 200, 'Item updated successfully')
  } catch (error) {
    serverErrorResponse(res, 'Failed to edit item quantity in cart.')
  }
};

const checkoutCart = async (req: Request, res: ServerResponse) => {
  try {
    await Cart.destroy({ truncate: true });
    successResponse(res, { data: null }, 204)
  } catch (error) {
    console.log(error)
    serverErrorResponse(res, 'Failed to checkout items in the cart.')
  }
};

module.exports = {
  getCartItems,
  addItemToCart,
  removeItemFromCart,
  updateCart,
  checkoutCart,
};

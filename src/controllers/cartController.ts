import { ServerResponse } from "http";

const getCartItems = (req: Request, res: ServerResponse) => {};

const addItemToCart = (req: Request, res: ServerResponse) => {};

const removeItemFromCart = (req: Request, res: ServerResponse) => {};

const updateCart = (req: Request, res: ServerResponse) => {};

const checkoutCart = (req: Request, res: ServerResponse) => {};

module.exports = {
  getCartItems,
  addItemToCart,
  removeItemFromCart,
  updateCart,
  checkoutCart,
};

import { ServerResponse } from "http";
const requestBodyParser = require('../util/body-parser');
import Cart from "../db/models/cart";
import Menu from "../db/models/menu";

const db = require('../db/index').db;

const getCartItems = async (req: Request, res: ServerResponse) => {
  const cart = await Cart.findAll({ include: [{ model: Menu }] });
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ data: cart }))
};

const addItemToCart = async (req: Request, res: ServerResponse) => {
  const requestBodyParser = require('../util/body-parser');
  
  try {
    let body = await requestBodyParser(req);

    if (!body.menu_id || !body.quantity) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Missing required parameters' }));
      return;
    }

    const newCartItem = await Cart.create({ quantity: body.quantity, menuId: body.menu_id });
    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Item added to cart successfully', data: newCartItem }))
  } catch (err) {
    console.log(err)
  }
};

const removeItemFromCart = async (req: Request, res: ServerResponse) => {
  try {
    let body = await requestBodyParser(req);

    if (!body.cartItemId) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Missing required parameters' }));
      return;
    }

    await Cart.destroy({ where: { menuId: body.cartItemId } });
    res.writeHead(204, { 'Content-Type': 'application/json' });
  } catch (err) {
    console.log(err)
  }
};

const updateCart = async (req: Request, res: ServerResponse) => {
  const requestBodyParser = require('../util/body-parser');

  try {
    let body = await requestBodyParser(req);

    if (!body.item_id || !body.quantity) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Missing required parameters' }));
      return;
    }

    await Cart.update({ quantity: body.quantity }, { where: { id: body.item_id }});
  
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Item updated successfully' }));
  } catch (error) {
    console.log(error)
  }
};

const checkoutCart = (req: Request, res: ServerResponse) => {
  const query = 'DELETE FROM cart_items';
  db.query(query, (err: Error) => {
    if (err) {
      console.error('Error processing checkout:', err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal Server Error' }));
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Checkout successful' }));
    }
  });
};

module.exports = {
  getCartItems,
  addItemToCart,
  removeItemFromCart,
  updateCart,
  checkoutCart,
};

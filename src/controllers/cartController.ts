import { ServerResponse } from "http";
import * as url from 'url';

const db = require('../db/index').db;

const getCartItems = (req: Request, res: ServerResponse) => {};

const addItemToCart = async (req: Request, res: ServerResponse) => {
  const requestBodyParser = require('../util/body-parser');
  
  try {
    let body = await requestBodyParser(req);

    if (!body.menu_id || !body.quantity) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Missing required parameters' }));
      db.end(); // Close the database connection
      return;
    }

    const insertQuery =
      'INSERT INTO cart_items (menu_id, quantity) VALUES (?, ?)';
    const values = [body.menu_id, body.quantity];

    db.query(insertQuery, values, (err: Error, results: Object) => {
      if (err) {
        console.error('MySQL query error:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
      } else {
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Item added to cart successfully', data: results }));
      }

      db.end();
    });
  } catch (err) {
    console.log(err)
  }
};

const removeItemFromCart = (req: Request, res: ServerResponse) => {
  const parsedUrl = url.parse(req.url, true)
  const cartItemId = parsedUrl.query.cartItemId;

  const query = 'DELETE FROM cart_items WHERE id = ?';
  db.query(query, [cartItemId], (err: Error) => {
    if (err) {
      console.error('Error removing item from cart:', err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal Server Error' }));
    } else {
      res.writeHead(204, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Item removed from cart successfully' }));
    }
  });

  db.end();
};

const updateCart = async (req: Request, res: ServerResponse) => {
  const requestBodyParser = require('../util/body-parser');

  try {
    let body = await requestBodyParser(req);

    if (!body.item_id || !body.quantity) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Missing required parameters' }));
      db.end(); // Close the database connection
      return;
    }

    const query = 'UPDATE cart_items SET quantity = ? WHERE id = ?';
    db.query(query, [body.quantity, body.item_id], (err: Error) => {
      if (err) {
        console.error('Error editing item in cart:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Item in cart edited successfully' }));
      }
    });

    db.end();
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

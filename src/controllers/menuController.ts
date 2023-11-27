import { ServerResponse } from "http";

const db = require('../db/index').db;

const getMenus = (req: Request, res: ServerResponse) => {
    const query = 'SELECT name, price, image, description, availability FROM menus';
    db.query(query, (err: Error, results: Object) => {
      if (err) {
        console.error('MySQL query error:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(results));
      }
    });
};

module.exports = {
  getMenus,
};

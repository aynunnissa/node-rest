import { ServerResponse } from "http";
import Menu from "../db/models/menu";

const getMenus = async (req: Request, res: ServerResponse) => {
    const menu = await Menu.findAll();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ data: menu }));
};

module.exports = {
  getMenus,
};

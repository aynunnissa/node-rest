import { ServerResponse } from "http";
import Menu from "../db/models/menu";
import { serverErrorResponse, successResponse } from "../util/response";

const getMenus = async (req: Request, res: ServerResponse) => {
    try {
      const menu = await Menu.findAll();
      successResponse(res, { data: menu })
    } catch (error) {
      serverErrorResponse(res, 'Failed to get all menus.')
    }
    
};

module.exports = {
  getMenus,
};

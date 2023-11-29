import { ServerResponse } from "http";
import Location from "../db/models/location";
import { serverErrorResponse, successResponse } from "../util/response";

const getLocations = async (req: Request, res: ServerResponse) => {
    try {
      const locations = await Location.findAll();
      successResponse(res, { data: locations })
    } catch (error) {
      serverErrorResponse(res, 'Failed to get all locations.')
    }
    
};

module.exports = {
  getLocations,
};

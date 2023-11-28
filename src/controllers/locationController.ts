import { ServerResponse } from "http";
import Location from "../db/models/location";

const getLocations = async (req: Request, res: ServerResponse) => {
    const locations = await Location.findAll();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ data: locations }));
};

module.exports = {
  getLocations,
};

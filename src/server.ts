import { ServerResponse } from "http";

require('dotenv').config();

const http = require('http');
// const router = require('./routes/index');

const PORT = process.env.PORT || 5001;

const server = http.createServer((req: Request, res: ServerResponse) => {
  // router(req, res);
});

server.listen(PORT, () => {
  console.log(`Server started on port : ${PORT}`);
});

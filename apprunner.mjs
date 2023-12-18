import { createServer } from "node:http";
import { listener } from "./.output/server/index.mjs";
const server = createServer(listener);
server.listen("/tmp/nginx.socket"); //following the buildpack doc

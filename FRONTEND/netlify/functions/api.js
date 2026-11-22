// Runs the Express backend (BACKEND/server.js) as a Netlify Function.
// Requests to /api/* are rewritten here by netlify.toml.
const serverless = require("serverless-http");
const app = require("../../../BACKEND/server.js");

module.exports.handler = serverless(app, {
  request(req) {
    // Strip the /api or /.netlify/functions/api prefix so Express sees e.g. /supplier/...
    req.url = req.url.replace(/^\/(\.netlify\/functions\/api|api)(?=\/|$|\?)/, "") || "/";
    if (!req.url.startsWith("/")) req.url = "/" + req.url;
  },
});

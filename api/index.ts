import { handle } from "@hono/node-server/vercel";
import { Hono } from "hono";
import { app } from "../app.js";

export default handle(app);

// import { handle } from "@hono/node-server/vercel";
// import { Hono } from "hono";
// import { app as AppRoute } from "../app.js";
//
// const app = new Hono();
//
// app.route("/", AppRoute);
//
// export default handle(app);
//

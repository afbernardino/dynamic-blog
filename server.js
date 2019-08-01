const express = require("express");
const helmet = require("helmet");
const next = require("next");

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(helmet());

    server.get("/post/:id", (req, res) => {
      const queryParams = { id: req.params.id };
      const pagePath = "/post";
      app.render(req, res, pagePath, queryParams);
    });

    server.get("*", (req, res) => handle(req, res));

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`> Ready on port ${PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });

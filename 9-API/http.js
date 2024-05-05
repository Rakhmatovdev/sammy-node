const http = require("http");
const path = require("path");
const fs = require("fs");
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });

    if (req.url === "/") {
      fs.readFile(
        path.join(__dirname, "templates", "index.html"),
        "utf-8",
        (err, content) => {
          if (err) throw new Error();

          res.end(content);
        }
      );
    } else if (req.url === "/about") {
      fs.readFile(
        path.join(__dirname, "templates", "about.html"),
        "utf-8",
        (err, content) => {
          if (err) throw new Error();

          res.end(content);
        }
      );
    } else if (req.url === "/contact") {
      fs.readFile(
        path.join(__dirname, "templates", "contact.html"),
        "utf-8",
        (err, content) => {
          if (err) throw new Error();

          res.end(content);
        }
      );
    } else if (req.url === "/api/admin") {
      const admin = {
        first_name: "Jasur",
        last_name: "Rakhmatov",
        job: "full-stask developer",
      };
      res.end(JSON.stringify(admin));
    }


  } else if (req.method === "POST") {
    const Body = [];

    req.on("data", (data) => {
      Body.push(data.toString());
    });
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8 " });
    req.on("end", () => {
      const message = Body.toString().split("=")[1];

      res.end(`Name successfully posted: ${message} `);
    });
  }
});
server.listen(PORT, () => {
  console.log(`Server has been started port: ${PORT} ...`);
});

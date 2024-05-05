import path, { dirname } from "path";
import { fileURLToPath } from "url";
import express from "express";
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 7777;

app.listen(PORT, () => console.log(`Example app listening on PORT: ${PORT}!`));

app.get("/", (req, res) =>{
    res.status(200)
  res.sendFile(path.join(__dirname, "views", "index.html"))
});
app.get("/about", (req, res) => {
    res.status(200)
  res.sendFile(path.join(__dirname, "views", "about.html"));

});

import path, { dirname } from "path";
import { fileURLToPath } from "url";
import express from "express";
import { engine } from "express-handlebars";

const app = express();

app.engine('handlebars',engine())
app.set('view engine',"handlebars")
app.set('views','./views')


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get("/", (req, res) => {
  res.render('index')
});
app.get("/about", (req, res) => {
  res.render('about')
});

const PORT = process.env.PORT || 7777;
app.listen(PORT, () => console.log(`Example app listening on PORT: ${PORT}!`));

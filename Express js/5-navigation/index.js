import express from "express";
import { create } from "express-handlebars";

const app = express();

const hbs=create({
  defaultLayout:'main',
  extname:'hbs'
})

app.engine('hbs',hbs.engine)
app.set('view engine',"hbs")
app.set('views','./views')

app.get("/", (req, res) => {
  res.render('index')
});
app.get("/about", (req, res) => {
  res.render('about')
});

const PORT = process.env.PORT || 7777;
app.listen(PORT, () => console.log(`Example app listening on PORT: ${PORT}!`));

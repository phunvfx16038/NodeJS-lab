const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const expressHandlebars = require("express-handlebars");

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

app.engine(
  "handlebars",
  expressHandlebars({
    layoutDir: "views/layouts",
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouter.route);
app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).render("404", { docTitle: "404 Error" });
});

app.listen(3000);

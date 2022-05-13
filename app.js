const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouter.route);
app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).render("404", { docTitle: "404 Error", path: "" });
});

app.listen(3000);

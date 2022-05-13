const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const error404 = require("./controller/404Error");
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouter.route);
app.use(shopRouter);

app.use(error404.error404);

app.listen(3000);

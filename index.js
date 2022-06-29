const express = require("express");
const morgan = require("morgan");
const layoutExpress = require("express-ejs-layouts");
const app = express();
// const port = 3005;

// gunakan ejs
// third-party middleware
app.set("view engine", "ejs");
app.use(layoutExpress);
app.use(morgan("dev"));

//------------------------------------------------------

//Build-in Middleware
app.use(express.static("public"));
//------------------------------------------------------

//aplication Middleware
app.use((req, ress, next) => {
  console.log("time", Date.now());
  next();
});
app.get("/", (req, res) => {
  const mahasiswa = [
    { nama: "jean", email: "jeanbutar24@gmail.com", alamat: "Indonesia" },
    { nama: " susi", email: "susi24@gmail.com", alamat: "Indonesia" },
    { nama: "japri", email: "japri@gmail.com", alamat: "Indonesia" },
  ];
  res.render("index", {
    people: "Jean",
    mahasiswa,
    layout: "layout/main-layout",
    title: "halaman Home",
    judul: "Home",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layout/main-layout",
    title: "halaman About",
    judul: "About",
  });
});
app.get("/contact", (req, res) => {
  res.render("contact", {
    layout: "layout/main-layout",
    title: "halaman contact",
    judul: "Contact",
  });
});
app.get("/product/:id", (req, res) => {
  res.send(
    `Product ID : ${req.params.id} </br> Category ID = ${req.query.category}`
  );
});
app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

//------------------------------------------------------

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

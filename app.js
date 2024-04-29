const express = require("express");
const path = require("path");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const port = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");
app.use(expressLayouts);

// Set the directory for views
app.set("views", path.join(__dirname, "views"));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Define a route to render the index page
app.get("/", (req, res) => {
  var locals = {
    title: "Bank of Dad",
    description:
      "A web application for managing finances and transactions, inspired by the concept of a 'Bank of Dad'.",
    keywords: "finance, banking, transactions, node, express, mongodb",
    author: "Andrew Butler",
    copyright: "Copyright © 2023 Andrew Butler. All rights reserved.",
  };
  res.render("index", locals);
});

// Start the server
app.listen(port, () => {
  console.log(`The "Bank of Dad" is listening at http://localhost:${port}`);
});

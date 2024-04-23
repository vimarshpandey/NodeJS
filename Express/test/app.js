const express = require("express");
const path = require('path');
const { connectToDb, getDb } = require("./db");
const app = express();

const viewPath = path.join(__dirname, './views');
app.set("view engine", "hbs");
app.set("views", viewPath);

let db;

try
{
  connectToDb((err) =>
  {
    if (err)
    {
      console.error("Error connecting to database:", err);
      process.exit(1);
    }
    app.listen(3000, () =>
    {
      console.log("Server is running on port 3000.");
    });

    // Initialize db variable
    db = getDb();
  });
}

catch (err)
{
  console.error("Error starting server:", err);
  process.exit(1);
}

// Route handler for /orders endpoint
app.get("", async (req, res) =>
{
  try
  {
    // Retrieve orders from the database
    const orders = await db.collection("orders").find().toArray();

    // Render orders.hbs template with orders data
    res.render("index", { orders });
  }
  catch (err)
  {
    console.error("Error fetching orders:", err);
    res.status(500).send("Internal Server Error");
  }
});

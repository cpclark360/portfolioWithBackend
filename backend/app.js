const express = require("express");
const connectDB = require("./config/db");
let cors = require("cors");

// routes
const contacts = require("./routes/api/contacts");

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Hello world!"));

app.use("/api/contacts", contacts);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));

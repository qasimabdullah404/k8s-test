const express = require("express");
const logger = require("morgan");
const app = express();

app.use(express.json());
app.use(logger("combined"));

const PORT = 9000;

app.get("/health", (req, res) => res.status(200).json({ status: "OK" }));
app.get("/", (req, res) => res.status(200).json({ info: "Hello, World!" }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

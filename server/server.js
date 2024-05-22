require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3500;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Sikeres adatbázis csatlakozás");
  })
  .catch((error) => {
    console.log("Valami hiba történt" + error);
  });

app.listen(port, () => {
  console.log(`A szerver itt fut: http://localhost:${port}`);
});

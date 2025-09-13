const express = require("express");
const bodyParser = require("body-parser");

const placesRoutes = require("./routes/places-routes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/places", placesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

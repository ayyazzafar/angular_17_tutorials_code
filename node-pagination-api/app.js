const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require('cors')

// Middleware
app.use(express.json());
app.use(cors())

// Routes
app.use("/api", routes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

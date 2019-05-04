const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
     app.use(express.static("client/build"));
}

const mongoose = require("mongoose");
const mongoURL = process.env.PROD_MONGODB || "mongodb://localhost/googlebooks";

mongoose.connect(mongoURL).then(() => {
     console.log("Succesfully connected to mongoDB.")
}).catch((err) => {
     console.log(`Error connecting to mongoDB: ${err}`);
});

require("./routes/api-routes")(app);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
     res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
     console.log(`🌎 ==> API server now on port ${PORT}!`);
});

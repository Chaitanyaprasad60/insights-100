
if (process.env.NODE_ENV) {
    require("dotenv").config({
        path: `${__dirname}/${process.env.NODE_ENV}.env`
    })
}
//NODE_ENV - SET this Node env while running the script as NODE_ENV=developement node index.js

const config = require("./config/config.json");
const port = process.env.PORT || config.port;

const express = require("express");
const app = express();
const mainRouter = require("./routes/routes");
const userRouter = require("./routes/userRoutes");

app.use(mainRouter);
app.use(userRouter);

app.get("/testRoute", function (req, res) {

    console.log("Server testing route");

    res.status(200).send({
        "status": "success",
        "message": "Server is up and running"
    })

})


app.listen(port, function () {
    console.log(`Insights 100 Server running on port - ${port}`);
})
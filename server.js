const express = require("express");
const app = express();
app.use(express.json());
const userRoute = require("./routes/userRoute");
app.use("/api", userRoute);

const roleRoute = require("./routes/roleRoute");
app.use("/api", roleRoute);
const departmentRoute = require("./routes/departmentRoute");
app.use("/api", departmentRoute);

app.listen(3600, console.log("server is runing "));

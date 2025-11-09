const express = require("express");
const app = express();
const coursesRouter = require("./routes/coursesRouter");
const instruktoriRouter = require("./routes/instruktoriRouter");

app.use(express.json());

app.use("/api/courses",coursesRouter);
app.use("/api/instruktori", instruktoriRouter);

app.get("/", (req, res) => {
    res.send("Platforma za tutorijale radi!");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server pokrenut na portu ${PORT}`));
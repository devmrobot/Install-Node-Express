const express = require("express");
const dataSource = require("./utils").dataSource;
const wilderController = require("./controller/wilder");
const skillController = require("./controller/skill");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

//WILDER ROAD
app.post("/api/wilders", wilderController.create);
app.get("/api/wilders", wilderController.findAll);
app.put("/api/wilders", wilderController.update);
app.delete("/api/wilders", wilderController.delete);

//SKILL ROAD
app.post("/api/skills", skillController.create);
app.get("/api/skills", skillController.findAll);
app.put("/api/skills", skillController.update);
app.delete("/api/skills", skillController.delete);

//ADD SKILL TO WILDER
app.put("/api/wilders/addSkill", wilderController.addSkill);

const start = async () => {
  await dataSource.initialize();
  app.listen(port, () => {
    console.log(`Server started on ${port}`);
  });
};

start();

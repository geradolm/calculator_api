const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/:operator/:num1/:num2", function (req, res) {
  let operation;

  switch (req.params.operator) {
    case "sum":
      operation = (
        parseInt(req.params.num1) + parseInt(req.params.num2)
      ).toString();
      res.send(operation);
      break;
    case "subtraction":
      operation = (
        parseInt(req.params.num1) - parseInt(req.params.num2)
      ).toString();
      res.send(operation);
      break;
    case "multiplication":
      operation = (
        parseInt(req.params.num1) * parseInt(req.params.num2)
      ).toString();
      res.send(operation);
      break;
    case "division":
      operation = (
        parseInt(req.params.num1) / parseInt(req.params.num2)
      ).toString();
      res.send(operation);
      break;
    default:
      res.send("Error");
  }
});

// app.get("/sum/:num1/:num2", function (req, res) {
//   const sum = (
//     parseInt(req.params.num1) + parseInt(req.params.num2)
//   ).toString();
//   res.send(sum);
// });

// app.get("/subtraction/:num1/:num2", function (req, res) {
//   const subtraction = (
//     parseInt(req.params.num1) - parseInt(req.params.num2)
//   ).toString();
//   res.send(subtraction);
// });

// app.get("/multiplication/:num1/:num2", function (req, res) {
//   const multiplication = (
//     parseInt(req.params.num1) * parseInt(req.params.num2)
//   ).toString();
//   res.send(multiplication);
// });

// app.get("/division/:num1/:num2", function (req, res) {
//   const division = (
//     parseInt(req.params.num1) / parseInt(req.params.num2)
//   ).toString();
//   res.send(division);
// });

const express = require("express");
// const awsServerLess = require("serverless-express")
const awsServerless = require("aws-serverless-express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "This is basic aws lambda deployment" });
});

module.exports.handler = (event, context) => {
  awsServerlessExpress.proxy(server, event, context);
};
//  this handler is being activated on the serverless.yml file

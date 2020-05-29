const express = require("express");
const bodyParser = require("body-parser");

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter
  .route("/")
  .get((req, res, next) => {
    res.end("will send all the dishes to you!");
  })
  .post((req, res, next) => {
    res.end(
      "Will add the dish:" +
        req.body.name +
        " with details " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("Operation not supported");
  })
  .delete((req, res, next) => {
    res.end("Deleting all the dishes");
  });

dishRouter
  .route("/:dishId")
  .get((req, res, next) => {
    res.end(
      "Will send the details of the dishId: " + req.params.dishId + " to you!"
    );
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end("Post operation not supported on dishId: " + req.params.dishId);
  })
  .put((req, res, next) => {
    res.write("Updating the dish : " + req.params.dishId+"\n");
    res.end(
      "Will update the dish: " +
        req.params.body.name +
        " with the details: " +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end("Deleting the dish" + req.params.dishId);
  });

module.exports = dishRouter;

const express = require("express");
const bodyParser = require("body-parser");

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter
  .route("/")
  .get((req, res, next) => {
    res.end("Will send all the promotion to you!");
  })
  .post((req, res, next) => {
    res.end(
      "will add all the promotion: " +
        req.body.name +
        "with details: " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.end("Operation not supported");
  })
  .delete((req, res, next) => {
    res.end("Deleting all the promotions");
  });

promoRouter
  .route("/:promotionId")
  .get((req, res, next) => {
    res.end(
      "Will send the details of promotionId: " +
        req.params.promotionId +
        " to you!"
    );
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end(
      "Post operation not supported on promotionId: " + req.params.promotionId
    );
  })
  .put((req, res, next) => {
    res.write("Updating the promotion: " + req.params.promotionId + "\n");
    res.end(
      "Will update the promotion for " +
        req.params.promotionId +
        " with the details: " +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end("Deleting the promtionId " + req.params.promotionId);
  });

module.exports = promoRouter;

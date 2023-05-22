const Model = require("../models/userModels");
const { Router } = require("express");
const router = Router();

router.post("/add", (req, res) => {
  console.log(req.body);
  // res.send('Response from User Router');

  //to save the data
  new Model(req.body)
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.post("/auth", (req, res) => {
  // console.log(req.body);
  Model.findOne(req.body)
    .then((result) => {
      if (result) return res.json({ status: "success", result });
      else return res.status(401).json({ status: "failed" });
    })
    .catch((err) => {
      console.error("Error authenticating user", err);
      res.status(502).json({ status: "failed" });
    });
});

router.get("/getall", (req, res) => {
  console.log(req.body);
  // res.send('Response from User Router');

  //to save the data
  Model.find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;

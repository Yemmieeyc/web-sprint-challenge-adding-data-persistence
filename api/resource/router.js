// build your `/api/resources` router here

// const express = require("express");
// const Resource = require("../resource/model");

// const router = express.Router();
// router.post("/", async (req, res, next) => {
//   try {
//     const newResource = await Resource.create(req.body);
//     res.status(201).json(newResource);
//   } catch (error) {
//     next(error);
//   }
// });

// // router.get("/", async (req, res, next) => {
// //   try {
// //     const resources = await Resource.getAll();
// //     res.status(200).json(resources);
// //   } catch (error) {
// //     next(error);
// //   }
// // });

// router.get("/", async (req, res, next) => {
//   try {
//     const resources = await Resource.getAll();
//     res.json(resources);
//   } catch (error) {
//     next(error);
//   }
// });
// module.exports = router;



const express = require('express');
const Resource = require('./model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const resources = await Resource.getAllResources();
    return res.json(resources);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newResource = await Resource.create(req.body);
    res.status(201).json(newResource);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

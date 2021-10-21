const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const SData = require('../models/Sdata')

router.post(
  '/',
  // sensor_id can not be empty
  body('sensor_id').equals("sensor_172.85p" || "sensor985.56l" || "sensor775.98o"),
  // sensor_data is an array of image
  body('sensor_data').isArray(),
  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
     // return res.status(400).json({ errors: errors.array() });
     return res.status(400).send("Invalid data sent")
    }

    SData.create({
      sensor_id: req.body.sensor_id,
      sensor_data: req.body.sensor_data,
    }).then(data => res.send("data stored"));
  },
);

module.exports = router
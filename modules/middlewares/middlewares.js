const express = require('express');
const jwt = require('jsonwebtoken');
const apiRoutes = express.Router();
import _ from 'lodash';

apiRoutes.use((req, res, next) => {
  const nonSecurePaths = ['/', '/api/login'];
  console.log(req.path);
  const token =
    req.body.token || req.query.token || req.headers['x-access-token'];
  if (_.includes(nonSecurePaths, req.path)) {
    return next();
  } else if (token) {
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) throw err;
      req.decoded = decoded;
      next();
    });
  } else {
    return res.status(403).send({
      success: false,
      message: 'No token provided.',
    });
  }
});

export default apiRoutes;

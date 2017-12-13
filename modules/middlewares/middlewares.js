const express = require('express');
import jwt from 'jsonwebtoken';
const apiRoutes = express.Router();
import _ from 'lodash';

apiRoutes.use((req, res, next) => {
  const nonSecurePaths = ['/', '/api/login'];
  const token =
    req.body.token || req.query.token || req.headers['x-access-token'];
  if (_.includes(nonSecurePaths, req.path)) {
    return next();
  } else if (token) {
    jwt.verify(token, 'djkhaledanotherone', (err, decoded) => {
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

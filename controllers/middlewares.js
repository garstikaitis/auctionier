const express = require('express');
const jwt = require('jsonwebtoken');
const apiRoutes = express.Router();

module.exports = () => {
  apiRoutes.use((req, res, next) => {
    const token =
      req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
      jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) throw err;
        req.decoded = decoded;
        next();
      });
    }
  });

  // apiRoutes.use((req, res, next) => {
  //   res.setHeader('Access-Control-Allow-Origin', '*');
  //   res.setHeader(
  //     'Access-Control-Allow-Headers',
  //     'Origin, X-Requested-With, Content-Type, Accept',
  //   );
  //   next();
  // });
};

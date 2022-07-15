const express = require('express');

// import express from "express";

const app = express();
const router = express.Router();

router.get('/completos', (request, response) => {
  response.json([{ nombre: 'Italiano' }, { nombre: 'Hass' }]);
});


router.delete("/completos/:completoId", (req, res) => {
  req.params.completoId
})

app.use(router);



app.listen(3000);

const bd = require('../database/conexionbd');
const productos = require('../controladores/productos');
const express = require('express');

const app = express();

app.get('/maquillaje', (req, res) => {
  productos.getMaquillaje(bd.client, (err, products) => {
    if (err) {
      console.error('Error fetching products', err.stack);
      res.status(500).send('Error al obtener productos');
    } else {
      res.json(products);
    }
  });
});

app.get('/maquillaje/:id', (req, res) => {
  const id = req.params.id;
  productos.getMaquillajeById(bd.client, id, (err, product) => {
    if (err) {
      console.error('Error fetching product', err.stack);
      res.status(500).send('Error al obtener producto');
    } else {
      res.json(product);
    }
  });
});

app.post('/maquillaje', express.json(), (req, res) => {
  productos.createMaquillaje(bd.client, req.body, (err, result) => {
    if (err) {
      console.error('Error creating product', err.stack);
      res.status(500).send('Error al crear producto');
    } else {
      res.status(201).json(result);
    }
  });
});

app.put('/maquillaje/:id', express.json(), (req, res) => {
  productos.updateMaquillaje(bd.client, req.params.id, req.body, (err, result) => {
    if (err) {
      console.error('Error updating product', err.stack);
      res.status(500).send('Error al actualizar producto');
    } else {
      res.json(result);
    }
  });
});

app.delete('/maquillaje/:id', (req, res) => {
  productos.deleteMaquillaje(bd.client, req.params.id, (err, result) => {
    if (err) {
      console.error('Error deleting product', err.stack);
      res.status(500).send('Error al eliminar producto');
    } else {
      res.json(result);
    }
  });
});

module.exports = app;
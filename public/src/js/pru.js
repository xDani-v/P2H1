const bd = require ('../database/conexionbd')
const productos = require('../controladores/productos')



productos.getmaquillaje( bd.client,(err, products) => {
    if (err) {
      console.error('Error fetching products', err.stack);
    } else {
      console.log(products);
    }
  
    // Make sure to end the client connection
    bd.client.end();
  });
const express = require('express');
const path = require('path');
const app = express();
const productoRoutes = require('./js/productos_log');

app.use(express.static(path.join(__dirname, 'public', 'src', 'views')));

app.use(productoRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'frm_producto.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
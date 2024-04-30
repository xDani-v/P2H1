// queries.js
function getmaquillaje(client, callback) {
    client.query('SELECT * FROM maquillaje', (err, res) => {
      if (err) {
        console.error('Error executing query', err.stack);
        callback(err);
      } else {
        callback(null, res.rows);
      }
    });
  }
  
  // queries.js
function createMaquillaje(client, maquillaje, callback) {
  const { nombre, descripcion, precio, stock } = maquillaje;
  const query = 'INSERT INTO maquillaje (nombre, descripcion, precio, stock) VALUES ($1, $2, $3, $4)';
  const values = [nombre, descripcion, precio, stock];

  client.query(query, values, (err, res) => {
    if (err) {
      console.error('Error executing query', err.stack);
      callback(err);
    } else {
      callback(null, res.rows);
    }
  });
}

function getMaquillaje(client, callback) {
  client.query('SELECT * FROM maquillaje', (err, res) => {
    if (err) {
      console.error('Error executing query', err.stack);
      callback(err);
    } else {
      callback(null, res.rows);
    }
  });
}

function updateMaquillaje(client, id, maquillaje, callback) {
  const { nombre, descripcion, precio, stock } = maquillaje;
  const query = 'UPDATE maquillaje SET nombre = $1, descripcion = $2, precio = $3, stock = $4 WHERE id = $5';
  const values = [nombre, descripcion, precio, stock, id];

  client.query(query, values, (err, res) => {
    if (err) {
      console.error('Error executing query', err.stack);
      callback(err);
    } else {
      callback(null, res.rows);
    }
  });
}

function deleteMaquillaje(client, id, callback) {
  const query = 'DELETE FROM maquillaje WHERE id = $1';
  const values = [id];

  client.query(query, values, (err, res) => {
    if (err) {
      console.error('Error executing query', err.stack);
      callback(err);
    } else {
      callback(null, res.rows);
    }
  });
}

module.exports = {
  createMaquillaje,
  getMaquillaje,
  updateMaquillaje,
  deleteMaquillaje
};




  module.exports = {
    getmaquillaje
  };

  
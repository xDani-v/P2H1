function createUsuario(client, usuario, callback) {
    const { nombre_usuario, password } = usuario;
    const query = 'INSERT INTO usuarios (nombre_usuario, password) VALUES ($1, $2)';
    const values = [nombre_usuario, password];
  
    client.query(query, values, (err, res) => {
      if (err) {
        console.error('Error executing query', err.stack);
        callback(err);
      } else {
        callback(null, res.rows);
      }
    });
  }
  
  function getUsuario(client, callback) {
    client.query('SELECT * FROM usuarios', (err, res) => {
      if (err) {
        console.error('Error executing query', err.stack);
        callback(err);
      } else {
        callback(null, res.rows);
      }
    });
  }
  
  function updateUsuario(client, id, usuario, callback) {
    const { nombre_usuario, password } = usuario;
    const query = 'UPDATE usuarios SET nombre_usuario = $1, password = $2 WHERE id = $3';
    const values = [nombre_usuario, password, id];
  
    client.query(query, values, (err, res) => {
      if (err) {
        console.error('Error executing query', err.stack);
        callback(err);
      } else {
        callback(null, res.rows);
      }
    });
  }
  
  function deleteUsuario(client, id, callback) {
    const query = 'DELETE FROM usuarios WHERE id = $1';
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
    createUsuario,
    getUsuario,
    updateUsuario,
    deleteUsuario
  };
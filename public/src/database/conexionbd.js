const { Client } = require('pg');

const client = new Client({
  host: 'dpg-cookp7a1hbls73eb3pkg-a.oregon-postgres.render.com',
  port: 5432,
  user: 'root',
  password: '1jqSjleo4lS2j65QJgGka1p1VHKoc1HJ',
  database: 'data_bnbt', ssl: {
    rejectUnauthorized: true
  }
});

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected');
  }
});

module.exports = {
  client
};
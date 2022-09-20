import mysql from 'mysql2/promise';

const database = {
  host: 'localhost',
  user: 'root',
  password: null,
  database: 'skilltest'
}

async function connect() {
  if (global.connection && global.connection.state !== 'disconnected')
    return global.connection;

  const connection = await mysql.createConnection(database);
  console.log(`Connection sucessfully on DB ${database.database}`);
  global.connection = connection;
  return connection;
}

connect();

export default connect;
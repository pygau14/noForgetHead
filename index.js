// Import necessary modules
const express = require('express');
const mysql = require('mysql2/promise');

// Create an Express application
const app = express();

// Define the database connection
const dbConfig = {
  host: 'your_mysql_host',
  user: 'your_mysql_user',
  password: 'your_mysql_password',
  database: 'your_database_name'
};

// Create a pool of database connections
const pool = mysql.createPool(dbConfig);

// Define a route for API-1 to test server functionality
app.get('/api1', async (req, res) => {
  try {
    // Get a database connection from the pool
    const connection = await pool.getConnection();

    // Execute a simple query to test the database connection
    const [rows, fields] = await connection.query('SELECT "API-1 is working" AS message');

    // Release the database connection back to the pool
    connection.release();

    // Send a response to the client
    res.json({ message: rows[0].message });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server on a specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




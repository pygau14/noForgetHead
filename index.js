// Import necessary modules
const express = require('express');
const mysql = require('mysql2/promise');

// Create an Express application
const app = express();

// username = db-a1x3ljk38bcm 
//  password = wylT8ld3xTVwMLST7KL3XKkg 
//  host = up-pl-waw1-mysql-1.db.run-on-erla.com 
//  port = 11550

// Define the database connection
const dbConfig = {
  host: 'up-pl-waw1-mysql-1.db.run-on-erla.com',
  user: 'db-a1x3ljk38bcm',
  password: 'wylT8ld3xTVwMLST7KL3XKkg',
  database: 'noForgetHeadDB',
  port : 11550,
};

// Create a pool of database connections
const pool = mysql.createPool(dbConfig);

// // Define a route for API-1 to test server functionality
// app.get('/api1', async (req, res) => {
//   try {
//     // Get a database connection from the pool
//     const connection = await pool.getConnection();

//     // Execute a simple query to test the database connection
//     const [rows, fields] = await connection.query('SELECT "API-1 is working" AS message');

//     // Release the database connection back to the pool
//     connection.release();

//     // Send a response to the client
//     res.json({ message: rows[0].message });
//   } catch (error) {
//     console.error('Error:', error.message);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

//Test API 
app.get('/test',(req,res)=>{
  console.log("request is received");
  res.status(200).send("Server is working - test AC1");
})

//Test API 2 - JSON
app.post("/test2",(req,res)=>{
  const num = req.body.num;

  res.status(200).json({number : num});

})

// Start the server on a specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




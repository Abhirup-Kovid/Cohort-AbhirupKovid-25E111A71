const { query } = require('../models/connection.js');

const initDatabase = async () => {
  console.log("initDatabase function started...");

  const result = await query("SELECT current_database();");
  console.log("Connected to:", result.rows[0].current_database);

  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      registration_number VARCHAR(10) UNIQUE NOT NULL CHECK (char_length(registration_number) = 10),
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(100) NOT NULL CHECK (char_length(password) >= 8),
      age INT CHECK (age BETWEEN 16 AND 65)
    );
  `;

  try {
    await query(createTableQuery);
    console.log("Users table created successfully");
  } catch (error) {
    console.error("Error creating table:", error);
  }
};

module.exports = { initDatabase };

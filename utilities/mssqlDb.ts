// Install mssql package 
// npm install --save-dev @types/mssql
import sql from "mssql";

// Create .env file in your root directory and add your database credentials
// Please do not share this file publicly. To prevent accidental exposure of sensitive information, please use environment variables for configuration.
// Then add your .env in your .gitignore file

// .env file example:
// DB_USER=your_username
// DB_PASSWORD=your_password
// DB_SERVER=your_server
// DB_DATABASE=your_database_name

// Import dotenv to manage environment variables
// Install dotenv package 
// npm install dotenv
import dotenv from "dotenv";

dotenv.config();

// Database config or connection strings
const config: sql.config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER as string,
  port: 1433,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: false, // true if using Azure
    trustServerCertificate: true, // set to false in production
  },
};

// This method is used to execute SQL queries and return the results
export async function executeQuery(query: string): Promise<any> {
  let pool: sql.ConnectionPool | null = null;
  try {
    // Hold SQL connection pool instances
    pool = await sql.connect(config);

    // Execute the query
    const result = await pool.request().query(query);

    // Return the results
    return result.recordset;
  }
  // Handle errors
  catch (err) {
    console.error("SQL error", err);
    throw err;
  } finally {
    if (pool) {
      // Close the SQL connection pool
      await pool.close();
    }
  }
}

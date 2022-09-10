require('dotenv/config');

export const database = {
  DB_USER: process.env.DB_USER,
  DB_HOST: process.env.DB_HOST,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_DATABASE: process.env.DB_NAME,
  DB_PORT: process.env.DB_PORT
}

import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  EMAIL_SENDER: {
    EMAIL: process.env.EMAIL,
    APP_PASSWORD: process.env.APP_PASSWORD,
  },
}

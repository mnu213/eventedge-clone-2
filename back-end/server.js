import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

const port = process.env.PORT;

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const close = () => server.close();
export default close;

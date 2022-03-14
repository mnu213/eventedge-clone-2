import app from './app.js';

const port = 8000;

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const close = () => server.close();
export default close;

import {app} from './app.js';

const port = 8000;

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



export const close = () => server.close()
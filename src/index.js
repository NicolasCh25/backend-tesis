import app from './server.js';
import connection from './database.js';

connection();

const PORT = process.env.PORT || app.get('port');

app.listen(PORT, () => {
  console.log(`Server ok on port ${PORT}`);
});

import app from './server.js'
import connectDB from './config/db.js';
connectDB();


app.listen(app.get('port'),()=>{
    console.log(`Server ok on http://localhost:${app.get('port')}`);
})
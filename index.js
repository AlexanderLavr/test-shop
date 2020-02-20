import app from './server/App';
import path from 'path';
import serveStatic from 'serve-static';
import './server/config/db.config';

app.use('/', serveStatic(path.join(__dirname, '/dist')))

let PORT = process.env.PORT || 3300

app.listen(PORT, ()=>{
    console.log(`App is listening on port: ${PORT}`)
})

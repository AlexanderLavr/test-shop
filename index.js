const express = require('express');
const path = require('path');
//const serveStatic = require('serveStatic')

const app = express();
// app.use()
app.use(express.static('dist'));
// app.use('/', serveStatic(path.join(__dirname, '/dist')))
let PORT = process.env.PORT || 3300
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})
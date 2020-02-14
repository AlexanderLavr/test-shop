const express = require('express');
const path = require('path');

const app = express();
// app.use(express.static('dist'));
let PORT = process.env.PORT || 3300
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})
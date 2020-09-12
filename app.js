const express = require("express");

const app = express();

// ROUTES
app.get('/', (req, res)=>{
    res.send('Its work!')
})

app.listen(3000);

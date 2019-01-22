const express = require('express'),
      app = express();


app.get('/lob', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.json({data: {lob: 'this is lob'}})
})

app.listen(5000);
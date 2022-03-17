const express = require('express');


const app = express();


app.get('/', (req, res) => {
    res.send('No war!');
});

app.listen(8080, () => {
    console.log('Listening on 8080 port');
})
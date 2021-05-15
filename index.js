const express = require('express');
var cors = require('cors');

var timeout = require('connect-timeout');

const app = express();
app.use(cors());

const haltOnTimedout = (req, res, next) => {
    if(!req.timedout) {
        next();
    }
}

app.use(timeout('20s'));
app.use(haltOnTimedout);
app.use('/', require('./routes/check'));

app.use((err, req, res, next) => {
    res.send('timed out');
  });

app.listen(process.env.PORT || 2000, ()=>{
    console.log("Server start")
})

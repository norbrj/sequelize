const express = require("express");
const routes = require("./routes");

const cors = require("cors");

require("./database");

const app = express();
app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(3333);

// const express = require('express')
// const app = express()

// app.use(express.static('public'))

// app.get('/hello', function (req, res) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.send('Hello World');
// })

// app.listen(3000, () => {
//     console.log('alive');
// })

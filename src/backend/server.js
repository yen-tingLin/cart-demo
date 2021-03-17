const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.json({
        message: 'middleware json'
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on ${port} !`);
});
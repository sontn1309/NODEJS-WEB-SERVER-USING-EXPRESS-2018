const express = require('express');
const bodyParser = require('body-parser');

const userRouters=require('./routes/user.route');
const app = express();
const db=require('./db');
// Set some defaults (required if your JSON file is empty)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
const port = 3000;
app.set('view engine', 'pug');
app.set('views', './views');
app.get('/', (req, res) => res.render('index', {
    users: [{
            id: 1,
            name: 'Son'
        },
        {
            id: 2,
            name: 'Hung'
        },
        {
            id: 3,
            name: 'Thung'
        }
    ]
}));
app.use(express.static('public'));
app.use('/users',userRouters);
app.listen(port, () => console.log(`Example app listen port on port ${port}`))
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser=require('cookie-parser');

const authMiddlewares=require("./middlewares/auth.middleware");
const sessionMiddleware=require("./middlewares/session.middleware");
const userRouters=require('./routes/user.route');
const authRouters=require('./routes/auth.route');
const cartRouters=require("./routes/cart.route");
const transferRouters=require("./routes/transfer.route");
const productsRouters=require('./routes/product.route');
const app = express();
const db=require('./db');
// Set some defaults (required if your JSON file is empty)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser('kcbskajcbksjacbskjacbskjacb'));
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
app.use(sessionMiddleware);
app.use('/users',authMiddlewares.requireAuth,userRouters);
app.use('/auth',authRouters);
app.use('/carts',cartRouters);
app.use('/products',productsRouters);
app.use('/transfer',transferRouters);
app.listen(port, () => console.log(`Example app listen port on port ${port}`))
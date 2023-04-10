const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./database/db-config');
const cookie = require('cookie-parser');
app.use('js/', express.static(__dirname + './public/js'));
app.use('css/', express.static(__dirname + './public/css'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(cookie());
app.use(express.json());
db.connect((err) => {
    if(err) throw err;
    console.log('Database connected.');
});
app.use('/', require('./routes/pages'));
app.use('/api', require('./controllers/auth'));

app.listen(PORT, () => console.log(`Up and running on PORT ${PORT}`));
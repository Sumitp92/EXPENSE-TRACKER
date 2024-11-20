const express = require('express');
const sequelize = require('./model/expenses'); 
const routes = require('./routes/router'); 
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.use('/api', routes); 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

sequelize.sync()
    .then(() => {
        app.listen(3000, () => {
            console.log('Server running on port 3000');
        });
    })
    .catch((err) => {
        console.error('Error syncing database:', err);
    });

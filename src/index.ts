import express from 'express';
const morgan = require('morgan');

//Init
const app = express();

//Settings
app.set('port', 3000);

//Middlewares


//Start Server
app.listen(app.get('port'), () => {
    console.log(`Server on Port ${app.get('port')}`);
});

app.use(morgan('tiny'));

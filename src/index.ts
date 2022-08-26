import express, {json, Router} from 'express';
import appRoutes from '../routes/index';
import peticionesRoutes from "../routes/peticionesRoutes";

const morgan = require('morgan');
const routes = Router();

//Init
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Start Server
app.listen(app.get('port'), () => {
    console.log(`Server on Port ${app.get('port')}`);
});

//Routes
app.get('/', appRoutes);
app.use('/peticiones', peticionesRoutes);




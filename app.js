import 'dotenv/config';
import express from 'express';
import routesProducts from './server/routes/productsRoutes.js'

const app = express();

//administrate the middlewares
app.use('/products', routesProducts)

//for the app to start
try{
    //listening port, if there is not a var in .env, the port is 3000
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log('Server active on port: '+ PORT));

}catch(e){
    console.log(e);
}
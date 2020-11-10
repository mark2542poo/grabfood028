const express = require('express');
const restaurantRouter = require('./routes/restaurant');
const hbs  = require('express-handlebars');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use('/',restaurantRouter);

const PORT = process.env.PORT || 8080;
app.listen(
    PORT,
    () => {
      console.log(`Listening to port ${PORT}`);
    }
  );
  
//Template engine setting
app.engine('hbs',hbs({extname:'hbs'}));
app.set('view engine', 'hbs');

//middleware
app.use(express.static(path.join(__dirname,'public')));
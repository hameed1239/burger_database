//import express server
const express = require('express');
//import sequelize database configuration file
const sequelize = require('./config/connection'); 

//create express instance
const app = express();

//make public folder a static file so that it is always available 
app.use(express.static('public'));

//middleware for URL encoding
app.use (express.urlencoded({extended: true}));
//middleware for json response
app.use(express.json());

//import express-handlebars
const exphbs = require('express-handlebars');  


// Define template engine
app.engine('handlebars', exphbs({
    defaultLayout: 'main',//specifies main.handlebars as the default layout
    runtimeOptions:{//Helps avoid runtime issues
        allowProtoProperties: true,
        allowProtoMethodsByDefault: true
    }
}))

//set template engine to be loaded by express 
app.set('view engine', 'handlebars');
const routes = require('./controllers/burgers_controller')
app.use(routes);

//listen on port 3001
const PORT = process.env.PORT || 3001 //the reason we do this is to give heroku the

sequelize.afterSync({ force: false}).then(() =>{
    app.listen(PORT,()=>{
        console.log(`App started on port ${PORT}`);
    })
})
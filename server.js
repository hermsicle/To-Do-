const express = require('express');
const app = express();
const PORT = 8000;

//! first step, app.use() method is using middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());    //*This is to get the json data on the client side in JSON 
app.use(express.static("./client")) //! This allows use to link our app.js or style.css in our index.html file.
//!app.use(express.static("./route")) very crucial line of code that will allow us to link our static files.

//! second step to make sure the server is listening
app.listen(PORT, () => {
    console.log(`listening on local: http://localhost:${PORT}`);
    //!after its running, make sure nodemon is started.
})

const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes);

const clientRoutes = require('./routes/clientRoutes');
app.use('/', clientRoutes);





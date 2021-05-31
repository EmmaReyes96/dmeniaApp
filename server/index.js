const express = require ('express');
const cors = require ('cors');
require('dotenv').config();

const { dbConnection } = require('./database/config');

const swaggerUI = require('swagger-ui-express');
const docs = require('./docs');

const app = express();
const Port = process.env.PORT || 5000;

dbConnection();

app.use( express.static('www') )

app.use(cors({origin: true, credentials: true}));
app.use( express.json() )

app.use('/api', require('./routes/routes'));
app.use('/', swaggerUI.serve , swaggerUI.setup(docs));


app.listen( Port , () => {
    console.log( 'Server on port ' + Port );
})
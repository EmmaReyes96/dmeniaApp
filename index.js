const express = require ('express');
const cors = require ('cors');
require('dotenv').config();
const { dbConnection } = require('./server/config');
const swaggerUI = require('swagger-ui-express');
const docs = require('./docs');
const path = require('path')

const app = express();
const Port = process.env.PORT || 5000;

dbConnection();

app.use( express.static('www') )

app.use(cors({origin: true, credentials: true}));
app.use( express.json() )

app.use('/api', require('./server/routes'));
app.use('/api-docs', swaggerUI.serve , swaggerUI.setup(docs));
app.get('*', (req, res) => {
    res.sendFile( path.resolve(__dirname, 'www/index.html'))
})


app.listen( Port , () => {
    console.log( 'Server on port ' + Port );
})
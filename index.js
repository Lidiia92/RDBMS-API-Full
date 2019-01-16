const express = require('express');
const helmet = require('helmet');
const cohortsRoutes = require('./routes/cohortsRoutes.js')


const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req,res) => {
    res.send("It is working");
});

server.use('/api/courses', cohortsRoutes);

server.listen(9000, () => console.log('\n Api is running \n'));
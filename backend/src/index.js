const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json());

const TaskRoutes = require('./routes/TaskRoutes');
server.use('/task',TaskRoutes);

server.listen(3030, () => {
    console.log('API On Line');
});
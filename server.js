const express = require('express');

const todoRoutes = require('./api/todoRoutes');
const server = express(); 

server.use(express.json());

server.use('/api/todo', todoRoutes);

server.get('/', (req, res) => {
    res.status(200).json({ message: 'The App is working' });
})

module.exports = server;